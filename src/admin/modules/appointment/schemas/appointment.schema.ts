import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppointmentDocument = Appointment & Document;

@Schema()
export class Appointment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  contact: string;

  @Prop({ required: true })
  dateTime: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  description: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
