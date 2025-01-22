import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) { }
  async create(createEmailDto: CreateEmailDto) {
    try {
      await this.mailerService.sendMail({
        cc: createEmailDto.email,
        to: process.env.EMAIL_USER,
        subject: createEmailDto.name,
        text: createEmailDto.description,
        html: `<p>${createEmailDto.description}</p>`,
      });
      return { message: 'Email enviado correctamente' };
    } catch (error) {
      return { message: 'Error al enviar el email' };
    }

  }


  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}


