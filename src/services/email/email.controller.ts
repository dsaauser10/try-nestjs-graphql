import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('send')
  async sendEmail(): Promise<string> {
    const result = await this.emailService.sendTestEmail();
    return result;
  }
}
