import { Image } from "@nextui-org/react";
import img_pro01 from "../../../assets/images/pro_01.jpg";
import img_pro02 from "../../../assets/images/pro_02.jpg";
import img_pro03 from "../../../assets/images/pro_03.jpg";
import { ROUTER } from "../../../core/constant/router";
import "../../../core/css/home.css";
import { useUpdateUrlParams } from "../../../core/ultils/ultils";

const HomeProduct = () => {
  // [] PRODUCT
  const listProduct = [
    {
      id: 0,
      image: img_pro01,
      name: "Nồi lẩu nướng hấp đa năng Bear 4 lít-DHG-C40w2",
      price: "799.000",
      href: "/product-item",
    },
    {
      id: 1,
      image: img_pro02,
      name: "Chảo chống dính BDO đá y tế dùng chiên rán tiện dụng",
      price: "187.000",
      href: "/product-item1",
    },
    {
      id: 2,
      image: img_pro03,
      name: "Bộ Nồi Chảo Nhật Bản Chống Dính Vân Đá, Bảo Hành 6 Tháng, Dùng Mọi Loại Bếp, Chiên Xào Nấu Đa Năng",
      price: "329.000",
      href: "/product-item2",
    },
  ];

  // HOOK
  const updateUrlParamsAndNavigate = useUpdateUrlParams();

  return (
    <div className="home__product cursor-pointer !items-center !text-center !justify-center">
      <h1 className="home__product__title font-semibold !text-[25px] !text-[#ff4820]">
        Sản phẩm của chúng tôi
      </h1>
      <div className=" flex flex-row items-center gap-[10px] m-auto justify-center">
        {listProduct?.map((item, index) => (
          <div
            key={index}
            className="w-[30%]"
            onClick={() =>
              updateUrlParamsAndNavigate(ROUTER?.DETAIL_PRODUCT, {
                id: item?.id,
              })
            }
          >
            <Image
              width={300}
              className="home__product__img__item cursor-pointer shadow-xl mb-4"
              src={item?.image}
              alt={item?.name}
            />
            <h3 className="text-[16px] text-left">{item?.name}</h3>
            <p className="text-[16px] font-medium text-green-600">
              {item?.price}VNĐ
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
