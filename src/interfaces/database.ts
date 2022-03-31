import {Client, ConfigOptions} from "../types"

export interface IDatabase {
  config: ConfigOptions | null
  client: null | Client
  connect: () => Promise<Client | Error>
  isConnected: () => Promise<Boolean | Error>
  closeConnection: () => Promise<void | Error>
}
