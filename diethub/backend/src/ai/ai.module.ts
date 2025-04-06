import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OllamaHttpService } from './ollama-http.service';

@Module({
  imports: [HttpModule],
  providers: [OllamaHttpService],
  exports: [OllamaHttpService],
})
export class AI_Module {}
