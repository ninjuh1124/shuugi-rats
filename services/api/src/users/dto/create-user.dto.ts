import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@ApiProperty({ required: false, nullable: true })
	name: string;
}
