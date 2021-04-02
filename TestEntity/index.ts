
import * as DurableFunctions from "durable-functions"

export default DurableFunctions.entity(async ctx => {

    console.log(`>>> Executing TestEntity.${ctx.df.operationName}...`);

    // Signalling ourselves
    ctx.df.signalEntity(ctx.df.entityId, ctx.df.operationName);

    await new Promise(resolve => setTimeout(resolve, 3500));

    console.log(`>>> Finished executing TestEntity.${ctx.df.operationName}`);
});
