import { memo } from "react";

const Delivery = () => {
    return (
        <div className="policy__delivery mb-12">
            <h1 className="policy__title font-semibold text-center">
                Chính sách giao hàng
            </h1>
            <p>
                <b>1. Thời gian giao hàng:</b> <br />– Sau quá trình xác minh đơn hàng
                thành công, đơn hàng sẽ được giao đến Quý khách trong khoảng thời gian
                sau đây: Địa chỉ giao hàng: Giao hàng toàn quốc Thời gian giao hàng:
                Trong vòng 07 ngày làm việc. <br />– Thời gian làm việc từ Thứ Hai đến
                hết ngày Thứ Bảy hàng tuần, không giao hàng vào Chủ Nhật và ngày Lễ.{" "}
                <br />– Đơn hàng đặt vào Thứ Bảy cho đến hết Chủ Nhật sẽ được bắt đầu xử
                lý vào Thứ Hai tuần kế tiếp.
                <br />– Thời gian giao hàng được bắt đầu tính từ lúc đơn hàng của quý
                khách được xác nhận thành công bằng cuộc gọi của nhân viên CSKH. <br />–
                Trong trường hợp đối tác giao nhận không thể liên hệ hoặc giao hàng cho
                Quý khách vì nguyên nhân chủ quan hoặc khách quan từ phía Quý khách hàng
                trong vòng 02 ngày làm việc, đơn hàng sẽ không còn hiệu lực.
                <br />
                <br />
                <b>2. Xác nhận giao hàng:</b>
                <br />– Hàng hóa sẽ được giao đến địa chỉ Quý khách hàng cung cấp trong
                đơn hàng đặt trên Website. <br />– Ngay sau khi Quý khách hàng đặt mua
                hàng trên Website, bộ phận Chăm sóc khách hàng sẽ gọi điện xác nhận đơn
                hàng vào những ngày trong tuần, từ thứ Hai <br />– thứ Bảy, từ 8h sáng
                đến 5h chiều. Đơn hàng hợp lệ là đơn hàng được nhân viên CSKH gọi điện
                xác nhận thành công. <br />– Nếu Quý Khách hàng có bất kì câu hỏi liên
                quan đến cách đặt hàng hoặc Chính sách giao hàng, vui lòng liên hệ với
                chúng tôi: Email: info.viemall.@gmail.com Điện thoại: 0356916854 <br />–
                Đơn hàng đặt trực tuyến có giá trị tối thiểu sau khuyến mãi lớn hơn hoặc
                bằng 1,000,000 VNĐ sẽ được miễn phí vận chuyển. <br />– Mỗi đơn hàng
                trực tuyến thành công, chúng tôi sẽ chỉ giao hàng về 01 địa chỉ đã khai
                báo của Quý khách.
            </p>
        </div>
    );
};

export default memo(Delivery);