import { memo } from "react";

const Payment = () => {
    return (
        <div className="policy__payment mb-12 mt-[60px]">
            <h1 className="policy__title font-semibold text-center">
                Chính sách thanh toán
            </h1>
            <p className="text-left">
                <h2><strong>Chính sách thanh toán khi nhận hàng (COD) trên IncaMall</strong></h2>

                <h4>1. <strong>Tổng quan về phương thức COD</strong></h4>
                <ul>
                    <li><strong>Thanh toán khi nhận hàng (COD)</strong> là phương thức thanh toán mà khách hàng sẽ trả tiền trực tiếp cho nhân viên giao hàng ngay tại thời điểm nhận sản phẩm. Đây là một trong những phương thức thanh toán phổ biến và tiện lợi, đặc biệt là đối với những khách hàng chưa quen với việc thanh toán trực tuyến hoặc muốn kiểm tra sản phẩm trước khi thanh toán.</li>
                </ul>

                <h4>2. <strong>Quy trình thanh toán COD trên IncaMall</strong></h4>
                <ul>
                    <li><strong>Bước 1: Chọn sản phẩm và đặt hàng</strong></li>
                    <ul>
                        <li>Khách hàng truy cập vào website IncaMall, tìm kiếm và lựa chọn sản phẩm cần mua.</li>
                        <li>Sau khi chọn sản phẩm và thêm vào giỏ hàng, khách hàng tiến hành kiểm tra giỏ hàng và nhấp vào nút "Đặt hàng".</li>
                    </ul>

                    <li><strong>Bước 2: Chọn phương thức thanh toán</strong></li>
                    <ul>
                        <li>Tại trang thanh toán, khách hàng sẽ được yêu cầu nhập thông tin giao hàng, bao gồm tên, địa chỉ nhận hàng, và số điện thoại liên hệ.</li>
                        <li>Trong phần lựa chọn phương thức thanh toán, khách hàng chọn <strong>"Thanh toán khi nhận hàng (COD)"</strong>.</li>
                    </ul>

                    <li><strong>Bước 3: Xác nhận đơn hàng</strong></li>
                    <ul>
                        <li>Khách hàng kiểm tra lại thông tin đơn hàng, bao gồm các sản phẩm đã chọn, số lượng, địa chỉ giao hàng, và tổng số tiền cần thanh toán.</li>
                        <li>Nhấp vào nút "Đặt hàng" để hoàn tất quá trình đặt hàng.</li>
                    </ul>

                    <li><strong>Bước 4: Nhận hàng và thanh toán</strong></li>
                    <ul>
                        <li>Sau khi đơn hàng được xác nhận, IncaMall sẽ xử lý và giao hàng đến địa chỉ mà khách hàng đã cung cấp.</li>
                        <li>Khi nhân viên giao hàng đến, khách hàng sẽ kiểm tra sản phẩm, sau đó thanh toán bằng tiền mặt cho nhân viên giao hàng đúng số tiền đã được thông báo trước đó.</li>
                    </ul>
                </ul>

                <h4>3. <strong>Lợi ích của phương thức COD</strong></h4>
                <ul>
                    <li><strong>An toàn và tiện lợi</strong>: Khách hàng chỉ phải thanh toán sau khi nhận được sản phẩm, giảm thiểu rủi ro khi mua sắm trực tuyến.</li>
                    <li><strong>Dễ dàng và không cần tài khoản ngân hàng</strong>: Phương thức này phù hợp với những khách hàng không có tài khoản ngân hàng hoặc không quen với việc thanh toán trực tuyến.</li>
                    <li><strong>Kiểm tra sản phẩm trước khi thanh toán</strong>: Khách hàng có thể kiểm tra sản phẩm ngay tại thời điểm nhận hàng để đảm bảo sản phẩm đúng như mô tả và không có hư hỏng.</li>
                </ul>

                <h4>4. <strong>Lưu ý khi sử dụng phương thức COD</strong></h4>
                <ul>
                    <li><strong>Chuẩn bị số tiền thanh toán</strong>: Khách hàng cần chuẩn bị đủ số tiền mặt cần thanh toán để giao dịch diễn ra thuận lợi.</li>
                    <li><strong>Chính sách hoàn trả</strong>: Trong trường hợp khách hàng không hài lòng với sản phẩm sau khi kiểm tra, họ có thể liên hệ với bộ phận chăm sóc khách hàng của IncaMall để thực hiện đổi trả theo chính sách của công ty.</li>
                    <li><strong>Phí giao hàng</strong>: Một số đơn hàng có thể áp dụng phí giao hàng, đặc biệt với các đơn hàng có giá trị nhỏ hoặc ở khu vực xa trung tâm. Khách hàng nên kiểm tra kỹ thông tin này khi đặt hàng.</li>
                </ul>

                <h4>5. <strong>Chính sách hủy đơn hàng với COD</strong></h4>
                <ul>
                    <li><strong>Trước khi giao hàng</strong>: Khách hàng có thể hủy đơn hàng mà không mất phí nếu hủy trước khi sản phẩm được giao đi. Liên hệ ngay với bộ phận chăm sóc khách hàng của IncaMall để hủy đơn.</li>
                    <li><strong>Sau khi giao hàng</strong>: Nếu khách hàng từ chối nhận hàng hoặc không có mặt tại địa chỉ nhận hàng, nhân viên giao hàng sẽ hoàn trả sản phẩm về IncaMall, và đơn hàng sẽ được xử lý theo quy định của công ty.</li>
                </ul>

                <h4><strong>Kết luận</strong></h4>
                <p>Phương thức thanh toán COD trên IncaMall mang đến sự tiện lợi và an toàn cho khách hàng, đặc biệt là những người muốn đảm bảo chất lượng sản phẩm trước khi thanh toán. Tuy nhiên, để đảm bảo giao dịch diễn ra suôn sẻ, khách hàng nên chuẩn bị đầy đủ thông tin và tiền mặt cần thiết khi nhận hàng.</p>

            </p>
        </div>
    );
};

export default memo(Payment);