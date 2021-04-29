import {model, property} from '@loopback/repository';
import {Monitor} from '.';

@model()
export class ICMPMonitor extends Monitor {
  @property({
    type: 'string',
  })
  ip?: string;

  @property({
    type: 'number',
  })
  interval?: number;


  constructor(data?: Partial<ICMPMonitor>) {
    super(data);
  }
}
