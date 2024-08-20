import { memo, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER } from '../../constant/router';
import { getDataLocalStorage } from '../../ultils/ultils';
import { useRecoilValue } from 'recoil';
import { getOrderCart } from '../../services/recoil/recoil';

const NumberOrderCart = () => {
    // USE NAVIGATE 
    const navigate = useNavigate();

    // USE LOCATION 
    const location = useLocation();
    const _path = location?.pathname;

    // GET DATA 
    const data = getDataLocalStorage('cart');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const quantity = data?.reduce((accumulator: any, item: any) => accumulator + item.quantity, 0);

    // RECOIL
    const _status = useRecoilValue(getOrderCart);

    // STATE 
    const [numberOrder, setNumberOrder] = useState(quantity);

    useEffect(() => {
        setNumberOrder(quantity);
    }, [_status, quantity])

    return (
        <div onClick={() => navigate(ROUTER?.CART)} className={_path === ROUTER?.ORDER_SUCCESS ? 'hidden' : "fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-[#ff4820] p-[10px] rounded-l-[16px] cursor-pointer"}>
            <div className="absolute top-[-12px] right-[2px] bg-red-600 text-white w-[18px] h-[18px]
                rounded-full flex items-center justify-center !text-[10px]">
                {numberOrder ?? 0}
            </div>
            <div className="text-white w-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
            </div>
        </div>
    )
}

export default memo(NumberOrderCart)
