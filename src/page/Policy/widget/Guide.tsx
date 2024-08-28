import { memo } from "react";

const Guide = () => {
    return (
        <div className="policy__guide mb-12 mt-[60px]">
            <h1 className="policy__title font-semibold text-center">
                Hướng dẫn mua hàng
            </h1>
            <p className="text-left">
                <h2><strong>Hướng dẫn mua hàng trên website IncaMall</strong></h2>

                <h4><strong>Bước 1: Truy cập vào trang web IncaMall</strong></h4>
                <ul>
                    <li>Mở trình duyệt web trên máy tính hoặc điện thoại di động và nhập địa chỉ trang web của IncaMall: <a href="https://www.incamall.com">www.incamall.com</a>.</li>
                </ul>

                <h4><strong>Bước 2: Tìm kiếm sản phẩm</strong></h4>
                <ul>
                    <li><strong>Duyệt qua danh mục sản phẩm</strong>: Nếu bạn chưa xác định rõ sản phẩm cụ thể, bạn có thể tìm kiếm bằng cách duyệt qua các danh mục sản phẩm được hiển thị trên trang chủ như <em>đồ dùng nhà bếp</em>, <em>đồ điện gia dụng</em>, v.v.</li>
                </ul>

                <h4><strong>Bước 3: Xem chi tiết sản phẩm</strong></h4>
                <ul>
                    <li>Nhấp vào sản phẩm mà bạn quan tâm để xem chi tiết.</li>
                    <li>Tại trang chi tiết sản phẩm, bạn sẽ thấy các thông tin quan trọng như giá, mô tả sản phẩm, hình ảnh, đánh giá từ khách hàng khác, và các tùy chọn như màu sắc, kích thước, v.v.</li>
                    <li>Đảm bảo chọn đúng các tùy chọn (nếu có) trước khi thêm vào giỏ hàng.</li>
                </ul>

                <h4><strong>Bước 4: Thêm sản phẩm vào giỏ hàng</strong></h4>
                <ul>
                    <li>Sau khi đã chọn xong các tùy chọn sản phẩm, nhấn vào nút <strong>"Thêm vào giỏ hàng"</strong> để thêm sản phẩm vào giỏ hàng của bạn.</li>
                    <li>Bạn có thể tiếp tục mua sắm và thêm các sản phẩm khác vào giỏ hàng nếu muốn mua thêm.</li>
                </ul>

                <h4><strong>Bước 5: Kiểm tra giỏ hàng</strong></h4>
                <ul>
                    <li>Khi bạn đã chọn xong tất cả các sản phẩm muốn mua, nhấp vào biểu tượng <strong>Giỏ hàng</strong> ở góc trên cùng bên phải của trang web để xem lại giỏ hàng của mình.</li>
                    <li>Tại đây, bạn có thể kiểm tra lại các sản phẩm đã chọn, điều chỉnh số lượng hoặc loại bỏ các sản phẩm không cần thiết.</li>
                </ul>

                <h4><strong>Bước 6: Tiến hành thanh toán</strong></h4>
                <ul>
                    <li>Khi đã hài lòng với giỏ hàng của mình, nhấn vào nút <strong>"Đặt hàng"</strong>.</li>
                    <li>Bạn sẽ được chuyển đến trang thanh toán, nơi bạn cần nhập thông tin giao hàng, bao gồm tên, địa chỉ nhận hàng, số điện thoại liên hệ, và bất kỳ yêu cầu đặc biệt nào.</li>
                </ul>

                <h4><strong>Bước 7: Chọn phương thức thanh toán</strong></h4>
                <ul>
                    <li>IncaMall cung cấp nhiều phương thức thanh toán để bạn lựa chọn:</li>
                    <ul>
                        <li><strong>Thanh toán khi nhận hàng (COD)</strong>: Bạn sẽ trả tiền mặt khi nhận hàng tại địa chỉ đã đăng ký.</li>
                    </ul>
                </ul>

                <h4><strong>Bước 8: Xác nhận đơn hàng</strong></h4>
                <ul>
                    <li>Kiểm tra lại toàn bộ thông tin đơn hàng, bao gồm các sản phẩm, địa chỉ giao hàng, và tổng số tiền cần thanh toán.</li>
                    <li>Nhấn vào nút <strong>"Xác nhận"</strong> để hoàn tất quá trình mua hàng.</li>
                </ul>

                <h4><strong>Bước 9: Nhận hàng</strong></h4>
                <ul>
                    <li>Khi đơn hàng được giao đến địa chỉ của bạn, hãy kiểm tra sản phẩm ngay khi nhận để đảm bảo không có hư hỏng hoặc sai sót.</li>
                    <li>Nếu có bất kỳ vấn đề gì về sản phẩm, bạn có thể liên hệ với bộ phận chăm sóc khách hàng của IncaMall để được hỗ trợ đổi trả hoặc bảo hành theo chính sách của họ.</li>
                </ul>

                <h4><strong>Lưu ý</strong></h4>
                <ul>
                    <li><strong>Chính sách đổi trả</strong>: Hãy đảm bảo bạn đã hiểu rõ chính sách đổi trả và bảo hành của IncaMall trước khi mua hàng.</li>
                    <li><strong>Bảo mật thông tin</strong>: Luôn mua sắm trên trang web chính thức của IncaMall và đảm bảo thông tin thanh toán của bạn được bảo mật.</li>
                </ul>

                <p>Hy vọng hướng dẫn này sẽ giúp bạn dễ dàng mua sắm trên IncaMall!</p>

            </p>
        </div>
    );
};

export default memo(Guide);