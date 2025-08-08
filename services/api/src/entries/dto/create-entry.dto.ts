import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEntryDto {
	@IsInt()
	@IsNotEmpty()
	@ApiProperty()
	score: number;

	@IsInt()
	@ApiProperty({ required: false, nullable: true })
	chipCount: number;

	@IsInt()
	@IsNotEmpty()
	@ApiProperty()
	rank: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	userId: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	gameId: string;
}
