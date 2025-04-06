import { Injectable, Logger } from '@nestjs/common';
import { OllamaHttpService } from '../ai/ollama-http.service';
import { DocxService } from '../docx/docx.service';

@Injectable()
export class DietService {
  private readonly logger = new Logger(DietService.name);

  constructor(
    private readonly ollamaHttpService: OllamaHttpService,
    private readonly docxService: DocxService,
  ) {}

  async generateDietPlan(anamnese: string): Promise<string> {
    try {
      // Obtenha o conteúdo da dieta a partir do serviço de IA
      const dietContent = await this.ollamaHttpService.generateDietContent(anamnese);
      // Gere o documento DOCX e obtenha a URL para download
      const downloadUrl = await this.docxService.generateDietDocx(dietContent);
      return downloadUrl;
    } catch (error) {
      this.logger.error('Error generating diet plan', error);
      throw error;
    }
  }
}
