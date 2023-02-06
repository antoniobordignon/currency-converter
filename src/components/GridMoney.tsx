import {useState, useEffect, ChangeEvent} from 'react'
import axios from 'axios';
import { CurrencyChoice } from './CurrencyChoice';

export function GridMoney(){
    
    const [valueInputCurrency, setvalueInputCurrency] = useState('USD')
    
    function valueSelectedInput(event: ChangeEvent<HTMLSelectElement>){
        const valueInput = event.target.value
        setvalueInputCurrency(valueInput)
    }


    const [valueOutputCurrency, setvalueOutputCurrency] = useState('EUR')


    function valueSelectedOutput(event: ChangeEvent<HTMLSelectElement>) {
        const valueOutput = event.target.value
        setvalueOutputCurrency(valueOutput)
    }
    
    const [amount, setAmount] = useState(1)

    const [valueMoney, setValueMoney ] = useState("0")

    const getChooseOutpotMoney = async() => {
        try {
            const response = await axios.get(
                `https://brapi.dev/api/v2/currency?currency=${valueInputCurrency}-${valueOutputCurrency}`
            );

            let valueOutputMoney = response.data.currency[0].bidPrice
            setValueMoney(valueOutputMoney)
        } catch (error) {   
            console.log(error)            
        }
    };

    useEffect(() => {
        getChooseOutpotMoney()
    },[valueInputCurrency, valueOutputCurrency])

    let valueMoneyToNumber = parseFloat(valueMoney)

    function calc(){
        if(valueInputCurrency == valueOutputCurrency){
            var convert = parseFloat((amount * 1).toFixed(2))
        } else{
            var convert = parseFloat((amount * valueMoneyToNumber).toFixed(2))
        }
        if(amount <= 0 || isNaN(convert)){
            return 0
        } else {
            return convert
        }
    } 

    return (
        <div className="text-green-300 sm:flex justify-center items-center">
            <div className="sm:p-2 ">
                <div className="mb-10 text-center" >
                    <CurrencyChoice 
                    onChange={valueSelectedInput}
                    value={valueInputCurrency}
                    />
                </div>
                <input       
                    className="bg-black focus:outline-none w-64 h-32 text-center border-none appearance-none flex justify-center items-center m-auto" 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                />
            </div>
            <div className="sm:p-2 pt-10">
                <div className="mb-10 text-center" >
                    <CurrencyChoice 
                    onChange={valueSelectedOutput}
                    value={valueOutputCurrency}
                    />
                </div>
                <p 
                    id="output" 
                    className="bg-black w-64 h-32 flex justify-center items-center m-auto">
                    {calc()}
                </p>
            </div>
        </div>
    )
}

