import { Injectable, Logger } from '@nestjs/common';
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from 'docx';
import * as fs from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DocxService {
  private readonly logger = new Logger(DocxService.name);

  /**
   * Gera um documento DOCX estilizado com o conteúdo da dieta,
   * salva o arquivo na pasta pública e retorna a URL de download.
   * @param dietContent Conteúdo textual da dieta gerado pela IA.
   */
  async generateDietDocx(dietContent: string): Promise<string> {
    // Create a new Document by providing a sections array in the constructor.
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Personalized Diet Plan',
                  bold: true,
                  size: 48, // 24pt (docx uses half-points)
                }),
              ],
              alignment: 'center',
              heading: HeadingLevel.TITLE,
            }),
            new Paragraph({ text: '', spacing: { after: 200 } }),
            ...this.parseDietContent(dietContent),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'This plan was generated automatically by DietHub.',
                  size: 20, // 10pt
                }),
              ],
              alignment: 'center',
              spacing: { before: 200 },
            }),
          ],
        },
      ],
    });

    // Generate the document buffer
    const buffer = await Packer.toBuffer(doc);

    // Generate a unique filename
    const filename = `diet-plan-${uuidv4()}.docx`;
    // Define the file path (adjust the folder structure as needed)
    const filePath = join(__dirname, '..', '..', 'public', 'docx', 'generated', filename);

    // Ensure the folder exists (create it if it doesn't)
    const folderPath = join(__dirname, '..', '..', 'public', 'docx', 'generated');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Write the DOCX file to disk
    fs.writeFileSync(filePath, buffer);
    this.logger.debug(`DOCX generated at ${filePath}`);

    // Return a download URL (ensure your static file server is set to serve the "public" folder)
    return `http://localhost:3000/docx/generated/${filename}`;
  }

  /**
   * Interpreta o conteúdo da dieta e retorna um array de parágrafos formatados.
   * Separa títulos (linhas que terminam com ":") de itens de lista (que começam com "- " ou "* ").
   * @param dietContent Conteúdo textual da dieta.
   */
  private parseDietContent(dietContent: string): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    const lines = dietContent.split('\n').filter(line => line.trim().length > 0);

    for (const line of lines) {
      const trimmed = line.trim();

      // Se a linha termina com ":" e começa com letra maiúscula, considera como título de seção
      if (/^[A-ZÀ-Ú].+:$/.test(trimmed)) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: trimmed.replace(/:$/, ''),
                bold: true,
                size: 28, // 14pt
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          })
        );
      } else if (/^[-*]\s/.test(trimmed)) {
        // Se inicia com "- " ou "* ", trata como item de lista
        const text = trimmed.replace(/^[-*]\s+/, '');
        paragraphs.push(
          new Paragraph({
            children: [new TextRun(text)],
            bullet: { level: 0 },
          })
        );
      } else {
        // Caso contrário, é um parágrafo normal
        paragraphs.push(
          new Paragraph({
            children: [new TextRun(trimmed)],
            spacing: { after: 100 },
          })
        );
      }
    }
    return paragraphs;
  }
}
