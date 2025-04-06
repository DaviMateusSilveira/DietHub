import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OllamaHttpService {
  private readonly logger = new Logger(OllamaHttpService.name);
  // The API endpoint for your locally running Ollama server
  private readonly apiUrl = 'http://127.0.0.1:11434/api/generate';

  constructor(private readonly httpService: HttpService) {}

  async generateDietContent(anamnese: string): Promise<string> {
    // Build your prompt
    const prompt = `Gere um plano alimentar detalhado em português baseado nestes dados: ${anamnese}, gerando com assertividade no tipo dos alimentos a serem consumidos e na quantificação, apresentar em gramas, apresentar também no documento, o nome do paciente`;

    const requestBody = {
      model: 'llama3:8b', // Adjust as needed
      prompt,
    };

    this.logger.debug(`Sending prompt to Ollama API: ${prompt}`);

    try {
      // If you need the response as text, you can set responseType:'text'
      const response = await firstValueFrom(this.httpService.post(this.apiUrl, requestBody, {
        timeout: 120000,
        responseType: 'text'
      }));

      // The response.data is expected to be a string with several JSON lines
      const rawData: string = response.data;
      this.logger.debug(`Raw response received:\n${rawData}`);

      // Split the response into lines and filter out empty lines
      const lines = rawData.split('\n').filter(line => line.trim().length > 0);

      // Parse each line as JSON and extract the "response" field
      const responseChunks = lines.map(line => {
        try {
          const obj = JSON.parse(line);
          return obj.response || '';
        } catch (error) {
          this.logger.error('Error parsing JSON line', error);
          return '';
        }
      });

      // Join all chunks into a complete string
      const fullResponse = responseChunks.join('');
      this.logger.debug(`Full assembled response: ${fullResponse}`);
      return fullResponse;
    } catch (error) {
      this.logger.error('Error calling Ollama API', error);
      throw new Error('Error generating content via Ollama HTTP API');
    }
  }
}
