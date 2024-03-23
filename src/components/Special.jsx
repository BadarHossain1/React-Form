import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>You are my Special</h2>
            <p>I have the {asset}</p>
            <p>Also Has {gift}</p>
        </div>
    );
};

export default Special;