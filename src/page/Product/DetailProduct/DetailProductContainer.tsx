/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Image, Radio, RadioGroup } from "@nextui-org/react";
import queryString from "query-string";
import { memo, useState } from 'react';
import { useLocation } from "react-router-dom";
import "../../../core/css/product.css";
import { listProduct } from "../widget/ItemProduct";
import { toast } from "react-toastify";
import { getDataLocalStorage, setDataLocalStorage } from "../../../core/ultils/ultils";
import { useRecoilState } from "recoil";
import { setOrderCart } from "../../../core/services/recoil/recoil";

const DetailProductContainer: React.FC = () => {
    // LOCATION 
    const location = useLocation();

    // Parse the query string
    const queryParams = queryString.parse(location.search);

    // Access and convert specific query parameter to number
    const id = parseInt(queryParams.id as string, 10);

    // GET DATA
    const data = listProduct?.find((item) => item?.id === id);

    // STATE 
    const [quantity, setQuantity] = useState<number>(1);
    const [selected, setSelected] = useState("1");

    // RECOIL 
    const [_, setStatusOrder] = useRecoilState(setOrderCart);

    // ADD CART
    const addCart = (quantity: number) => {
        if (data) {
            // PRODUCT
            const product = {
                id: data?.id,
                name: data?.name,
                price: data?.price,
                quantity: quantity,
                image: data?.image,
            };

            // GET CART
            let cart = getDataLocalStorage('cart') || [];

            // Ensure cart is an array
            if (!Array.isArray(cart)) cart = [];

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const existingProductIndex = cart?.findIndex((item: any) => item?.id === product?.id);

            if (existingProductIndex > -1) cart[existingProductIndex].quantity += quantity;
            else cart.push(product);

            setDataLocalStorage('cart', cart);
            setStatusOrder((prev: boolean) => !prev);
            toast.success("Thêm vào giỏ hàng thành công.");
        } else {
            console.log("Lỗi thêm sản phẩm");
        }
    };


    // HANDLE QUANTITY CHANGE
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 1) setQuantity(value);
    };

    return (
        <div className="home mt-[65px]">
            <div className="product-item">
                <div className="flex flex-col">
                    <div className="product-item__top">
                        <Image
                            width={300}
                            height={300}
                            src={data?.image}
                            className='border-[1px] p-[50px] border-indigo-500/50'
                            alt="Picture of the author"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <div className="product-item__name font-semibold">
                                {data?.name}
                            </div>
                            <div className="flex flex-row items-center">
                                Giá: <span className='text-green-600 font-medium pl-[4px]'>{data?.price} VNĐ</span>
                            </div>

                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <RadioGroup
                                    className="mb-4"
                                    value={selected}
                                    onValueChange={setSelected}
                                >
                                    <Radio value="1" className="text-gray-700">
                                        Tôi đã đọc và đồng ý với Chính sách hoạt động của website*
                                    </Radio>
                                </RadioGroup>
                                <div className="space-y-4">
                                    <div className="flex flex-row items-center">
                                        <input
                                            type="number"
                                            value={quantity}
                                            id="number-input"
                                            onChange={handleQuantityChange}
                                            aria-describedby="helper-text-explanation"
                                            className="w-[60px] bg-gray-50 border border-gray-300 text-gray-900 
                                            text-sm mr-[10px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        <Button
                                            onClick={() => addCart(quantity)}
                                            isDisabled={selected !== "1"}
                                            color="primary"
                                            className={`w-[100px] py-2 rounded-lg ${selected === "1" ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
                                        >
                                            Mua hàng
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-item__desc bg-gray-50 p-6 rounded-lg shadow-md my-[20px]">
                        <h3 className="product-item__desc__title text-xl font-semibold text-gray-800 mb-4">
                            Mô tả sản phẩm
                        </h3>
                        <p className="items-start">
                            {data?.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DetailProductContainer);
