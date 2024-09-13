import { memo } from "react";

const ReturnProduct = () => {
  return (
    <div className="policy__return-policy mb-12 mt-[60px]">
      <h1 className="policy__title font-semibold text-center">
        Chính sách bảo hành và đổi trả
      </h1>
      <div className="font-sans antialiased text-gray-800 p-8 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold mb-4">Điều Kiện Đổi Trả Hàng Hóa</h2>
        <p className="mb-4">
          Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/
          trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp
          sau:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như
            trên website tại thời điểm đặt hàng.
          </li>
          <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
          <li>
            Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ.
          </li>
          <li>
            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự
            thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
          </li>
          <li>
            Khách hàng được đổi trả trong vòng 1 năm nếu có lỗi của nhà sản
            xuất.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Chính Sách Kiểm Hàng</h2>

        <h3 className="text-xl font-semibold mb-2">Kiểm Hàng Khi Nhận Hàng:</h3>
        <p className="mb-4">
          Khi nhận hàng, quý khách vui lòng kiểm tra kỹ sản phẩm trước khi ký
          nhận từ nhân viên giao hàng. Nếu phát hiện sản phẩm bị hư hỏng, sai
          mẫu mã, thiếu số lượng hoặc có bất kỳ vấn đề nào khác, xin vui lòng
          liên hệ ngay với chúng tôi qua hotline để được hỗ trợ kịp thời.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Kiểm Hàng Sau Khi Nhận Hàng:
        </h3>
        <p className="mb-4">
          Trong vòng 7 ngày kể từ ngày nhận hàng, nếu quý khách phát hiện bất kỳ
          vấn đề nào với sản phẩm, xin vui lòng liên hệ với chúng tôi để được
          hướng dẫn kiểm tra và giải quyết.
        </p>

        <p className="text-gray-700 mt-6">
          Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan
          Chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm
          sóc khách hàng tại HOTLINE: 0356916854 để được hướng dẫn và chăm sóc.
        </p>
      </div>
    </div>
  );
};

export default memo(ReturnProduct);
