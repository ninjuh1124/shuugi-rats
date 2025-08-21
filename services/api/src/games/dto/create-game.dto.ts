import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsJSON, IsNotEmpty, IsString, IsUUID, Length } from "class-validator";
import { CreateEntryDto } from "src/entries/dto/create-entry.dto";

export class CreateGameDto {
	@IsJSON()
	@IsNotEmpty()
	@ApiProperty()
	rules: object;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	sessionId: string;

	@IsArray()
	@IsNotEmpty()
	@Length(4, 4)
	entries: CreateEntryDto[];
}
