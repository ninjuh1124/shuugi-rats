import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { UpdateEntryDto } from 'src/entries/dto/update-entry.dto';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(OmitType(CreateGameDto, ["entries"])) {
	@IsArray()
	@ApiProperty()
	entries?: UpdateEntryDto[]
}
