import { memo, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import img_delete from "../../../assets/images/delete.png";
import Loading from "../../../core/component/loading/loading";
import { setOrderCart } from "../../../core/services/recoil/recoil";
import {
  clearDataFromLocal,
  getDataLocalStorage,
  setDataLocalStorage,
} from "../../../core/ultils/ultils";

const CartListOrder: React.FC = () => {
  // STATE
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartData, setCartData] = useState<any[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  // RECOIL
  const [_, setStatusOrder] = useRecoilState(setOrderCart);

  useEffect(() => {
    setLoading(true);
    setCartData(getDataLocalStorage("cart"));
    setLoading(false);
  }, [_]);

  // HANDLE QUANTITY CHANGE
  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCart = cartData.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartData(updatedCart);
    setStatusOrder((prev) => !prev);
    setDataLocalStorage("cart", updatedCart);
  };

  // HANDLE REMOVE ITEM
  const handleRemoveItem = (id: number) => {
    const updatedCart = cartData?.filter((item) => item.id !== id);
    setCartData(updatedCart);
    setStatusOrder((prev) => !prev);
    setDataLocalStorage("cart", updatedCart);
  };

  const calculateTotalPrice = (
    data: { id: number; price: string; quantity: number }[]
  ) => {
    // Helper function to parse price
    const parsePrice = (price: string): number =>
      parseFloat(price?.replace(/\./g, ""));

    // Calculate total price
    return data?.reduce((total, item) => {
      return total + parsePrice(item?.price) * item?.quantity;
    }, 0);
  };

  // TOTAL PRICE
  const totalPrice = calculateTotalPrice(cartData);

  // HANDLE CONFIRM
  const handleConfirm = () => {
    clearDataFromLocal("cart");
    setStatusOrder((prev) => !prev);
    setShowConfirm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <Loading isLoading={loading} />
      <div className="p-[10px]">
        <div
          className="flex flex-row justify-between py-[3px] cursor-pointer my-[5px]"
          onClick={() => setShowConfirm(true)}
        >
          <h1 className="text-[16px] font-semibold mb-3 text-gray-800 text-left">
            Giỏ hàng
          </h1>
          <span className="flex flex-row items-center text-[13px] border border-red-600 text-red-600 font-medium rounded px-[10px]">
            <img
              className="w-[15px] h-[15px] cursor-pointer"
              title="Xóa tất cả sản phẩm"
              src={img_delete}
              alt="Delete"
            />{" "}
            Tất cả
          </span>
        </div>
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Xác nhận</h2>
              <p className="mb-4">Bạn có chắc chắn muốn xóa giỏ hàng?</p>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  onClick={() => setShowConfirm(false)}
                >
                  Hủy
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                  onClick={handleConfirm}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="overflow-auto min-h-[200px]">
          {cartData?.map((item) => {
            // TOTAL PRICE
            const totalPrice = item?.price * item?.quantity * 1000;

            return (
              <div
                key={item?.id}
                className="mb-[10px] flex flex-row items-start justify-start border border-gray-300 p-[10px] rounded-[10px]"
              >
                <img
                  src={item?.image}
                  className="rounded-[10px] w-[100px] h-[100px]"
                  alt={item?.name}
                />
                <div className="flex flex-col ml-[15px] justify-start items-start gap-[10px]">
                  <div className="flex flex-row items-start gap-[20px] justify-between">
                    <span className="text-left text-[14px]">{item?.name}</span>
                    <img
                      className="w-[15px] h-[15px] cursor-pointer"
                      title="Xóa sản phẩm"
                      src={img_delete}
                      alt="Delete"
                      onClick={() => handleRemoveItem(item?.id)}
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="!p-[4px] border-[1px] w-[50px] !rounded-[6px]"
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                      />
                      <span className="mx-[5px]">x</span>
                      <span className="text-[14px] font-medium">
                        {item?.price} VNĐ
                      </span>
                    </div>
                    <span className="font-medium ml-[10px] text-green-600 text-[16px]">
                      {totalPrice?.toLocaleString()} VNĐ
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4">
          <span className="h-[1px] bg-red-600 !w-full block"></span>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <span className="text-[13px]">Tạm tính:</span>
            <span className="font-medium ml-[10px] text-green-600 text-[16px]">
              {totalPrice?.toLocaleString("vi-VN")}VNĐ
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-[13px]">Phí vận chuyển:</span>
            <span className="italic text-[13px] text-green-500 font-semibold">
              Miễn phí vận chuyển
            </span>
          </div>
        </div>
        <div className="p-4">
          <span className="h-[1px] bg-red-600 !w-full block"></span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-[15px] font-semibold">Tổng tiền:</span>
          <span className="text-[20px] text-green-500 font-semibold">
            {totalPrice?.toLocaleString("vi-VN")}VNĐ
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(CartListOrder);
