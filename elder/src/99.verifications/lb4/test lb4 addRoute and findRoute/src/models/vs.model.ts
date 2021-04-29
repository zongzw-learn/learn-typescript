import {Entity, model, property} from '@loopback/repository';

@model()
export class Vs extends Entity {
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
    itemType: 'object',
  })
  pools?: object[];


  constructor(data?: Partial<Vs>) {
    super(data);
  }
}
