import { Entity, model, property } from '@loopback/repository';

@model()
export class Monitor extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true
  })
  poolId: string;

  constructor(data?: Partial<Monitor>) {
    super(data);
  }
}
