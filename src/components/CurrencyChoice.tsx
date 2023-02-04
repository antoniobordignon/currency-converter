import {useState, useEffect} from 'react'
export function CurrencyChoice() {

    useEffect(() => {

    }, [])

    return(
        <select className="bg-slate-900 focus:outline-none">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
        </select>
    )
}