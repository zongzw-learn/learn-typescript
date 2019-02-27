import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Vs} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VsRepository extends DefaultCrudRepository<
  Vs,
  typeof Vs.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Vs, dataSource);
  }
}
