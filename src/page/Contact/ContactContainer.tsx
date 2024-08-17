import { memo, useState } from "react";

const ContactContainer = () => {
    //STATE
    const [formData, setFormData] = useState({ name: "", email: "", message: "", });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => e.preventDefault();

    return (
        <div className="m-auto w-[50%] border border-gray-300 p-[12px] mb-[40px] rounded-[10px]">
            <h1 className="text-xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                <div className="flex flex-row">
                    <label htmlFor="name" className="w-[120px] text-left">Họ và tên:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="!rounded-[8px]"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
                </div>
                <div className="flex flex-row">
                    <label htmlFor="email" className="w-[120px] text-left">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="!rounded-[8px]"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
                </div>
                <div className="flex flex-row justify-start">
                    <label htmlFor="message" className="w-[120px] text-left">Ghi chú:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="!rounded-[8px]"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
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
