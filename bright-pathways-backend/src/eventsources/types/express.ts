import { PlainObject } from '@godspeedsystems/core';
import { EventSource } from '@godspeedsystems/plugins-express-as-http';
import cors from 'cors';

class MyEventSource extends EventSource {
  async initClient(): Promise<PlainObject> {
    const client = await super.initClient();
    client.use(cors());

    return client;
  }
}

export default MyEventSource;
