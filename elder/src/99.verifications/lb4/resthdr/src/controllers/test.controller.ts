import { inject, CoreBindings, invokeMethod, Context } from "@loopback/core";
import { CheckhdrService } from "../services";
import { get } from "@loopback/rest";
import { ResthdrApplication } from "../application";
import { RestCall } from "../datasources";

import { IncomingMessage } from "http";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class TestController {
  constructor(
    @inject('services.CheckhdrService')
    private checkhdrService: CheckhdrService,
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: ResthdrApplication,
  ) { }


  @get('/test')
  async checkHdr() {
    try {
      let response = await RestCall(this.application)
      console.log(response);
    } catch (error) {
      console.log("Error Happens: %o ", error);
    }

  }
}

