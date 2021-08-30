import { IOClients } from '@vtex/api'

import { LeadsClient } from './leads'

export class Clients extends IOClients {
  public get leads() {
    return this.getOrSet('leads', LeadsClient)
  }
}
