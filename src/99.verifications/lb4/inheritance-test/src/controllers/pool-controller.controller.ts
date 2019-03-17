import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import { Pool, Monitor, ICMPMonitor, HttpMonitor } from '../models';
import { PoolRepository, MonitorRepository } from '../repositories';

export class PoolControllerController {
  constructor(
    @repository(PoolRepository)
    public poolRepository: PoolRepository,
    @repository(MonitorRepository)
    public monitorRepository: MonitorRepository
  ) { }

  @post('/pools', {
    responses: {
      '200': {
        description: 'Pool model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Pool } } },
      },
    },
  })
  async create(@requestBody() pool: Pool): Promise<Pool> {
    return await this.poolRepository.create(pool);
  }

  @post('/pools/{id}/monitors', {
    responses: {
      '200': {
        description: 'Monitor model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ICMPMonitor || HttpMonitor } } },
      },
    },
  })
  async createMonitor(
    @param.path.string('id') id: string,
    @requestBody() monitor: Partial<Monitor>
  ): Promise<Monitor> {
    console.log(monitor.type);
    switch (monitor.type) {
      case 'http':
        return await this.poolRepository.httpMonitors(id).create(monitor);
      case 'icmp':
        await await this.poolRepository.icmpMonitors(id).create(monitor);
      default:
        throw new HttpErrors.NotAcceptable("not accepted monitor type.");
    }
  }


  @get('/pools', {
    responses: {
      '200': {
        description: 'Array of Pool model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Pool } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pool)) filter?: Filter,
  ): Promise<Pool[]> {
    return await this.poolRepository.find(filter);
  }

  @get('/pools/{id}', {
    responses: {
      '200': {
        description: 'Pool model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Pool } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Pool> {
    return await this.poolRepository.findById(id);
  }

  @del('/pools/{id}', {
    responses: {
      '204': {
        description: 'Pool DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.poolRepository.deleteById(id);
  }

  // @patch('/pools', {
  //   responses: {
  //     '200': {
  //       description: 'Pool PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() pool: Pool,
  //   @param.query.object('where', getWhereSchemaFor(Pool)) where?: Where,
  // ): Promise<Count> {
  //   return await this.poolRepository.updateAll(pool, where);
  // }

  // @get('/pools/count', {
  //   responses: {
  //     '200': {
  //       description: 'Pool model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.query.object('where', getWhereSchemaFor(Pool)) where?: Where,
  // ): Promise<Count> {
  //   return await this.poolRepository.count(where);
  // }

  // @patch('/pools/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pool PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.string('id') id: string,
  //   @requestBody() pool: Pool,
  // ): Promise<void> {
  //   await this.poolRepository.updateById(id, pool);
  // }

  // @put('/pools/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pool PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.string('id') id: string,
  //   @requestBody() pool: Pool,
  // ): Promise<void> {
  //   await this.poolRepository.replaceById(id, pool);
  // }
}
