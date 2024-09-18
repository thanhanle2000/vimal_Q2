import { memo, useEffect } from "react";
import { useRecoilValue } from "recoil";
import order_success from "../../assets/images/order_success.gif";
import { orderState } from "../../core/services/recoil/recoil";
import { clearDataFromLocal } from "../../core/ultils/ultils";
import { OrderConfirmation } from "./OrderSuccessDetail";

const OrderSuccessContainer = () => {
  useEffect(() => {
    clearDataFromLocal("cart");
  }, []);

  const orderData = useRecoilValue(orderState);

  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <img src={order_success} className="w-[30%]" />
      <OrderConfirmation {...{ order: orderData }} />
    </div>
  );
};

export default memo(OrderSuccessContainer);
