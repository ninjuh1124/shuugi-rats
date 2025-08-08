import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsJSON, IsNotEmpty, IsObject, IsString } from "class-validator";

export class CreateSessionDto {
	@IsString()
	@ApiProperty()
	name: string;

	@IsJSON()
	@IsNotEmpty()
	@ApiProperty()
	rules: string;

	@IsDate()
	@ApiProperty()
	expires: string;

	@IsBoolean()
	@ApiProperty()
	expired: boolean;
}
