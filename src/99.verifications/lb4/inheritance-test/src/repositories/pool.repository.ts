import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Pool, Monitor, ICMPMonitor, HttpMonitor } from '../models';
import { MemdbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MonitorRepository } from './monitor.repository';
import { IcmpMonitorRepository } from './icmp-monitor.repository';
import { HttpMonitorRepository } from './http-monitor.repository';

export class PoolRepository extends DefaultCrudRepository<
  Pool,
  typeof Pool.prototype.id
  > {

  public readonly icmpMonitors: HasManyRepositoryFactory<ICMPMonitor, typeof Pool.prototype.id>
  public readonly httpMonitors: HasManyRepositoryFactory<HttpMonitor, typeof Pool.prototype.id>
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
    @repository.getter('HttpMonitorRepository')
    getHttpMonitorRepository: Getter<HttpMonitorRepository>,
    @repository.getter('IcmpMonitorRepository')
    getIcmpMonitorRepository: Getter<IcmpMonitorRepository>
  ) {
    super(Pool, dataSource);
    this.icmpMonitors = this.createHasManyRepositoryFactoryFor('monitors', getIcmpMonitorRepository);
    this.httpMonitors = this.createHasManyRepositoryFactoryFor('monitors', getHttpMonitorRepository);
  }
}
