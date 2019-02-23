import { inject } from '@loopback/context';
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
  Route,
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
  ) { }

  async handle(context: RequestContext) {
    try {
      const { request, response } = context;
      console.log("request.path: " + request.path);
      const route = this.findRoute(request);
      console.log("route.path: " + route.path);
      // const args = await this.parseParams(request, route);
      // const result = await this.invoke(route, args);
      const result = {};
      this.send(response, result);
    } catch (err) {
      this.reject(context, err);
    }
  }
}
