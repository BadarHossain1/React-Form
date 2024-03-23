import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import './Grandpa.css';
import { createContext, useState } from "react";


export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'Diamond'
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            {/* <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section> */}
            <AssetContext.Provider value={asset}>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </MoneyContext.Provider>


            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;


// 1: Create a Context
// 2: Export it
// 3: Add Provider for the context with a value
// 4: Use Context Api