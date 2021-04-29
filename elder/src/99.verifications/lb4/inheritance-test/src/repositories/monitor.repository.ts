import {DefaultCrudRepository} from '@loopback/repository';
import {Monitor} from '../models';
import {MemdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MonitorRepository extends DefaultCrudRepository<
  Monitor,
  typeof Monitor.prototype.id
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(Monitor, dataSource);
  }
}
