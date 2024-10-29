import { ClientKafka } from '@nestjs/microservices';
export declare class AppController {
    private readonly client;
    constructor(client: ClientKafka);
    reserveRoom(body: {
        roomId: string;
    }): Promise<{
        message: string;
    }>;
    cancelReservation(body: {
        roomId: string;
    }): Promise<{
        message: string;
    }>;
}
