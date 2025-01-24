import { IsString, MinLength } from "class-validator";


export class SuscriptionDto {
  @IsString()
  @MinLength(1)
  email: string;

}