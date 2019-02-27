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
} from '@loopback/rest';
import { Vs } from '../models';
import { VsRepository } from '../repositories';

export class VsController {
  constructor(
    @repository(VsRepository)
    public vsRepository: VsRepository,
  ) { }

  // @post('/vs', {
  //   responses: {
  //     '200': {
  //       description: 'Vs model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Vs}}},
  //     },
  //   },
  // })
  // async create(@requestBody() vs: Vs): Promise<Vs> {
  //   return await this.vsRepository.create(vs);
  // }

  // @get('/vs/count', {
  //   responses: {
  //     '200': {
  //       description: 'Vs model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.query.object('where', getWhereSchemaFor(Vs)) where?: Where,
  // ): Promise<Count> {
  //   return await this.vsRepository.count(where);
  // }

  // @get('/vs', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Vs model instances',
  //       content: {
  //         'application/json': {
  //           schema: {type: 'array', items: {'x-ts-type': Vs}},
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.query.object('filter', getFilterSchemaFor(Vs)) filter?: Filter,
  // ): Promise<Vs[]> {
  //   return await this.vsRepository.find(filter);
  // }

  // @patch('/vs', {
  //   responses: {
  //     '200': {
  //       description: 'Vs PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() vs: Vs,
  //   @param.query.object('where', getWhereSchemaFor(Vs)) where?: Where,
  // ): Promise<Count> {
  //   return await this.vsRepository.updateAll(vs, where);
  // }

  // @get('/vs/{id}', {
  //   responses: {
  //     '200': {
  //       description: 'Vs model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Vs}}},
  //     },
  //   },
  // })
  // async findById(@param.path.string('id') id: string): Promise<Vs> {
  //   return await this.vsRepository.findById(id);
  // }

  // @patch('/vs/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Vs PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.string('id') id: string,
  //   @requestBody() vs: Vs,
  // ): Promise<void> {
  //   await this.vsRepository.updateById(id, vs);
  // }

  // @put('/vs/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Vs PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.string('id') id: string,
  //   @requestBody() vs: Vs,
  // ): Promise<void> {
  //   await this.vsRepository.replaceById(id, vs);
  // }

  // @del('/vs/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Vs DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.string('id') id: string): Promise<void> {
  //   await this.vsRepository.deleteById(id);
  // }
}
