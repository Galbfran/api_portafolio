import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    EmailModule,
    ConfigModule.forRoot(), // Para manejar variables de entorno
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Definir en .env
          pass: process.env.EMAIL_PASS, // Definir en .env
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>', // Remitente predeterminado
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
