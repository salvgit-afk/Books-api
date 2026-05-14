import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista di tutti i libri',
    description: 'Chiamata che restituisce tutti i libri presenti nella libreria'
  })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Ricerca di un libro per ID',
    description: 'Chiamata che restituisce un singolo libro presente nella libreria tramite ID'
  })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Inserimento di un libro',
    description: 'Chiamata che crea un libro da inserire nella libreria'
  })
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update di un libro',
    description: 'Chiamata che permette la modifica dei campi di un libro presente nella libreria tramite ID'
  })
  update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete di un libro',
    description: 'Chiamata che permette la cancellazione di un determinato libro presente nella libreria tramieìte ID'
  })
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}