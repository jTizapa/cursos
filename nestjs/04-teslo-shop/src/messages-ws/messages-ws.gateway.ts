import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/interfaces';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;
  constructor(
    private readonly messagesWsService: MessagesWsService,
    private readonly jwtStrategy: JwtService,
  ) {}

  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authenticate as string;
    let payload: JwtPayload;

    try {
      payload = this.jwtStrategy.verify(token);
      await this.messagesWsService.registerClient(client, payload.id);
    } catch (error) {
      client.disconnect();
      return;
    }

    //console.log(token);
    //console.log({ conectados: this.messagesWsService.getConnectedClients() });

    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  handleDisconnect(client: Socket) {
    this.messagesWsService.removeClient(client.id);
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto) {
    console.log(client.id, payload);
    //! Emite unicamente al cliente.
    /*client.emit('message-from-server', {
      fullName: 'Señor de la noche',
      message: payload.message || 'no-message!!',
    });*/

    //Emitir a todo menos al cliente inicial
    client.broadcast.emit('message-from-server', {
      fullName: this.messagesWsService.getUserFullName(client.id),
      message: payload.message || 'no-message!!',
    });

    //Emite a todos.
    /*this.wss.emit('message-from-server', {
      fullName: 'Señor de la noche',
      message: payload.message || 'no-message!!',
    });*/
  }
}
