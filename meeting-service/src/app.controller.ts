import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {AppService} from "./app.service";

@Controller('meetings')
export class AppController {
  constructor(
      @Inject('MEETING-SERVICE') private readonly client: ClientKafka,
  ) {}

  @Post('reserve')
  async reserveRoom(@Body() body: { roomId: string }) {
    const message = `ROOM_RESERVED: Room ${body.roomId} reserved`;
    this.client.emit('room-availability', message);
    return { message: 'Room reserved successfully' };
  }

  @Post('cancel')
  async cancelReservation(@Body() body: { roomId: string }) {
    const message = `ROOM_CANCELED: Reservation for Room ${body.roomId} canceled`;
    this.client.emit('room-availability', message);
    return { message: 'Reservation canceled successfully' };
  }
}