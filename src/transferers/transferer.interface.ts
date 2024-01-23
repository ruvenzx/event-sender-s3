import { Provider } from "../providers/provider.interface"

export interface Transferer {
    
    provider: Provider
    init: Function
    getData: Function
}