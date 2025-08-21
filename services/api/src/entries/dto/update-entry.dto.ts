import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateEntryDto } from './create-entry.dto';

export class UpdateEntryDto extends PartialType(CreateEntryDto) {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	id: string;
}
