import {ChangeEvent} from 'react'

interface Props {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    }

export const CurrencyChoice: React.FC<Props> = ({ onChange, value }) => { {
    return(
        <select 
        className="bg-slate-900 focus:outline-none"
        value={value}
        onChange={onChange}
        >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
        </select>
    )
    }
}