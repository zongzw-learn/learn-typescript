import { DefaultCrudRepository } from '@loopback/repository';
import { ICMPMonitor } from '../models';
import { MemdbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class IcmpMonitorRepository extends DefaultCrudRepository<
  ICMPMonitor,
  typeof ICMPMonitor.prototype.id
  > {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(ICMPMonitor, dataSource);
  }
}
