import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState.jsx";

const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    return(
        <>
            <h4>Your Balance</h4>
            <h1 className="balance">$0.00</h1>
        </>
    )
}
export default Balance;