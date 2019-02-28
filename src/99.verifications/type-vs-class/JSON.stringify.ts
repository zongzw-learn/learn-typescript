
export class AS3Object extends Object {
    class: string;

    constructor() {
        super();
    }
}

class Adc {
    host: string;
    port: number;
    username: string;
    passphrase: string;
}
export class AS3DeployRequest extends AS3Object {
    action: string;
    targetHost: string;
    targetPort: number;
    targetUsername: string;
    targetPassphrase: string;
    declaration: AS3Declaration;

    constructor(params: { [key: string]: Object }) {
        super();

        let adc = <Adc>params['adc'];

        this.class = 'AS3';
        this.action = 'deploy';
        this.targetHost = adc.host;
        this.targetPort = adc.port;
        this.targetUsername = adc.username;
        this.targetPassphrase = adc.passphrase;
        this.declaration = new AS3Declaration(params);
    }
}

export class AS3JSONObject extends Object {
    [key: string]: Object;
}

export class AS3Declaration extends AS3Object {
    schemaVersion: string;
    id: string;
    tenants: string[];

    constructor(params: { [key: string]: Object }) {
        super();

        this.class = 'ADC';
        this.schemaVersion = '3.0.0';
        this.id = 'tbd';
        this.tenants = [];
        this.tenants.push('params');
    }

    // toJSON(): Object {
    //     let obj: AS3JSONObject = {
    //         class: this.class,
    //         schemaVersion: this.schemaVersion,
    //         id: this.id,
    //         label: 'ADCaaS',
    //     };
    //     for (let tenant of this.tenants) {
    //         obj[tenant.name] = tenant;
    //     }
    //     return obj;
    // }
    toJSON(): Object {
        //let obj = Object.assign({label: 'ADCaaS'}, this)
        let obj: AS3JSONObject = {
            class: this.class,
            schemaVersion: this.schemaVersion,
            id: this.id,
            label: 'ADCaaS',
        };
        for (let tenant of this.tenants) {
            obj[tenant] = tenant;
        }
        return obj;
    }
}


let dr = new AS3DeployRequest({
    adc: {
        host: '', 
        port: '',
        username: '',
        passphrase: '',
    }
})

let objS = JSON.stringify(dr);
console.log(objS);
let obj = JSON.parse(objS);
console.log(obj)
