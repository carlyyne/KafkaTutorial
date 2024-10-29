import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Ctx, KafkaContext, MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class AppController{
  @MessagePattern('room-availability')
  handleEvent(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response =
        `Receiving a new message from topic: ` + context.getTopic() + ": " +
        JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }
}