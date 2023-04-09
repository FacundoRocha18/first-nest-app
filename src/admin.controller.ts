import { Controller, Get } from '@nestjs/common';

// Controller for a specific Host
@Controller({ host: 'admin.localhost.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
