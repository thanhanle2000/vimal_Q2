import queryString from 'query-string';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import "../../core/css/policy.css";
import Delivery from './widget/Delivery';
import Guide from './widget/Guide';
import Payment from './widget/Payment';
import ReturnProduct from './widget/ReturnProduct';
import Sercurity from './widget/Sercurity';

const PolicyContainer = () => {
    // LOCATION 
    const location = useLocation();

    // Parse the query string
    const queryParams = queryString.parse(location.search);

    // GET DATA 
    const data = queryParams?.type;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cpn: any;

    if (data === "/policy-security") cpn = <Sercurity />
    else if (data === "/policy-guide") cpn = <Guide />
    else if (data === "/policy-delivery") cpn = <Delivery />
    else if (data === "/policy-payment") cpn = <Payment />
    else if (data === "/policy-return-product") cpn = <ReturnProduct />

    return (
        <div>
            {cpn}
        </div>
    )
}

export default memo(PolicyContainer);
