import { Image } from "@nextui-org/react";
import img_pro01 from "../../../assets/images/p0.jpg";
import img_pro02 from "../../../assets/images/p1.jpg";
import img_pro03 from "../../../assets/images/p2.jpg";
import { ROUTER } from '../../../core/constant/router';
import "../../../core/css/home.css";
import { useUpdateUrlParams } from '../../../core/ultils/ultils';

const HomeProduct = () => {
    // [] PRODUCT
    const listProduct = [
        {
            id: 0,
            image: img_pro01,
            name: "Chân gà ớt xanh Trùng Khánh cay",
            price: "75.000",
            href: "/product-item",
        },
        {
            id: 1,
            image: img_pro02,
            name: "Xiên dê nướng tẩm vị Hồ Nam siêu cay",
            price: "34.000",
            href: "/product-item1",
        },
        {
            id: 2,
            image: img_pro03,
            name: "Bò nướng siêu cay Trùng Khánh",
            price: "15.000",
            href: "/product-item2",
        },
    ];


    // HOOK
    const updateUrlParamsAndNavigate = useUpdateUrlParams();

    return (
        <div className="home__product">
            <h1 className="home__product__title font-semibold !text-[25px] !text-[#ff4820]">
                Sản phẩm của chúng tôi
            </h1>
            <ul className="home__product__list">
                {listProduct?.map((item, index) => (
                    <li key={index} className='home__product__listItemcursor-pointer' onClick={() => updateUrlParamsAndNavigate(ROUTER?.DETAIL_PRODUCT, { id: item?.id })}>
                        <Image
                            width={300}
                            className="home__product__img__item cursor-pointer shadow-xl mb-4"
                            src={item?.image}
                            alt={item?.name}
                        />
                        <h3 className="text-[16px]">{item?.name}</h3>
                        <p className="text-[16px] font-medium text-green-600">{item?.price}VNĐ</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeProduct