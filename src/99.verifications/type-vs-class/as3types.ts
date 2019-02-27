export type AS3Object = {
    action: string;
    targetHost: string;
    targetPort: number;
    targetUsername: string;
    targetPassphrase: string;
    declaration: AS3Declaration;
}

export type AS3Declaration = {
    class: 'ADC';
    schemaVersion: string;
    id: string;
    tenants: AS3Tenant[];
}

export type AS3Tenant = {
    name: string;
    applications: AS3Application[];
}

export type AS3Application = {
    name: string;
    template: string;
    serviceMain: AS3ServiceHTTP;
}

export type AS3ServiceHTTP = {
    name: string;
    virtualAddresses: string[];
    pool: AS3Pool;
    policyWAF: AS3WAFPolicy;
}

export type AS3Pool = {
    name: string;
    monitors: string[];
    members: AS3PoolMember[];
}

export type AS3PoolMember = {
    servicePort: number;
    serverAddresses: string[];
}

export type AS3WAFPolicy = {
    name: string;
    url: string;
}

