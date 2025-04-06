import { Module } from '@nestjs/common';
import { DocxService } from './docx.service';

@Module({
  providers: [DocxService],
  exports: [DocxService],
})
export class DocxModule {}
