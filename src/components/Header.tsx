import { Bank, Swap } from "phosphor-react";

export function Header() {
    return(
        <div className="text-4xl flex justify-center items-center flex-col">
            <div className="pb-2">
                <Bank className="text-emerald-300" size={40} />
            </div> 
            <h1 className="text-emerald-300 mb-7 font-[500] ">Currency Converter</h1>
            <img src="" alt="" />
        </div>
    )
}