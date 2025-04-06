import { Injectable, Logger } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PdfService {
  private readonly logger = new Logger(PdfService.name);

  /**
   * Generates a PDF file with the provided diet content.
   * @param dietContent The text content generated from the AI.
   * @returns A URL to download the PDF.
   */
  async generateDietPDF(dietContent: string): Promise<string> {
    // Generate a unique filename for the PDF
    const filename = `diet-plan-${uuidv4()}.pdf`;
    // Define the output directory and file path. Adjust the folder structure as needed.
    const outputDir = join(__dirname, '..', 'pdf', 'generated');
    const filePath = join(outputDir, filename);

    // Ensure the output directory exists; if not, create it.
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      this.logger.debug(`Created directory: ${outputDir}`);
    }

    // Create a new PDF document
    const doc = new PDFDocument();
    const writeStream = createWriteStream(filePath);
    doc.pipe(writeStream);

    // Add PDF content
    doc.fontSize(20).text('Personalized Diet Plan', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(dietContent, { align: 'left' });
    doc.moveDown();
    doc.fontSize(10).text('This plan was generated automatically by DietHub.', { align: 'center' });

    // Finalize PDF file
    doc.end();

    // Wait until the PDF file is fully written
    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', () => resolve());
      writeStream.on('error', reject);
    });

    this.logger.debug(`PDF generated at ${filePath}`);

    // Return a download URL.
    return `http://localhost:3000/pdf/generated/${filename}`;
  }
}
