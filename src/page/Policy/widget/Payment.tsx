import { memo } from "react";

const Payment = () => {
    return (
        <div className="policy__payment mb-12">
            <h1 className="policy__title font-semibold text-center">
                Chính sách thanh toán
            </h1>
            <p>
                <br />
                Hình thức thanh toán Hình thức mua hàng và thanh toán tại hệ thống
                https://www.vimall.vn/#/ được thực hiện như sau:
                <br />
                <br />
                <b>
                    1. Hình thức thanh toán khi mua hàng tại https://www.vimall.vn/#/.
                    Phương thức Giao hàng – Trả tiền mặt
                </b>{" "}
                <br />
                <br />
                <b>2. Hình thức thanh toán COD. Kiểm tra hàng trước khi thanh toán</b>
            </p>
        </div>
    );
};

export default memo(Payment);