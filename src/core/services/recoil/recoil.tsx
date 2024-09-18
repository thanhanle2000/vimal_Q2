import { atom, selector } from "recoil";
import { OrderDetails } from "../../../page/Order_Success/OrderSuccessDetail";
import { getDataLocalStorage } from "../../ultils/ultils";

/* ----------- DETAIL PRODUCT ----------- */
export const setDetailProduct = atom({
  key: "setDetailProduct",
  default: undefined,
});

export const getDetailProduct = selector({
  key: "getDetailProduct",
  get: ({ get }) => {
    const _data = get(setDetailProduct);

    if (_data === undefined || _data === null)
      return getDataLocalStorage("dataDetail");
    else return _data;
  },
});
/* ----------- DETAIL PRODUCT ----------- */

/* ----------- POLICY ----------- */
export const setTypePolicy = atom({
  key: "setTypePolicy",
  default: "",
});

export const getTypePolicy = selector({
  key: "getTypePolicy",
  get: ({ get }) => {
    const _data = get(setTypePolicy);

    if (_data === "") return getDataLocalStorage("typePolicy");
    else return _data;
  },
});
/* ----------- POLICY ----------- */

/* ----------- ORDER CART ----------- */
export const setOrderCart = atom<boolean>({
  key: "setOrderCart",
  default: false,
});

export const getOrderCart = selector({
  key: "getOrderCart",
  get: ({ get }) => get(setOrderCart),
});
/* ----------- ORDER CART ----------- */

export const orderState = atom<OrderDetails>({
  key: "orderState",
  default: {
    orderId: "2183",
    orderDate: "29/05/2024",
    items: [
      {
        name: "Áo Thun Nam Polo Tailor-made",
        quantity: 1,
        price: 299000,
        color: "Đen",
        size: "XXL (70 - 80kg)",
      },
    ],
    subtotal: 299000,
    shippingFee: 0,
    paymentMethod: "Trả tiền mặt khi nhận hàng",
    total: 299000,
    billingAddress: "65 Tô Dương Vĩnh Ngạ Vinh Hải, TP Nha Trang, Khánh Hòa",
    customerName: "Nguyễn Hằng",
    customerPhone: "0962******6",
    customerEmail: "nguyenhang29test@gmail.com",
  },
});
