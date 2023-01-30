import { GridMoney } from "./GridMoney";

export function Home() {
    return(
        <div className="flex flex-col items-center text-4xl">
            <h1 className="text-green-300 mb-7">Currency Converter</h1>
            <GridMoney/>
        </div>
    )
}