import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './admin/modules/appointment/appointment.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://devronaktanwar:52vVBnvtsrrmVpcC@project-be.ng97ojr.mongodb.net/project-be?retryWrites=true&w=majority&appName=project-be',
    ),
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
