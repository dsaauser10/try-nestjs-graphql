import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  // private readonly logger = new Logger(EmailService.name);

  async sendTestEmail(): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to: 'recipient@example.com',
        subject: 'Test Email from EmailService',
        text: 'This is a test email from the EmailService.',
      });
      return 'Email sent successfully from EmailService';
    } catch (error) {
      // Handle error, log, or return an error message
      console.error('Error sending email:', error);
      return 'Failed to send email from EmailService';
    }
  }
}
