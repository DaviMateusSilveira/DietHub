import { Controller, Get, Query, InternalServerErrorException } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('download')
  async downloadPdf(@Query('dietInfo') dietInfo: string) {
    try {
      const downloadUrl = await this.pdfService.generateDietPDF(dietInfo);
      return { downloadUrl };
    } catch (error) {
      throw new InternalServerErrorException('Error generating PDF', error.message);
    }
  }
}
