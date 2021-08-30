import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export class LeadsClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://250uz6a34l.execute-api.us-west-1.amazonaws.com', context, options)
  }

public async leads(): Promise<object> {
const response = await this.http.get('/leads')

return response.Items
  }
}
