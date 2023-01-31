import {useState, } from 'react'

interface amountProps {
    amount: number
}


export function GridMoney(){
    
    const [amount, setAmount] = useState<number>(0)

    let eur = .92
    
    return (
        <div className="text-green-300 h-96 w-96 flex justify-center items-center">
            <div className="justify-center items-center p-2">
                <p className="p-2 mb-10 text-center">USD:</p>
                <input       
                    className="bg-black focus:outline-none p-2 w-64 h-32 text-center" 
                    type="number" 
                    placeholder='Enter the amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                />
            </div>
            <div className="justify-center items-center p-2">
                <p className="p-2 mb-10 text-center">EUR:</p>
                <p id="output" className="bg-black focus:outline-none p-2 w-64 h-32 flex justify-center items-center">{(amount * eur).toFixed(2)}</p>
            </div>
        </div>
    )
}