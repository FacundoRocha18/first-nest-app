import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats/cats.service';
import { CreateCatDto } from './cats/dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // Get all cats
  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }

  // Get all cats async
  @Get()
  async findAllAsync(): Promise<any[]> {
    return [];
  }

  // Get all cats RxJS
  @Get()
  findAllObserver(): Observable<any[]> {
    return of([]);
  }

  // Get a cat by ID (referencing params)
  @Get(':id')
  findByIdFromParams(@Param() params): string {
    console.log(params.id);
    return `This action returns an #${params.id} cat`;
  }

  // Get a cat by ID (without referencing params)
  @Get(':id')
  findById(@Param('id') id): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  // Redirect a response to an URL
  @Get()
  @Redirect('https://localhost:4000', 301)
  miau(): string {
    return 'Miau';
  }

  // Post a new cat
  @Post()
  create(): string {
    return 'This action creates a new cat';
  }

  // Post new cat with custom Http Code and Header
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create2(): string {
    return 'This action creates a new cat';
  }

  @Post()
  async createCatWithDto(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
