import { Controller, Post, Body } from '@nestjs/common';
import { DietService } from './diet.service';

@Controller('diet')
export class DietController {
  constructor(private readonly dietService: DietService) {}

  @Post('generate')
  async generateDiet(@Body('anamnese') anamnese: string) {
    const downloadUrl = await this.dietService.generateDietPlan(anamnese);
    return { downloadUrl };
  }
}
