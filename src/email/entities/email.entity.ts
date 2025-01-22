import { IsString, MinLength } from "class-validator";

export class Email {
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  message: string;
  @IsString()
  description: string | null;
}
