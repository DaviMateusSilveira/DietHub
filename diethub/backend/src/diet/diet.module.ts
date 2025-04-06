import { Module } from '@nestjs/common';
import { DietController } from './diet.controller';
import { DietService } from './diet.service';
import { AI_Module } from '../ai/ai.module';
import { DocxModule } from '../docx/docx.module';

@Module({
  imports: [AI_Module, DocxModule],
  controllers: [DietController],
  providers: [DietService],
})
export class DietModule {}
