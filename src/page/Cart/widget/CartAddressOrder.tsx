import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import Loading from "../../../core/component/loading/loading";
import { ROUTER } from "../../../core/constant/router";
import { orderState } from "../../../core/services/recoil/recoil";
import { getDataLocalStorage } from "../../../core/ultils/ultils";

// Constants
const PHONE_REGEX = /^\d{10,15}$/;
const SUCCESS_TIMEOUT = 300;
const ERROR_MESSAGE = {
  name: "Tên không được để trống.",
  phone: "Số điện thoại không hợp lệ.",
  address: "Địa chỉ không được để trống.",
  agreePolicies: "Bạn cần đồng ý với các chính sách và quy định mua hàng.",
  agreePayment: "Bạn cần đồng ý với phương thức thanh toán.",
};

type FormValues = {
  name: string;
  phone: string;
  gmail: string;
  address: string;
  notes: string;
};

const CartAddressOrder: React.FC = () => {
  // USE NAVIGATE
  const navigate = useNavigate();

  // STATE
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phone: "",
    gmail: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [loading, setLoading] = useState(false);
  const [agreePolicies, setAgreePolicies] = useState(false);
  const [agreePayment, setAgreePayment] = useState(false);

  const [agreePolicies_v1, setAgreePolicies_v1] = useState(false);
  const [agreePayment_v1, setAgreePayment_v1] = useState(false);

  // HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // HANDLE CHECK BOX CHANGE
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "agreePolicies") {
      setAgreePolicies(checked);
    } else if (name === "agreePayment") {
      setAgreePayment(checked);
    }
  };

  // HANDLE CHECK BOX CHANGE V1
  const handleCheckboxChange_v1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "agreePolicies_v1") {
      setAgreePolicies_v1(checked);
    } else if (name === "agreePayment_v1") {
      setAgreePayment_v1(checked);
    }
  };

  // VALIDATE
  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.name) newErrors.name = ERROR_MESSAGE.name;
    if (!PHONE_REGEX.test(formValues.phone))
      newErrors.phone = ERROR_MESSAGE.phone;
    if (!formValues.address) newErrors.address = ERROR_MESSAGE.address;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate() && agreePolicies) {
      setLoading(true);
      setOrderData({
        ...orderData,
        orderId: randomNumber(),
        orderDate: formatDateNow(),
        shippingFee: 0,
        subtotal: calculateTotalPrice(cartData),
        total: calculateTotalPrice(cartData),
        paymentMethod: "COD",
        items: cartData,
        billingAddress: formValues?.address,
        customerName: formValues?.name,
        customerPhone: formValues?.phone,
        customerEmail: formValues?.gmail,
      });
      setTimeout(() => {
        navigate(ROUTER?.ORDER_SUCCESS);
      }, SUCCESS_TIMEOUT);
    } else {
      if (!agreePolicies) toast.warning(ERROR_MESSAGE.agreePolicies);
    }
  };

  const randomNumber = (): string => {
    // Random số từ 1 đến 100
    const num = Math.floor(Math.random() * 100) + 1;

    // Format lại để đảm bảo có 3 chữ số (001, 002, ..., 100)
    return String(num).padStart(3, "0");
  };

  console.log(randomNumber()); // Ví dụ: "007", "023", "100"

  const orderValue = useRecoilValue(orderState);
  const [orderData, setOrderData] = useRecoilState(orderState);
  const [cartData, setCartData] = useState<any[]>([]);

  useEffect(() => {
    setCartData(getDataLocalStorage("cart"));
  }, []);

  const formatDateNow = (): string => {
    const now = new Date();

    // Lấy các phần của ngày
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear(); // Năm

    return `${day}/${month}/${year}`;
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

  return (
    <div className="bg-white rounded-lg w-full max-w-md mx-auto mt-10">
      <Loading isLoading={loading} />
      <h1 className="text-[16px] font-semibold mb-3 text-gray-800 text-left">
        Địa chỉ nhận hàng
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-2 flex flex-col items-start gap-[-15px]">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Họ tên (<span className="text-red-600">*</span>)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="VD: Nguyễn Văn A (*)"
            value={formValues.name}
            onChange={handleChange}
            required
            className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
          )}
        </div>

        <div className="mb-2 flex flex-col items-start gap-[-15px]">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Số điện thoại (<span className="text-red-600">*</span>)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="VD: 0962*****6 (*)"
            value={formValues.phone}
            onChange={handleChange}
            required
            className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
          )}
        </div>

        <div className="mb-2 flex flex-col items-start gap-[-15px]">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Gmail (<span className="text-red-600">*</span>)
          </label>
          <input
            id="gmail"
            name="gmail"
            placeholder="VD: test@gmail.com (*)"
            value={formValues.gmail}
            onChange={handleChange}
            required
            className="block w-full !p-[8px] !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span className="text-[12px] italic text-red-500 font-semibold pt-[5px]">
            Thông tin đơn hàng sẽ được gửi qua GMAIL quý khách.
          </span>
          {errors.gmail && (
            <span className="text-red-500 text-xs mt-1">{errors.gmail}</span>
          )}
        </div>

        <div className="mb-2 flex flex-col items-start gap-[-15px]">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Địa chỉ (<span className="text-red-600">*</span>)
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="VD: 68 Nguyễn Cơ Thạch, An Lợi Đông, Thủ Đức, Hồ Chí Minh, Việt Nam (*)"
            value={formValues.address}
            onChange={handleChange}
            required
            className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.address && (
            <span className="text-red-500 text-xs mt-1">{errors.address}</span>
          )}
        </div>

        <div className="mb-2 flex flex-col items-start gap-[-15px]">
          <label
            htmlFor="notes"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Ghi chú
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="VD: Giao hàng giờ hành chính....."
            rows={4}
            value={formValues.notes}
            onChange={handleChange}
            className="block w-full !p-[10px] !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <label className="flex items-center text-gray-700 text-sm font-medium mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="agreePolicies"
            name="agreePolicies"
            checked={agreePolicies}
            onChange={handleCheckboxChange}
            className="text-indigo-600 border-gray-300 rounded"
          />
          <span className="text-[13px] ml-[5px]">
            Tôi đã đọc và đồng ý với các chính sách của website.
          </span>
        </label>

        <label className="flex items-start text-gray-700 text-sm font-medium mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="agreePolicies_v1"
            name="agreePolicies_v1"
            checked={agreePolicies_v1}
            onChange={handleCheckboxChange_v1}
            className="text-indigo-600 border-gray-300 rounded"
          />
          <span className="text-[13px] ml-[5px] text-left">
            Tôi cam kết toàn bộ thông tin cá nhân và thông tin thẻ tôi đã khai
            báo là hoàn toàn đúng và hợp lệ. Nếu có sai sót, giả mạo dẫn đến
            tranh chấp phát sinh, tôi hoàn toàn chịu trách nhiệm.
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Đặt hàng
        </button>
      </form>
    </div>
  );
};

export default memo(CartAddressOrder);
