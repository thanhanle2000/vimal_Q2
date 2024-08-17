import { memo } from 'react'
import ItemProduct from './widget/ItemProduct'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../core/constant/router';

const ProductContainer = () => {
    // USE NAVIGATE 
    const navigate = useNavigate();

    return (
        <div className="home mt-[65px]">
            <div className='rounded-[10px] mb-[15px] p-[6px] border-[2px] border-green-600 w-[120px] cursor-pointer'
                onClick={() => navigate(ROUTER?.PRODUCT)}
            >
                Sản phẩm mới
            </div>
            <div className="product__container">
                <ItemProduct />
            </div>
        </div>
    )
}

export default memo(ProductContainer)
