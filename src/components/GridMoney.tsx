import {useState, } from 'react'

interface amountProps {
    amount: number
}


export function GridMoney(){
    
    const [amount, setAmount] = useState<number>(0)

    let eur = .92
    
    return (
        <div className="text-white h-96 w-96 border-solid border-2 border-sky-500">
            <p>USD:</p>
            <input 
                className="bg-black" 
                type="number" 
                placeholder='Enter the amount'
                value={amount}
                onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
            <p>EUR:</p>
            <p id="output">{(amount * eur).toFixed(2)}</p>
        </div>
    )
}