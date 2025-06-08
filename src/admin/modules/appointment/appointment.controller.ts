import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentsService: AppointmentService) {}

  @Post('create')
  async create(@Body() createDto: CreateAppointmentDto) {
    try {
      const created = await this.appointmentsService.create(createDto);
      return { success: true, data: created };
    } catch (error) {
      throw new HttpException(
        { success: false, message: 'Failed to create appointment' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    const appointments = await this.appointmentsService.findAll();
    return { success: true, data: appointments };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const appointment = await this.appointmentsService.findOne(id);
    if (!appointment) {
      throw new HttpException('Appointment not found', HttpStatus.NOT_FOUND);
    }
    return { success: true, data: appointment };
  }
}
