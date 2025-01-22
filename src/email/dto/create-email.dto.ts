import { IsString, MinLength } from "class-validator";


export class CreateEmailDto {
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  message: string;
  @IsString()
  description: string | null;
}
