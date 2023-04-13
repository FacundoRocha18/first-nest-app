import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AdminController],
})
export class AppModule {}
