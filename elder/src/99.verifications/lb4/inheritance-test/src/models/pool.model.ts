import { Entity, model, property, hasMany } from '@loopback/repository';
import { Monitor } from './monitor.model';

@model()
export class Pool extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @hasMany(() => Monitor, { keyTo: 'poolId' })
  monitors: Monitor[];

  constructor(data?: Partial<Pool>) {
    super(data);
  }
}
