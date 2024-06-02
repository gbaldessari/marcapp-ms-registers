import {Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe, Query} from '@nestjs/common';
import { RegistersService } from './registers.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import {GetRegistersByRangeDateDto} from "./dto/get-registers-by-range-date.dto";

@Controller('registers')
export class RegistersController {
  constructor(private readonly registersService: RegistersService) {}

  @Post('/create-register')
  @UsePipes(ValidationPipe)
  async createRegister(@Body() createRegisterDto: CreateRegisterDto) {
    return await this.registersService.createRegister(createRegisterDto);
  }

  @Get('/get-registers')
  getAllRegisters() {
    return this.registersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registersService.findOne(+id);
  }

  @Get('/get-registers-by-rangeData')
  @UsePipes(ValidationPipe)
  async findRegisters(@Query() params: GetRegistersByRangeDateDto) {
    return await this.registersService.findRegistersByRangeTime(
        params.token,
        params.startDate,
        params.endDate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registersService.remove(+id);
  }
}
