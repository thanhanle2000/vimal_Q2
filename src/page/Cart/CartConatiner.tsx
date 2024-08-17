import { memo } from 'react'
import CartAddressOrder from './widget/CartAddressOrder'
import CartListOrder from './widget/CartListOrder'

const CartConatiner = () => {
    return (
        <div className='flex flex-row w-full my-[30px]'>
            <CartAddressOrder />
            <CartListOrder />
        </div>
    )
}

export default memo(CartConatiner)
