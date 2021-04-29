import { inject, invokeMethod, Context } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './rest.datasource.json';
import { DataSource } from 'loopback-datasource-juggler';
import { IncomingMessage } from 'http';
import { ResthdrApplication } from '../application.js';

export class MyRestDataSource extends juggler.DataSource {
  static dataSourceName = 'rest';

  constructor(
    @inject('datasources.config.rest', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

export type RestResponse = {
  headers: object,
  body: object
}

export async function RestCall(application: ResthdrApplication): Promise<RestResponse> {

  let ds = await application.get<DataSource>('datasources.rest');
  let model = ds.createModel('internalModel');
  let response: RestResponse = { headers: {}, body: {} };

  await invokeMethod(model, 'internalFunc', application,
    [
      "http://foxfox.mychinabluemix.net", "GET",
      function (err: object, rlt: object, resp: IncomingMessage) {
        response = {
          headers: resp.headers,
          body: rlt
        }
      }
    ],
  );
  return response;
}
