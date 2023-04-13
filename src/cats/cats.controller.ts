import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // Get all cats
  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }

  // Get a cat by ID (without referencing params)
  @Get(':id')
  findById(@Param('id') id): string {
    return this.catsService.findById(id);
  }

  // Create a new cat using Data Transfer Object
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
