import {useState, useEffect} from 'react'
import axios from 'axios';

export function GridMoney(){
    
    const [amount = 1, setAmount] = useState<number>()

    const [chooseOutputMoney, setchooseOutputMoney ] = useState("0")

    const getChooseOutpotMoney = async() => {
        try {
            const response = await axios.get(
                `https://brapi.dev/api/v2/currency?currency=USD-EUR`
            );

            let valueChooseOutputMoney = response.data.currency[0].bidPrice
            
                console.log(valueChooseOutputMoneyToNumber)

            setchooseOutputMoney(valueChooseOutputMoney)
        } catch (error) {   
            console.log(error)            
        }
    };

    useEffect(() => {
        getChooseOutpotMoney()
    },)
    let valueChooseOutputMoneyToNumber = parseFloat(chooseOutputMoney)


    function calc(){
        let convert = parseFloat((amount * valueChooseOutputMoneyToNumber).toFixed(2))
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

