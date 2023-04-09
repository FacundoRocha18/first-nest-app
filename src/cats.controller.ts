import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  // Get all cats
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  // Get a cat by ID (referencing params)
  @Get(':id')
  findByIdFromParams(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} ID`;
  }
  // Get a cat by ID (without referencing params)
  @Get(':id')
  findById(@Param('id') id): string {
    console.log(id);
    return `This action returns a #${id} ID`;
  }

  @Post()
  create(): string {
    return 'This action creates a new cat';
  }
}
