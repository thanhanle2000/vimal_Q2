import React from "react";

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
  color: string;
  size: string;
};

export type OrderDetails = {
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  paymentMethod: string;
  total: number;
  billingAddress: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
};

export const OrderConfirmation: React.FC<{ order: OrderDetails }> = ({
  order,
}) => {
  return (
    <div className="max-w-xl mx-auto font-sans text-left">
      <h1 className="bg-red-500 text-white text-center py-4 text-lg font-semibold text-[12.8px] rounded-[14px]">
        Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ để xác nhận đơn hàng!!!
      </h1>

      <p className="px-5 py-2 text-sm">
        Xin chào <strong>{order.customerName}</strong>, <br />
      </p>
      <p className="px-5 text-sm">
        Khách hàng chỉ cần kiểm tra lại thông tin chính xác về giao hàng và giữ
        máy để nhận hàng.
      </p>

      <div className="px-5 text-sm mt-2">
        <h2 className="text-lg font-bold">
          [Đơn hàng #{order.orderId}] ({order.orderDate})
        </h2>

        <div className="flex flex-col">
          <div className="flex flex-row gap-[10px]">
            <span>Khách hàng:</span>
            <span className="font-semibold">{order?.customerName}</span>-
            <span className="font-semibold">{order?.customerPhone}</span>
          </div>

          <div className="flex flex-row gap-[10px]">
            <span>Địa chỉ:</span>
            <span className="font-semibold">{order?.billingAddress}</span>
          </div>

          <div className="flex flex-row gap-[10px]">
            <span>Gmail:</span>
            <span className="font-semibold">{order?.customerEmail}</span>
          </div>
        </div>

        <table className="w-full table-auto border-collapse mt-4 text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Sản phẩm</th>
              <th className="pb-2 w-[100px]">Số lượng</th>
              <th className="pb-2 text-right">Giá</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">
                  {item.name} <br />
                </td>
                <td className="text-center py-2">{item.quantity}</td>
                <td className="text-right py-2 font-semibold">
                  {item.price.toLocaleString()}đ
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
          <p className="text-right">
            Tạm tính: {order.subtotal.toLocaleString()}đ
          </p>
          <p className="text-right">
            Phí ship: {order.shippingFee.toLocaleString()}đ
          </p>
          <p className="text-right">
            Phương thức thanh toán: {order.paymentMethod}
          </p>
          <h3 className="text-right text-lg font-bold">
            Tổng cộng: {order.total.toLocaleString()}đ
          </h3>
        </div>
      </div>
      <p className="px-5 py-4 text-sm text-center italic">
        Cảm ơn đã mua hàng của chúng tôi.
      </p>
    </div>
  );
};
