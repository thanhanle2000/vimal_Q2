import { memo, useState } from "react";
import { toast } from "react-toastify";

const ContactContainer = () => {
    // STATE
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    // VALID FORM
    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData?.name?.trim()) newErrors.name = "Vui lòng nhập họ và tên";

        if (!formData?.email?.trim()) newErrors.email = "Vui lòng nhập email";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Vui lòng nhập email hợp lệ";

        if (!formData?.message?.trim()) newErrors.message = "Vui lòng nhập ghi chú";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // HANDLE CHANGE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // HANDLE SUBMIT
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setFormData({ name: '', email: "", message: '' });
            toast.success("Chúng tôi đã ghi nhận thông tin của bạn.");
        }
    };

    return (
        <div className="m-auto w-[50%] border border-gray-300 p-[12px] mb-[180px] rounded-[10px]">
            <h1 className="text-xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                <div className="flex flex-row">
                    <label htmlFor="name" className="w-[120px] text-left">Họ và tên:</label>
                    <div className="flex flex-col w-full items-start">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="VD: Nguyen Van A (*)"
                            className="!rounded-[8px]"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                        {errors.name && <span className="text-red-600 text-sm italic font-medium">{errors.name}</span>}
                    </div>
                </div>
                <div className="flex flex-row">
                    <label htmlFor="email" className="w-[120px] text-left">Email:</label>
                    <div className="flex flex-col w-full items-start">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="VD: admin@gmail.com (*)"
                            className="!rounded-[8px]"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                        {errors.email && <span className="text-red-600 text-sm italic font-medium">{errors.email}</span>}
                    </div>
                </div>
                <div className="flex flex-row justify-start">
                    <label htmlFor="message" className="w-[120px] text-left">Nội dung:</label>
                    <div className="flex flex-col w-full items-start">
                        <textarea
                            id="message"
                            name="message"
                            className="!rounded-[8px]"
                            placeholder="VD: Cần hỗ trợ mua hàng (*)"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        />
                        {errors.message && <span className="text-red-600 text-sm italic font-medium">{errors.message}</span>}
                    </div>
                </div>
                <button
                    className="shadow-xl bg-green-600 p-[5px] m-auto w-[30%] text-white"
                    type="submit"
                >
                    Gửi
                </button>
            </form>
        </div>
    );
};

export default memo(ContactContainer);
