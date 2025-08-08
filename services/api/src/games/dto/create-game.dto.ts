import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsString } from "class-validator";

export class CreateGameDto {
	@IsJSON()
	@IsNotEmpty()
	@ApiProperty()
	rules: object;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	sessionId: string;
}
