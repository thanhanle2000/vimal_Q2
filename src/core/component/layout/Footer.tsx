import { Image, Link } from "@nextui-org/react";
import { useSetRecoilState } from "recoil";
import logo from "../../../assets/images/logo.png";
import "../../../core/css/footer.css";
import { ROUTER } from "../../constant/router";
import { setTypePolicy } from "../../services/recoil/recoil";
import { setDataLocalStorage, useUpdateUrlParams } from "../../ultils/ultils";
import { useLocation } from "react-router-dom";

const Footer = () => {
    // USE LOCATION 
    const location = useLocation();
    const _path = location?.pathname;

    // [] SERVICES 
    const lstServices = [
        { id: 1, title: 'Chính sách bảo mật', url: '/policy-security' },
        { id: 2, title: 'Hướng dẫn mua hàng', url: '/policy-guide' },
        { id: 3, title: 'Chính sách giao hàng', url: '/policy-delivery' },
        { id: 4, title: 'Chính sách thanh toán', url: '/policy-payment' },
        { id: 5, title: 'Chính sách bảo hành và đổi trả', url: '/policy-return-product' },
    ]

    // [] CONTACT 
    const lstContact = [
        { id: 1, title: '⚛️ Địa chỉ: 63-65 đường số 10, Phường An Lợi Đông, Quận 2, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh', url: '' },
        { id: 2, title: '📞Tổng đài hỗ trợ: 0356916854', url: '' },
        { id: 3, title: '📧 Email: info.viemall@gmail.com', url: '' },
        { id: 4, title: '✎ Mã số doanh nghiệp: 0318160848 do sở kế hoạch và đầu tư TP.Hồ Chí Minh cấp lần đầu ngày 13/11/2023', url: '' },
        { id: 5, title: 'Giám đốc: Phạm Quốc Thịnh', url: '' },
    ]

    // RECOIL 
    const setPolicy = useSetRecoilState(setTypePolicy);

    // HOOK
    const updateUrlParamsAndNavigate = useUpdateUrlParams();

    // HANDLE NEXT PAGE SERVICES
    const handleNextPageServices = (url: string) => {
        setPolicy(url);
        setDataLocalStorage("typePolicy", url);
        updateUrlParamsAndNavigate(ROUTER?.POLICY, { type: url });
    }


    return (
        <div className={_path === ROUTER?.ORDER_SUCCESS ? 'hidden' : `bg-[#f5ebde] p-[10px] !w-full ${_path === ROUTER?.CONTACT ? 'absolute bottom-0' : ''}`}>
            <div className="flex flex-row items-start justify-around m-[10px]">
                <div className="footer__information">
                    <div
                        className="footer__information__logo flex gap-4 flex-col justify-center"
                        style={{ alignItems: "center" }}
                    >
                        <h1 className="footer__information__logo--title text-xl font-semibold">
                            VIMALL
                        </h1>
                        <Image
                            className=""
                            src={logo}
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </div>
                    <div className="footer__information__logo"></div>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="footer__policy--title footer--title font-medium text-[20px]">Chính sách</h3>
                    <ul className="footer__policy__list flex items-start flex-col mt-[20px] gap-2">
                        {lstServices?.map(item =>
                            <Link key={item?.id} className="cursor-pointer" onClick={() => handleNextPageServices(item?.url)}>{item?.title}</Link>
                        )}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="footer__policy--title footer--title font-medium text-[20px]">CÔNG TY TNHH INCA GROUP</h3>
                    <ul className="footer__policy__list flex items-start flex-col mt-[20px] gap-2">
                        {
                            lstContact?.map(item =>
                                <li key={item?.id} className="footer__information__contact--list-item footer--content !text-black">
                                    {item?.title}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
