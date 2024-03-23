

import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa"; 



const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Jolifa'}></Cousin>
                <Cousin name={'Sokina'}></Cousin>


            </section>
            <p>{money}</p>
            
        </div>
    );
};

export default Aunty;
