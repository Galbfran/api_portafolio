import { IsOptional, IsString, MinLength } from "class-validator";


export class CreateEmailDto {
  @IsString()
  @MinLength(1)
  email: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsOptional()
  @IsString()
  description: string;
}
