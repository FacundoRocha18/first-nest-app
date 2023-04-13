import { Controller, Get } from '@nestjs/common';

// Controller for Sub-domain Routing
@Controller({ path: 'api', host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
