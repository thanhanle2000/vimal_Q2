import { memo, useState } from 'react'
import Loading from '../../../core/component/loading/loading';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../../core/constant/router';
import { toast } from 'react-toastify';

type FormValues = {
    name: string;
    phone: string;
    address: string;
    notes: string;
};
const CartAddressOrder: React.FC = () => {
    // USE NAVIGATE
    const navigate = useNavigate();

    // STATE
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        phone: '',
        address: '',
        notes: '',
    });
    const [errors, setErrors] = useState<Partial<FormValues>>({});
    const [loading, setLoading] = useState(false);
    const [agreePolicies, setAgreePolicies] = useState(false);
    const [agreePayment, setAgreePayment] = useState(false);

    // HANDLE CHANGE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // HANDLE CHECK BOX CHANGE
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name === 'agreePolicies') {
            setAgreePolicies(checked);
        } else if (name === 'agreePayment') {
            setAgreePayment(checked);
        }
    };

    // VALIDATE
    const validate = () => {
        const newErrors: Partial<FormValues> = {};
        if (!formValues.name) newErrors.name = 'Tên không được để trống.';
        if (!/^\d{10,15}$/.test(formValues.phone)) newErrors.phone = 'Số điện thoại không hợp lệ.';
        if (!formValues.address) newErrors.address = 'Địa chỉ không được để trống.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // HANDLE SUBMIT
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate() && agreePolicies && agreePayment) {
            setLoading(true)
            setTimeout(() => { navigate(ROUTER?.ORDER_SUCCESS) }, 300);
        } else {
            if (!agreePolicies) toast.warning("Bạn cần đồng ý với các chính sách và quy định mua hàng.");
            if (!agreePayment) toast.warning("Bạn cần đồng ý với phương thức thanh toán.");
        }
    };

    return (
        <div className="bg-white rounded-lg w-full max-w-md mx-auto mt-10">
            <Loading isLoading={loading} />
            <h1 className="text-[16px] font-semibold mb-3 text-gray-800 text-left">Địa chỉ nhận hàng</h1>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className="mb-2 flex flex-col items-start gap-[-15px]">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                        Họ tên (<span className='text-red-600'>*</span>)
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='VD: Nguyễn Văn A (*)'
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                </div>
                <div className="mb-2 flex flex-col items-start gap-[-15px]">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                        Số điện thoại (<span className='text-red-600'>*</span>)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='VD: 0962*****6 (*)'
                        value={formValues.phone}
                        onChange={handleChange}
                        required
                        className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                </div>
                <div className="mb-2 flex flex-col items-start gap-[-15px]">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                        Địa chỉ (<span className='text-red-600'>*</span>)
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder='VD: 68 Nguyễn Cơ Thạch, An Lợi Đông, Thủ Đức, Hồ Chí Minh, Việt Nam (*)'
                        value={formValues.address}
                        onChange={handleChange}
                        required
                        className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address}</span>}
                </div>
                <div className="mb-2 flex flex-col items-start gap-[-15px]">
                    <label htmlFor="notes" className="block text-gray-700 text-sm font-medium mb-2">
                        Ghi chú
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        placeholder='VD: Giao hàng giờ hành chính.....'
                        rows={4}
                        value={formValues.notes}
                        onChange={handleChange}
                        className="block w-full !text-[13px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                    <input
                        type="checkbox"
                        id="agreePolicies"
                        name="agreePolicies"
                        checked={agreePolicies}
                        onChange={handleCheckboxChange}
                        className="text-indigo-600 border-gray-300 rounded"
                    />
                    <span className='text-[13px] ml-[5px]'>
                        Tôi đồng ý với các chính sách và quy định mua hàng tại website
                    </span>
                </label>
                <label className="flex items-center text-gray-700 text-sm font-medium mb-4">
                    <input
                        type="checkbox"
                        id="agreePayment"
                        name="agreePayment"
                        checked={agreePayment}
                        onChange={handleCheckboxChange}
                        className="text-indigo-600 border-gray-300 rounded"
                    />
                    <span className='text-[13px] ml-[5px]'>
                        Tôi đồng ý với phương thức thanh toán sau khi nhận hàng tại nhà
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

export default memo(CartAddressOrder)
