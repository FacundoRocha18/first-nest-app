import { Body, Injectable, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'This action returns all cats';
  }

  findById(@Param('id') id): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  async create(@Body() createCatDto: CreateCatDto) {
    return `Added new cat called ${createCatDto.name} that is ${createCatDto.age} years old`;
  }
}
