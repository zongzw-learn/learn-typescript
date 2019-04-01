import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { MyRestDataSource } from '../datasources';
import { Connector } from 'loopback-datasource-juggler';

export interface CheckhdrService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  checkHeader(): Promise<object>
}

export class CheckhdrServiceProvider implements Provider<CheckhdrService> {
  constructor(
    // rest must match the name property in the datasource json file
    @inject('datasources.rest')
    protected dataSource: MyRestDataSource = new MyRestDataSource(),
  ) { }

  value(): Promise<CheckhdrService> {
    return getService(this.dataSource);
  }
}
