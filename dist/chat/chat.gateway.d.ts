import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Message } from 'src/message/entities/message.entity';
import { Repository } from 'typeorm';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private messageRepo;
    server: Server;
    constructor(messageRepo: Repository<Message>);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleMessage(data: {
        sender: string;
        text: string;
    }, client: Socket): Promise<void>;
}
