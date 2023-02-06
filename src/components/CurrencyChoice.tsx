import {ChangeEvent} from 'react'

interface Props {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    }

export const CurrencyChoice: React.FC<Props> = ({ onChange, value }) => { {

    let currencies = [ 
        {currency: "United States Dollar", value: "USD" },
        {currency: "Euro", value: "EUR" },
        {currency: "Real", value: "BRL" },
        {currency: "Canadian Dollar", value: "CAD" },
        {currency: "Pound Sterling", value: "GBP" },
        {currency: "Japanese Yen", value: "JPY" },
        {currency: "Swiss Franc", value: "CHF" },
        {currency: "Australian Dollar", value: "AUD" },
        {currency: "Argentine Peso", value: "ARS" },
        {currency: "Chinese Yuan", value: "CNY" },
        {currency: "Israeli New Shekel", value: "ILS" },
        {currency: "New Zealand Dollar", value: "NZD" },
        {currency: "New Turkish Lira", value: "TRY" },
        {currency: "Mexican Peso", value: "MXN" },
        {currency: "Polish Zloty", value: "PLN" },
        {currency: "Swedish Krona", value: "SEK" },
        {currency: "Singapore Dollar", value: "SGD" },
        {currency: "Danish Crown", value: "DKK" },
        {currency: "South African Rand", value: "ZAR" },
        {currency: "Norwegian Krone", value: "NOK" },
        {currency: "Hungarian Forint", value: "HUF" },
        {currency: "czech crown", value: "CZK" },
        {currency: "Thai Baht", value: "THB" },
        {currency: "Emirates Dirham", value: "AED" },
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