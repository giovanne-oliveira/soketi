import { AppInterface } from './app';
import { ConsumerOptions } from 'sqs-consumer';
import { SQS } from 'aws-sdk';

interface Redis {
    host: string;
    port: number;
    db: number;
    username: string|null;
    password: string|null;
    keyPrefix: string;
    sentinels: RedisSentinel[];
    sentinelPassword: string|null;
    name: string;
}

interface RedisSentinel {
    host: string;
    port: number;
}

interface KnexConnection {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

export interface Options {
    adapter: {
        driver: string;
        redis: {
            prefix: string;
        };
    };
    appManager: {
        driver: string;
        array: {
            apps: AppInterface[];
        };
        dynamodb: {
            table: string;
            region: string;
            endpoint?: string;
        };
        mysql: {
            table: string;
            version: string|number;
            useMysql2: boolean;
        };
        postgres: {
            table: string;
            version: string|number;
        };
    };
    channelLimits: {
        maxNameLength: number;
    };
    cluster: {
        host: string;
        helloInterval: number;
        checkInterval: number;
        nodeTimeout: number,
        masterTimeout: number;
        port: number;
        prefix: string;
        ignoreProcess: boolean;
    };
    cors: {
        credentials: boolean;
        origin: string[];
        methods: string[];
        allowedHeaders: string[];
    };
    database: {
        mysql: KnexConnection;
        postgres: KnexConnection;
        redis: Redis;
    };
    databasePooling: {
        enabled: boolean;
        min: number;
        max: number;
    };
    debug: boolean;
    eventLimits: {
        maxChannelsAtOnce: string|number;
        maxNameLength: string|number;
        maxPayloadInKb: string|number;
        maxBatchSize: string|number;
    };
    httpApi: {
        requestLimitInMb: string|number;
        acceptTraffic: {
            memoryThreshold: number;
        };
    };
    instance: {
        process_id: string|number;
    };
    metrics: {
        enabled: boolean;
        driver: string;
        prometheus: {
            prefix: string;
        };
        port: number;
    };
    mode: string;
    port: number;
    pathPrefix: string;
    presence: {
        maxMembersPerChannel: string|number;
        maxMemberSizeInKb: string|number;
    };
    queue: {
        driver: string;
        redis: {
            concurrency: number;
        };
        sqs: {
            region?: string;
            client_options?: SQS.Types.ClientConfiguration;
            consumer_options?: ConsumerOptions;
            queues: {
                client_event_webhooks: string;
                member_added_webhooks: string;
                member_removed_webhooks: string;
                channel_vacated_webhooks: string;
                channel_occupied_webhooks: string;
            };
        };
    };
    rateLimiter: {
        driver: string;
    };
    shutdownGracePeriod: number;
    ssl: {
        certPath: string;
        keyPath: string;
        passphrase: string;
        caPath: string;
    };
    webhooks: {
        batching: {
            enabled: boolean;
            duration: number;
        };
    };
}
