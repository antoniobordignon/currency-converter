import { Bank } from "phosphor-react";

export function Header() {
    return(
        <div className="pb-5 text-4xl flex justify-center items-center flex-col">
            <div className="pb-2">
                <Bank className="text-emerald-300" size={40} />
            </div> 
            <h1 className="text-emerald-300 mb-7 font-[500] text-center">Currency Converter</h1>
        </div>
    )
}