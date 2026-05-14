import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({
    description: 'Nome completo del libro',
    example: 'Don Chisciotte'
  })
  title!: string;

  @ApiProperty({
    description: 'Nome completo autore',
    example: 'Miguel De Cervantes',
  })
  author!: string;

  @ApiProperty({
    description: 'Anno di pubblicazione del libro',
    example: '1605',
  })
  year!: number;

  @ApiProperty({
    description: 'Genere del libro',
    example: 'Romanzo',
  })
  genre?: string;
}