import { AzureFunction, Context } from '@azure/functions';
import * as DurableFunctions from 'durable-functions';

const timerTrigger: AzureFunction = async function (context: Context): Promise<void> {

    const durableClient = DurableFunctions.getClient(context);

    durableClient.signalEntity(new DurableFunctions.EntityId('TestEntity', 'my-entity-id'), 'test-operation');
};

export default timerTrigger;
