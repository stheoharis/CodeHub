import { ICurrency } from './ICurrency';

export interface ICountry {
    capital: string ;
    name: string;
    currencies: Array<ICurrency>;

}
