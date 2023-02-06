import axios from 'axios';
import {ChangeEvent, useState, useEffect} from 'react'

interface Props {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    }

export const CurrencyChoice: React.FC<Props> = ({ onChange, value }) => { {

    let currencies = [ 
        {currency: "American Dollar", value: "USD" },
        {currency: "Euro", value: "EUR" },
        {currency: "Real", value: "BRL" },
        {currency: "Canadian Dollar", value: "CAD" },
        {currency: "Pound Sterling", value: "GBP" },
        {currency: "Japanese Yen", value: "JPY" },
        {currency: "Swiss Franc", value: "CHF" },
        {currency: "Australian Dollar", value: "AUD" },
] 
    
    return(
        <select 
        className="bg-slate-900 focus:outline-none text-center"
        value={value}
        onChange={onChange}
        >
            {currencies.map((currencies) => (
            <option value={currencies.value}>
                {currencies.currency}
            </option>
                ))}
        </select>
    )
    }
}