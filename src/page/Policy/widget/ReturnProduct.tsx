import { memo } from "react";

const ReturnProduct = () => {
    return (
        <div className="policy__return-policy mb-12">
            <h1 className="policy__title font-semibold text-center">
                Chính sách đổi trả
            </h1>
            <p>
                <br />
                <b> Điều kiện đổi trả hàng hóa:</b>
                <br />
                Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả
                lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:{" "}
                <br />– Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc
                như trên website tại thời điểm đặt hàng. <br />– Không đủ số lượng,
                không đủ bộ như trong đơn hàng. <br />– Tình trạng bên ngoài bị ảnh
                hưởng như rách bao bì, bong tróc, bể vỡ,.. <br />– Khách hàng có trách
                nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành
                việc hoàn trả/đổi trả hàng hóa. - Khách hàng được đổi trả trong vòng 1
                năm nếu có lỗi của nhà sản xuất. Trong trường hợp Quý Khách hàng có ý
                kiến đóng góp/khiếu nại liên quan Chất lượng sản phẩm, Quý Khách hàng
                vui lòng liên hệ đường dây chăm sóc khách hàng tại HOTLINE: 0356916854
                để được hướng dẫn và chăm sóc.
            </p>
        </div>
    );
};

export default memo(ReturnProduct);
