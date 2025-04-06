import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DietModule } from './diet/diet.module';
import { AI_Module } from './ai/ai.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'pdf', 'generated'),
      serveRoot: '/pdf/generated',
    }),
    DietModule,
    AI_Module,
    PdfModule,
  ],
})
export class AppModule {}
