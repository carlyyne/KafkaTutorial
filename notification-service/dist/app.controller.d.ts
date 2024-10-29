import { KafkaContext } from "@nestjs/microservices";
export declare class AppController {
    handleEvent(message: any, context: KafkaContext): string;
}
