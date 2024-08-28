import { Image } from "@nextui-org/react";
import { memo } from 'react';
import imgBanner from "../../assets/images/banner_00.jpg";
import imgIntroduce from "../../assets/images/banner_01.jpg";
import logo_01 from "../../assets/images/logo_01.jpg";
import logo_02 from "../../assets/images/logo_02.jpg";
import logo_03 from "../../assets/images/logo_03.jpg";

import "../../core/css/home.css";
import HomeProduct from './widget/HomeProduct';

const HomeContainer = () => {
    // [] PRODUCT 
    const lstProduct = [
        { id: 1, title: 'Chất lượng tuyệt vời', img: logo_01 },
        { id: 2, title: 'Sản phẩm giá tốt', img: logo_02 },
        { id: 3, title: 'Tiết kiệm không gian', img: logo_03 },
    ]
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__swiper mt-[70px]">
                    <Image
                        className="home__introduce__imgBanner"
                        src={imgBanner}
                        alt="Picture of the author"
                    />
                </div>
                <div className="home__introduce">
                    <h1 className="home__introduce__title font-semibold !text-[25px] !text-[#ff4820]">
                        Sản phẩm của chúng tôi
                    </h1>
                    <ul className="home__introduce__listImg">
                        {
                            lstProduct?.map(item =>
                                <div key={item?.id} className="flex flex-col cursor-pointer">
                                    <Image
                                        className="home__introduce__img__item"
                                        src={item?.img}
                                        alt={item?.title}
                                    />
                                    <span className="text-[16px] !pt-[10px]"> {item?.title} </span>
                                </div>
                            )
                        }
                    </ul>
                    <div className="home__introduce__text">
                        <div className="home__introduce__text__left">
                            <div className="left__text">
                                <h2 className="left__text--title font-semibold !text-[#ff4820]">
                                    Giới thiệu công ty INCA GROUP
                                </h2>
                                <p className="left__text--content mt-2 italic">
                                    "Công ty TNHH INCA GROUP mang đến người dùng những sản phẩm gia dụng chất lượng, cho khách hàng trải nghiệm tuyệt vời. Incamall cung cấp các đồ dùng nhà bếp như nồi, niêu, xoong, chảo,... với giá cả cạnh tranh trên thị trường, chất lượng đảm bảo. Kiểu dáng sang trọng, tinh tế, cùng với thiết kế thuận tiện cho người sử dụng, mang đến người dùng cảm giác chân thật, tốt và bền. Tiện dụng, đa năng với nhiều tính năng trong một sản phẩm, có thể tận dụng nhiều cách nấu khác nhau. Hãy để căn bếp của bạn trở nên hiện đại và tiện lợi hơn với các “trợ thủ đắc lực" phía bên dưới giỏ hàng nhé. Incamall - luôn trao cho khách hàng trải nghiệm mua sắm tuyệt vời cùng sản phẩm giá tốt, chất lượng."
                                </p>
                                <button className="left__button"></button>
                            </div>
                        </div>
                        <div className="home__introduce__text__right">
                            <Image
                                className="right__img"
                                src={imgIntroduce}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <HomeProduct />
                </div>
            </div>
        </div>
    )
}

export default memo(HomeContainer)
