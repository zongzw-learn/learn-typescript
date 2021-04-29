import { model, property } from '@loopback/repository';
import { Monitor } from '.';

@model()
export class HttpMonitor extends Monitor {
  @property({
    type: 'string',
    required: true,
  })
  ip: string;

  @property({
    type: 'number',
    required: true,
  })
  port: number;

  @property({
    type: 'number',
  })
  timeout?: number;


  constructor(data?: Partial<HttpMonitor>) {
    super(data);
  }
}
