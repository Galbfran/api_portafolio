import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import email from './helpers/email';


@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) { }
  async create(createEmailDto: CreateEmailDto) {
    try {
      await this.mailerService.sendMail({
        to: "francogalbiati984@gmail.com",
        cc: createEmailDto.email,
        subject: createEmailDto.name,
        text: createEmailDto.description,
        html: email({ createEmailDto }),
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


