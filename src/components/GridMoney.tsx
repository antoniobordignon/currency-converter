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
        <div className="text-green-300 sm:flex justify-center items-center">
            <div className="sm:p-2 ">
                <p className="mb-10 text-center">USD:</p>
                <input       
                    className="bg-black focus:outline-none w-64 h-32 text-center border-none appearance-none flex justify-center items-center m-auto" 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                />
            </div>
            <div className="sm:p-2 pt-10">
                <p className=" mb-10 text-center">EUR:</p>
                <p 
                    id="output" 
                    className="bg-black w-64 h-32 flex justify-center items-center m-auto">
                    {calc()}
                </p>
            </div>
        </div>
    )
}