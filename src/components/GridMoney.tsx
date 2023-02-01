import {useState, } from 'react'

export function GridMoney(){
    
    const [amount = 1, setAmount] = useState<number>()

    let eur = .92

    function calc(){
        let convert = parseFloat((amount * eur).toFixed(2))
        if(amount <= 0 || isNaN(convert)){
            return 0
        } else {
            return convert
        }
    } 

    return (
        <div className="text-green-300 h-96 w-96 flex justify-center items-center">
            <div className="justify-center items-center p-2">
                <p className="p-2 mb-10 text-center">USD:</p>
                <input       
                    className="bg-black focus:outline-none p-2 w-64 h-32 text-center border-none appearance-none" 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                />
            </div>
            <div className="justify-center items-center p-2">
                <p className="p-2 mb-10 text-center">EUR:</p>
                <p 
                    id="output" 
                    className="bg-black focus:outline-none p-2 w-64 h-32 flex justify-center items-center">
                    {calc()}
                </p>
            </div>
        </div>
    )
}