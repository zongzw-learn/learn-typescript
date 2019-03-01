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
import { Pool, Member } from '../models';
import { PoolRepository, MemberRepository } from '../repositories';

export class PoolController {
  constructor(
    @repository(PoolRepository)
    public poolRepository: PoolRepository,
    @repository(MemberRepository)
    public memberRepository: MemberRepository,
  ) { }

  @post('/pools', {
    responses: {
      '200': {
        description: 'Pool model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Pool } } },
      },
    },
  })
  async create(@requestBody() pool: Partial<Pool>): Promise<Pool> {
    return await this.poolRepository.create(pool);
  }

  // @get('/pools', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Pool model instances',
  //       content: {
  //         'application/json': {
  //           schema: { type: 'array', items: { 'x-ts-type': Pool } },
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.query.object('filter', getFilterSchemaFor(Pool)) filter?: Filter,
  // ): Promise<Pool[]> {
  //   return await this.poolRepository.find(filter);
  // }


  @get('/pools/{longnamepoolid}', {
    responses: {
      '200': {
        description: 'Pool model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Pool } } },
      },
    },
  })
  async findById(@param.path.string('longnamepoolid') id: string): Promise<Pool> {
    console.log(`/pools/{longnamepoolid}: poolid: ${id}`);
    let pool: Pool = await this.poolRepository.findById(id);
    console.log(pool.members);
    return pool;
  }


  @get('/pools/{poolid}/members/{memberid}', {
    responses: {
      '200': {
        description: 'Member model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Member } } },
      },
    },
  })
  async findMemberById(
    @param.path.string('memberid') memberid: string,
    @param.path.string('poolid') poolid: string
  ): Promise<Pool> {
    console.log(`/pools/{ poolid } / members / { memberid }: poolid: ${poolid}, memberid: ${memberid}`);
    return new Promise<Pool>(() => { });
    return await this.poolRepository.findById(poolid);
  }




  // @del('/pools/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Pool DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.string('id') id: string): Promise<void> {
  //   console.log("/pools/{id}: " + id);

  //   await this.poolRepository.deleteById(id);
  // }
}
