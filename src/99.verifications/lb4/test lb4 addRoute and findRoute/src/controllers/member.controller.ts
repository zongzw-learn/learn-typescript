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
import { Member } from '../models';
import { MemberRepository } from '../repositories';

export class MemberController {
  constructor(
    @repository(MemberRepository)
    public memberRepository: MemberRepository,
  ) { }

  // @post('/members', {
  //   responses: {
  //     '200': {
  //       description: 'Member model instance',
  //       content: { 'application/json': { schema: { 'x-ts-type': Member } } },
  //     },
  //   },
  // })
  // async create(@requestBody() member: Member): Promise<Member> {
  //   return await this.memberRepository.create(member);
  // }

  // @get('/members', {
  //   responses: {
  //     '200': {
  //       description: 'Array of Member model instances',
  //       content: {
  //         'application/json': {
  //           schema: { type: 'array', items: { 'x-ts-type': Member } },
  //         },
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.query.object('filter', getFilterSchemaFor(Member)) filter?: Filter,
  // ): Promise<Member[]> {
  //   return await this.memberRepository.find(filter);
  // }

  // @get('/pools/{poolid}/members/{memberid}', {
  //   responses: {
  //     '200': {
  //       description: 'Member model instance',
  //       content: { 'application/json': { schema: { 'x-ts-type': Member } } },
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.string('memberid') memberid: string,
  //   @param.path.string('poolid') poolid: string
  // ): Promise<Member> {
  //   console.log("/pools/{poolid}/members/{memberid}: poolid: ${poolid}, memberid: ${memberid}");
  //   return await this.memberRepository.findById(memberid);
  // }

  // @del('/pools/{poolid}/members/{memberid}', {
  //   responses: {
  //     '204': {
  //       description: 'Member DELETE success',
  //     },
  //   },
  // })
  // async deleteById(
  //   @param.path.string('memberid') memberid: string,
  //   @param.path.string('poolid') poolid: string
  // ): Promise<void> {
  //   console.log("/pools/{poolid}/members/{memberid}: poolid: ${poolid}, memberid: ${memberid}");
  //   await this.memberRepository.deleteById(memberid);
  // }
}
