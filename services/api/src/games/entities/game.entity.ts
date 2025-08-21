import { ApiProperty } from "@nestjs/swagger"
import { Game } from "generated/prisma"

export class GameEntity implements Game {
	constructor(partial: Partial<GameEntity>) {
		Object.assign(this, partial);
	}

	@ApiProperty()
	id: string;

	@ApiProperty()
	// TODO: make rules object interface
	rules: object;

	@ApiProperty()
	sessionId: string;

	@ApiProperty()
	createdAt: Date;
}
