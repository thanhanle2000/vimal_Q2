import { memo, useEffect } from 'react';
import order_success from "../../assets/images/order_success.gif";
import { clearDataFromLocal } from '../../core/ultils/ultils';

const OrderSuccessContainer = () => {

    useEffect(() => { clearDataFromLocal('cart') }, [])

    return (
        <div className='m-auto flex flex-col justify-center items-center'>
            <img src={order_success} className='w-[40%]' />
            <span>
                Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ để xác nhận đơn hàng!!!
            </span>
        </div>
    )
}

export default memo(OrderSuccessContainer);
