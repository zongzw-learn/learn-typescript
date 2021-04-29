import {DefaultCrudRepository} from '@loopback/repository';
import {HttpMonitor} from '../models';
import {MemdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HttpMonitorRepository extends DefaultCrudRepository<
  HttpMonitor,
  typeof HttpMonitor.prototype.id
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(HttpMonitor, dataSource);
  }
}
