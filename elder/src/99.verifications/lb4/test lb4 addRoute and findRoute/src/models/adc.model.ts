import { Entity, model, property } from '@loopback/repository';

@model()
export class Adc extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  vses?: string[];


  constructor(data?: Partial<Adc>) {
    super(data);
  }
}
