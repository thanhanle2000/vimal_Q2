import { Image } from "@nextui-org/react";
import { memo } from 'react';
import imgBanner from "../../assets/images/banner-home.jpg";
import imgIntroduce from "../../assets/images/img-home-introduce-text.jpg";
import img_home1 from "../../assets/images/img-home1.jpg";
import { default as img_home2, default as img_home3 } from "../../assets/images/img-home2.jpg";
import "../../core/css/home.css";
import HomeProduct from './widget/HomeProduct';

const HomeContainer = () => {
    // [] PRODUCT 
    const lstProduct = [
        { id: 1, title: 'Đậm đà, tiện lợi', img: img_home1 },
        { id: 2, title: 'Hương vị cổ truyền', img: img_home2 },
        { id: 3, title: 'Tiện dụng dễ dùng', img: img_home3 },
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
                                    Giới thiệu công ty VIMALL
                                </h2>
                                <p className="left__text--content mt-2 italic">
                                    "VIMALL hân hạnh giới thiệu đến bạn bộ sưu tập đồ ăn vặt Trung
                                    Quốc hấp dẫn và đa dạng. Từ những món snack giòn tan, đậm đà,
                                    đến các loại kẹo ngọt thanh, tất cả đều được chọn lọc kỹ càng
                                    để mang đến cho bạn hương vị độc đáo và chất lượng nhất. Với
                                    VIMALL, việc thưởng thức ẩm thực Trung Hoa chưa bao giờ dễ
                                    dàng và tiện lợi đến thế. Hãy đến với VIMALL để trải nghiệm
                                    những món ngon chuẩn vị Trung Quốc, ngay tại Việt Nam!"
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
