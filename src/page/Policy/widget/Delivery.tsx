import { memo } from "react";

const Delivery = () => {
    return (
        <div className="policy__delivery mb-12 mt-[60px]">
            <h1 className="policy__title font-semibold text-center">
                Chính sách giao hàng
            </h1>
            <div className="font-sans antialiased text-gray-800 p-8 max-w-3xl mx-auto text-left">
                <h2 className="text-2xl font-bold mb-4">1. Thời gian giao hàng:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        Sau quá trình xác minh đơn hàng thành công, đơn hàng sẽ được giao đến Quý khách trong khoảng thời gian sau đây:
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Địa chỉ giao hàng:</strong> Giao hàng toàn quốc</li>
                            <li><strong>Thời gian giao hàng:</strong> Trong vòng 07 ngày làm việc.</li>
                        </ul>
                    </li>
                    <li>Thời gian làm việc từ Thứ Hai đến hết ngày Thứ Bảy hàng tuần, không giao hàng vào Chủ Nhật và ngày Lễ.</li>
                    <li>Đơn hàng đặt vào Thứ Bảy cho đến hết Chủ Nhật sẽ được bắt đầu xử lý vào Thứ Hai tuần kế tiếp.</li>
                    <li>
                        Thời gian giao hàng được bắt đầu tính từ lúc đơn hàng của quý khách được xác nhận thành công bằng cuộc gọi của nhân viên CSKH.
                    </li>
                    <li>
                        Trong trường hợp đối tác giao nhận không thể liên hệ hoặc giao hàng cho Quý khách vì nguyên nhân chủ quan hoặc khách quan từ phía Quý khách hàng trong vòng 02 ngày làm việc, đơn hàng sẽ không còn hiệu lực.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">2. Xác nhận giao hàng:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Hàng hóa sẽ được giao đến địa chỉ Quý khách hàng cung cấp trong đơn hàng đặt trên Website.</li>
                    <li>
                        Ngay sau khi Quý khách hàng đặt mua hàng trên Website, bộ phận Chăm sóc khách hàng sẽ gọi điện xác nhận đơn hàng vào những ngày trong tuần, từ thứ Hai – thứ Bảy, từ 8h sáng đến 5h chiều. Đơn hàng hợp lệ là đơn hàng được nhân viên CSKH gọi điện xác nhận thành công.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">3. Trách Nhiệm Của Thương Nhân</h2>
                <h3 className="text-xl font-semibold mb-2">Cung cấp chứng từ hàng hóa ban đầu:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Thương nhân chịu trách nhiệm cung cấp đầy đủ và chính xác các chứng từ liên quan đến hàng hóa trước khi tiến hành giao hàng cho tổ chức logistics. Các chứng từ này bao gồm nhưng không giới hạn:
                        <ul className="list-disc list-inside ml-4">
                            <li>Hóa đơn bán hàng</li>
                            <li>Phiếu xuất kho</li>
                            <li>Chứng từ chứng nhận nguồn gốc hàng hóa (nếu có)</li>
                            <li>Chứng từ bảo hiểm hàng hóa (nếu có)</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Thông tin đầy đủ và chính xác:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Thương nhân phải đảm bảo tất cả thông tin trên các chứng từ là chính xác và khớp với thực tế hàng hóa được giao.</li>
                    <li>Cung cấp thông tin bổ sung hoặc giải trình nếu có yêu cầu từ phía tổ chức logistics hoặc cơ quan chức năng trong quá trình giao nhận.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Hỗ trợ trong quá trình kiểm tra chứng từ:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Thương nhân cần phối hợp và hỗ trợ tổ chức logistics trong việc kiểm tra và xác nhận các chứng từ hàng hóa, đảm bảo tính hợp lệ và đầy đủ trước khi giao nhận.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">4. Trách Nhiệm Của Tổ Chức Cung Ứng Dịch Vụ Logistics</h2>
                <h3 className="text-xl font-semibold mb-2">Kiểm tra và xác nhận chứng từ:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Tổ chức logistics chịu trách nhiệm kiểm tra và xác nhận tính hợp lệ, đầy đủ của các chứng từ hàng hóa do thương nhân cung cấp trước khi tiến hành giao nhận.</li>
                    <li>Đảm bảo tất cả các chứng từ cần thiết phải được lưu trữ và quản lý đúng quy định trong suốt quá trình vận chuyển và giao nhận.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Cung cấp chứng từ giao nhận:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Tổ chức logistics phải cung cấp các chứng từ liên quan đến quá trình giao nhận hàng hóa, bao gồm:
                        <ul className="list-disc list-inside ml-4">
                            <li>Biên bản giao nhận hàng hóa</li>
                            <li>Phiếu giao hàng</li>
                            <li>Chứng từ vận chuyển (vận đơn)</li>
                            <li>Báo cáo tình trạng hàng hóa (nếu có)</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Thông báo và xử lý sự cố:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Trong trường hợp phát hiện sai sót hoặc thiếu sót về chứng từ, tổ chức logistics phải thông báo kịp thời cho thương nhân để có biện pháp xử lý.</li>
                    <li>Đảm bảo việc giao nhận hàng hóa không bị gián đoạn và tất cả các bên liên quan đều được thông báo về tình trạng chứng từ.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Bảo mật và lưu trữ chứng từ:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Tổ chức logistics có trách nhiệm bảo mật thông tin trên các chứng từ hàng hóa và chỉ sử dụng cho mục đích giao nhận, vận chuyển.</li>
                    <li>Lưu trữ chứng từ theo quy định pháp luật và chính sách của công ty trong một khoảng thời gian nhất định để phục vụ việc kiểm tra và đối chiếu khi cần thiết.</li>
                </ul>

                <p className="text-gray-700 mt-6">Nếu Quý Khách hàng có bất kì câu hỏi liên quan đến cách đặt hàng hoặc Chính sách giao hàng, vui lòng liên hệ với chúng tôi:</p>
                <ul className="list-disc list-inside ml-4 mb-6">
                    <li><strong>Email:</strong> info.viemall.@gmail.com</li>
                    <li><strong>Điện thoại:</strong> 0356916854</li>
                </ul>
                <p className="text-gray-700">Đơn hàng đặt trực tuyến có giá trị tối thiểu sau khuyến mãi lớn hơn hoặc bằng 1,000,000 VNĐ sẽ được miễn phí vận chuyển.</p>
                <p className="text-gray-700">Mỗi đơn hàng trực tuyến thành công, chúng tôi sẽ chỉ giao hàng về 01 địa chỉ đã khai báo của Quý khách.</p>
            </div>
        </div>
    );
};

export default memo(Delivery);