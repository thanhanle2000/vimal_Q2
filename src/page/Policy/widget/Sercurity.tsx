import { memo } from "react";

const Sercurity = () => {
  return (
    <div className="policy__sercurity mb-12 mt-[60px]">
      <h1 className="policy__title font-semibold text-center">
        Chính sách bảo mật thông tin
      </h1>
      <div className="flex flex-col justify-start text-left">
        <h2 className="policy__subtitle font-semibold">
          1. Mục đích thu thập thông tin:
        </h2>
        <p className="policy__text">
          Việc thu thập dữ liệu chủ yếu trên Website bao gồm: email, điện thoại,
          địa chỉ, tên đăng nhập, mật khẩu đăng nhập. Đây là các thông tin mà
          chúng tôi cần khách hàng cung cấp bắt buộc khi đăng ký sử dụng dịch vụ
          và để liên hệ xác nhận khi khách hàng đăng ký mua hàng trên website
          nhằm đảm bảo quyền lợi cho người khách hàng.
        </p>
        <p className="policy__text">
          Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động
          sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của
          mình. Ngoài ra, khách hàng có trách nhiệm thông báo kịp thời cho chúng
          tôi về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu
          giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết
          phù hợp.
        </p>

        <h2 className="policy__subtitle font-semibold">
          2. Phạm vi sử dụng thông tin:
        </h2>
        <p className="policy__text">
          Website sử dụng thông tin khách hàng cung cấp để:
        </p>
        <ul className="policy__list">
          <li>Cung cấp các dịch vụ liên quan đến khách hàng.</li>
          <li>
            Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách
            hàng và Website.
          </li>
          <li>
            Ngăn ngừa các hoạt động phá hoại tài khoản người dùng của khách hàng
            hoặc các hoạt động giả mạo khách hàng.
          </li>
          <li>
            Liên lạc và giải quyết với khách hàng trong những trường hợp đặc
            biệt.
          </li>
          <li>
            Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác
            nhận và liên hệ có liên quan đến giao dịch tại Website incamall.vn.
          </li>
          <li>
            Trong trường hợp có yêu cầu của pháp luật: Chúng tôi có trách nhiệm
            hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ
            quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều
            tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng.
            Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách
            hàng.
          </li>
        </ul>

        <h2 className="policy__subtitle font-semibold">
          3. Thời gian lưu trữ thông tin:
        </h2>
        <p className="policy__text">
          Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu
          hủy bỏ từ khách hàng. Còn lại trong mọi trường hợp thông tin cá nhân
          thành viên sẽ được bảo mật trên máy chủ của Website.
        </p>

        <h2 className="policy__subtitle font-semibold">
          4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân:
        </h2>
        <p className="policy__text">
          <strong>INCAMALL</strong>
          <br />
          Địa chỉ: 63-65 Đường số 10, Phường An Lợi Đông, Quận 2, TP. Thủ Đức
          <br />
          Điện thoại: 0356916854
          <br />
          Email:{" "}
          <a href="mailto:info.viemall.@gmail.com">info.viemall.@gmail.com</a>
        </p>

        <h2 className="policy__subtitle font-semibold">
          5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu
          cá nhân của mình:
        </h2>
        <ul className="policy__list">
          <li>
            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá
            nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông
            tin cá nhân hoặc yêu cầu ban quản lý website thực hiện việc này.
          </li>
          <ul>
            <li className="font-semibold">Cách thức liên hệ:</li>
            <li>Điện thoại: 0356916854</li>
            <li>Email: info.viemall.@gmail.com</li>
          </ul>
        </ul>

        <h2 className="policy__subtitle font-semibold">
          6. Cam kết bảo mật thông tin khách hàng:
        </h2>
        <ul className="policy__list">
          <li>
            Thông tin cá nhân của thành viên được cam kết bảo mật tuyệt đối theo
            chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông
            tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách
            hàng đó trừ những trường hợp pháp luật có quy định khác.
          </li>
          <li>
            Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3
            nào về thông tin cá nhân của thành viên ngoại trừ cơ quan Pháp luật
            Việt Nam yêu cầu.
          </li>
          <li>
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
            đến mất mát dữ liệu cá nhân thành viên, chúng tôi sẽ có trách nhiệm
            thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và
            thông báo cho thành viên được biết.
          </li>
          <li>
            Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của thành viên
            bao gồm thông tin hóa đơn chứng từ số hóa tại khu vực dữ liệu trung
            tâm an toàn của incamall.
          </li>
          <li>
            Yêu cầu các cá nhân khi đăng ký/mua hàng là thành viên, phải cung
            cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ
            liên lạc, email, số chứng minh nhân dân, điện thoại,..., và chịu
            trách nhiệm về tính pháp lý của những thông tin trên. incamall không
            chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên
            quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin
            cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không
            chính xác.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Sercurity);
