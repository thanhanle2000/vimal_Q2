/* eslint-disable @typescript-eslint/no-unused-vars */

import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import pro_01 from "../../../assets/images/pro_01.jpg";
import pro_02 from "../../../assets/images/pro_02.jpg";
import pro_03 from "../../../assets/images/pro_03.jpg";
import pro_04 from "../../../assets/images/pro_04.jpg";
import pro_05 from "../../../assets/images/pro_05.jpg";
import pro_06 from "../../../assets/images/pro_06.jpg";
import pro_07 from "../../../assets/images/pro_07.jpg";
import pro_08 from "../../../assets/images/pro_08.jpg";
import { ROUTER } from "../../../core/constant/router";
import { setDetailProduct } from "../../../core/services/recoil/recoil";
import { setDataLocalStorage, useUpdateUrlParams } from "../../../core/ultils/ultils";

// eslint-disable-next-line react-refresh/only-export-components
export const listProduct = [
    {
        id: 0,
        image: pro_01,
        name: "Nồi lẩu nướng hấp đa năng Bear 4 lít-DHG-C40w2",
        price: "799.000",
        herf: "product-item",
        desc: `
            Nồi Lẩu Nướng BEAR, Bếp Lẩu Đa Năng 4L- 3in1 gồm :1 nồi ăn lẩu+1 khay nướng+1 vỉ hấp
            THÔNG SỐ KĨ THUẬT
            - Thương hiệu Bear
            - Trọng lượng 3kg
            - Hạn bảo hành 12 tháng
            - Chất liệu Nhôm tĩnh điện, Tráng, Nhiều lớp
            - Điện áp đầu vào 220V
            - Dung tích 4L
            - Kích thước : 450mm x 250mm x 88

            ƯU ĐIỂM của nồi lẩu nướng đa năng DHG-C40W2
            - Nhiều phụ kiện đi kèm: Ngoài nồi lẩu dung tích 4L. Bear còn trang bị cho sản phẩm này đến 2 phụ kiện rời gồm khay hấp 3,5L và khay chiên nướng. Bạn có thể chế biến hàng trăm món ăn khác nhau chỉ với 1 chiếc nồi duy nhất, từ nấu lẩu, hầm, nướng, chiên, kho...
            - Thanh gạt 4 mức nhiệt: giúp bạn dễ kiểm soát nhiệt độ bữa ăn, tránh được tình trạng quá nhiệt hoặc không đủ độ nóng.
            - Hai lỗ thoát hơi nước: Vì sử dụng nhiệt lượng cao của hơi nước để làm chín thức ăn nên thiết kế này giúp thoát hơi nước nhanh, tránh để hơi nước đọng lại và ngấm ngược lại vào thực phẩm. Nhờ vào đó, mọi món ăn của bạn đều thơm ngon trọn vị.
            - Nắp kinh trong suốt: Đảm bảo bạn luôn kiểm soát được quá trình nấu ăn của mình.
            - Quai nồi chống trượt và cách nhiệt: giúp bạn cầm chắc nồi, tránh bị trượt tay, gây bỏng trong quá trình nấu nướng.
            `
    },
    {
        id: 1,
        image: pro_02,
        name: "Chảo chống dính BDO đá y tế dùng chiên rán tiện dụng",
        herf: "product-item1",
        price: "329.000",
        desc: `Bộ Nồi Chảo Chống Dính Nhật Bàn Vân Đá Cao Cấp, Chất Liệu Chống Dính, Dùng Mọi Loại Bếp, Chiên Xào Nấu Đa Năng Tiện Lợi

THÔNG TIN SẢN PHẨM 
- Đường kính: nồi ( Size):  22cm 
                       chảo (size): 26cm 
- Lõi alumium A3003 phủ lớp vân đá chống dính cao cấp
 - Cán nồi/chảo:  cao cấp giả gỗ
 - Đáy từ: Có
 - Nắp:Nồi kèm nắp thủy tinh - Chảo không có nắp
- Đặc điểm khác: Có vân đá 
- Màu sắc: màu kem 
- Thích hợp cho: Bếp ga, bếp từ, bếp điện, bếp hồng ngoại
- Màu trắng kem siêu pastel xinh yêu vô cùng, phù hợp nấu các loại bếp.

ƯU ĐIỂM SẢN PHẨM: 
- Bộ nồi chảo chống dính vân đá được thiết kế kiểu nhật với màu kem sang trọng, cao cấp
 - Lòng nồi chảo chống dính, có vân đá giúp cho bạn có thể hạn chế dầu mỡ khi chiên, rán đồ ăn. 
- Đáy nồi chảo chống dính được làm từ hợp kim nhôm vô cùng bền bỉ, dẫn nhiệt nhanh hơn giúp bạn có thể tiết kiệm gas và điện khi sử dụng.
 - Nồi Chảo chống dính có đáy từ 4 lớp sử dụng được cho mọi loại bếp : Bếp ga, bếp từ, bếp điện, bếp hồng ngoại 
 - Cán nồi chảo chống dính làm bằng nhựa cao cấp gỗ rất nhẹ giúp bạn thoải mái khi cầm, cách nhiệt rất tốt nên không lo bị nóng cán chảo khi sử dùng lâu, ngoài ra còn có quai treo ở cuối cán chảo giúp bạn có thể treo chảo trong nhà bếp của bạn giúp nhà bếp của bạn luôn gọn gàng.
- Dùng để nấu cho bé ăn dặm hoặc nấu ít đồ ăn 
- Chất liệu nhôm cao cấp giúp toả nhiệt đều , nóng nhanh hơn`,
    },
    {
        id: 2,
        herf: "product-item2",
        image: pro_03,
        name: "Bộ Nồi Chảo Nhật Bản Chống Dính Vân Đá, Bảo Hành 6 Tháng, Dùng Mọi Loại Bếp, Chiên Xào Nấu Đa Năng",
        price: "329.000",
        desc: `Bộ Nồi Chảo Chống Dính Nhật Bàn Vân Đá Cao Cấp, Chất Liệu Chống Dính, Dùng Mọi Loại Bếp, Chiên Xào Nấu Đa Năng Tiện Lợi

THÔNG TIN SẢN PHẨM 
- Đường kính: nồi ( Size):  22cm 
                       chảo (size): 26cm 
- Lõi alumium A3003 phủ lớp vân đá chống dính cao cấp
 - Cán nồi/chảo:  cao cấp giả gỗ
 - Đáy từ: Có
 - Nắp:Nồi kèm nắp thủy tinh - Chảo không có nắp
- Đặc điểm khác: Có vân đá 
- Màu sắc: màu kem 
- Thích hợp cho: Bếp ga, bếp từ, bếp điện, bếp hồng ngoại
- Màu trắng kem siêu pastel xinh yêu vô cùng, phù hợp nấu các loại bếp.

ƯU ĐIỂM SẢN PHẨM: 
- Bộ nồi chảo chống dính vân đá được thiết kế kiểu nhật với màu kem sang trọng, cao cấp
 - Lòng nồi chảo chống dính, có vân đá giúp cho bạn có thể hạn chế dầu mỡ khi chiên, rán đồ ăn. 
- Đáy nồi chảo chống dính được làm từ hợp kim nhôm vô cùng bền bỉ, dẫn nhiệt nhanh hơn giúp bạn có thể tiết kiệm gas và điện khi sử dụng.
 - Nồi Chảo chống dính có đáy từ 4 lớp sử dụng được cho mọi loại bếp : Bếp ga, bếp từ, bếp điện, bếp hồng ngoại 
 - Cán nồi chảo chống dính làm bằng nhựa cao cấp gỗ rất nhẹ giúp bạn thoải mái khi cầm, cách nhiệt rất tốt nên không lo bị nóng cán chảo khi sử dùng lâu, ngoài ra còn có quai treo ở cuối cán chảo giúp bạn có thể treo chảo trong nhà bếp của bạn giúp nhà bếp của bạn luôn gọn gàng.
- Dùng để nấu cho bé ăn dặm hoặc nấu ít đồ ăn 
- Chất liệu nhôm cao cấp giúp toả nhiệt đều , nóng nhanh hơn`
    },
    {
        id: 3,
        image: pro_04,
        herf: "product-item3",
        name: "Bộ bát đĩa chén đĩa Bát Tràng cao cấp , full compo 22 chi tiết , hoa văn hoạ tiết trắng viền đẹp tráng men cap cấp",
        price: "299.000",
        desc: `Set gồm:
                10 bát ăn cơm
                2 đĩa muối
                2 bát chấm
                3 đĩa tròn 18cm
                2 đĩa tròn 20cm
                1 tô nhỡ 16cm
                1 tô to 18cm
                1 bộ đũa khảm vàng 10 đôi
                BỘ SẢN PHẨM BÁT ĐĨA TRẮNG CAO CẤP lấy cảm hứng từ phong cách cổ điển đậm chất Á Đông. 

                Chất liệu gốm sứ tráng men cao cấp, không chứa chì, không độc hại, thân thiện với môi trường, mẫu trắng trơn cổ điển, phù hợp với hầu hết các gia đình hiện nay, dễ dàng mua thêm mà không cần thay mới cả bộ bát đĩa đang có. 

                Sản phẩm sử dụng an toàn với lò vi sóng, lò nướng, máy rửa bát
            `,
    },
    {
        id: 4,
        image: pro_05,
        herf: "product-item4",
        name: "Bộ Bát Đĩa Gosu Họa Tiết Bộ Đồ Ăn Phong Cách Bắc Âu,Sử Dụng Được Cho Lò Vi Sóng Và Máy Rửa Bát",
        price: "651.000",
        desc: `Đối với mỗi sản phẩm, Gốm sứ Gosu luôn lựa thật kỹ càng để mang đến cho khách hàng những sản phẩm không những đẹp mà còn an toàn cho sức khoẻ. Chúng mình đã chọn ra bộ sản phẩm cơ bản nhất mà một gia đình nhỏ ở Việt Nam thường sẽ dùng đến. Hãy ghé qua ngắm nghía và chọn thêm những sản phẩm phù hợp với nhu cầu của mình nhất nhé.



                Hàng dễ vỡ nên chúng mình đã cố gắng bọc gói cẩn thận. Nếu nhận được hàng bị vỡ, bốc máy gọi thẳng đến số Hotline hoặc inbox shop để được đổi trả hoàn toàn miễn phí ngay và luôn nha. 



                🍁 GIỚI THIỆU

                BỘ SẢN PHẨM CHÉN ĐĨA HỌA TIẾT DỄ THƯƠNG lấy cảm hứng từ phong cách hiện đại, trẻ trung phương Tây, được sản xuất và cung cấp từ phương Đông =)). Chất liệu gốm sứ tráng men cao cấp, không chứa chì, không độc hại, thân thiện với môi trường, kiểu dáng đa dạng, họa tiết sắc nét, màu sắc phù hợp với những gia đình yêu thích sự cổ điển, tinh tế. Sản phẩm sử dụng an toàn với lò vi sóng, lò nướng, máy rửa bát.

                -----------------------------------

                THÔNG TIN SẢN PHẨM

                Set hộp quà:

                Bát con : 6c

                Bát chấm : 2c

                Tô đại : 1c

                Đĩa tròn 7inch: 2c

                Đĩa tròn 8 inch: 2c`,
    },
    {
        id: 5,
        image: pro_06,
        herf: "product-item4",
        name: "Nồi cơm điện 1.2L nắp rời Ladomax HA-7112 nấu nhanh lòng nhôm phủ men chống dính",
        price: "363.000",
        desc: `✪ THÔNG TIN SẢN PHẨM 



Tên sản phẩm: NỒI CƠM ĐIỆN (NẮP RỜI )

Thương hiệu: LADOMAX

Dung tích: 1.2 Lít

Model: HA-7112

Điện áp: 220V - 50Hz

Công suất: 500W

Bộ phận nhựa: Nhựa PP cao cấp, an toàn, chống nóng

Lòng nồi: Lòng nhôm, phủ men chống dính cao cấp

Mô tả chung: Điều khiển cơ,đèn led hiển thị, chế độ nấu 

và giữ ấm, nắp và thân nồi inox.

Phụ kiện: Muôi xới cơm, Cốc đong

Dây nguồn: 1.2 met, rời

Màu sắc: Tím, Vàng, Inox

Kích Thước: 240x240x235(mm)

Trọng lượng: 1.9Kg
`
    },
    {
        id: 6,
        image: pro_07,
        herf: "product-item4",
        name: "Đá y tế Chảo chống dính bếp từ Chảo rán đặc biệt Họa tiết đá Chảo chống dính 28cm",
        price: "215.000",
        desc: `Chảo đá chống dính Xám 28cm
- Chảo Chống Dính Này Là Sản Phẩm Mới Nhất Được Cửa Hàng Chúng Tôi Ra mắt Cho Khách Hàng.
- Sản phẩm được lựa chọn cẩn thận từ thiết kế đến chất lượng để đảm bảo sự hài lòng của khách hàng.
- Dùng Để Chế Biến Các Món Ăn Đơn Giản Như Chiên, Chiên, Cung Cấp Các Món Ngon Như Bít tết, Phi lê Cá, Tôm...
- Tay Cầm Bakelite Cách Nhiệt Hạt Gỗ Với Lỗ Treo Kim Loại Sáng Bóng. Nó cho cảm giác mượt mà, chắc chắn và trọng lượng hợp lý.
- Màu sắc đẹp, tươi sáng và bắt mắt mang đến sự sang trọng cho bạn và toàn bộ không gian bếp.`
    },
    {
        id: 7,
        image: pro_08,
        herf: "product-item4",
        name: "Nồi hấp Gilux 24L đa năng chính hãng, nồi hấp điện 3 tầng tiện lợi bảo hành 12 tháng",
        price: "599.000",
        desc: `THÔNG SỐ KỸ THUẬT

            Dung Tích : 24L 

            Điện áp : 220V

            Tần số : 50hz

            Công suất định mức : 800w



            CÔNG DỤNG

            Nồi hấp Gilux dễ dàng điều chỉnh, lựa chọn cảm ứng nhạy bén. Giúp bạn hấp những món ăn thơm ngon như hải sản, gà, cá hấp, bánh, ngũ cốc, rau củ..
            ƯU ĐIỂM

            1. Thiết kế trang trọng, tay nghề thủ công tinh tế 

            2. Khay hấp ba tầng. Bạn có thể tự do ghép một hay hai tầng tùy theo nhu cầu của mình.

            3. Có nhiều chức năng hấp phù hợp với nhiều loại sản phẩm 

            4. Tạo hơi nhanh trong 10 giây

            5. Tự ngắt khi hết nước

            6. Bảo quản nhiệt tự động

            7. Giữ nhiệt lên đến 12h

            8. Chức năng hẹn giờ thông minh, thức dậy và thưởng thức món ăn ngon

            9. Hấp giữ nguyên hương vị, bảo vệ dinh dưỡng của thực phẩm. 


            HƯỚNG DẪN SỬ DỤNG

            Bước 1: Thêm nước vào máy ở mực nước thấp nhất.

            Bước 2: Cho thực phẩm vào, đậy nắp lồng hấp.

            Bước 3: Khởi động máy theo yêu cầu.`
    },

];

const ItemProduct = () => {
    // RECOIL 
    const [_, setDetail] = useRecoilState(setDetailProduct);

    // HOOK
    const updateUrlParamsAndNavigate = useUpdateUrlParams();

    // Handle navigation and URL update
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleNextPage = (item: any) => {
        setDetail(item);
        setDataLocalStorage("dataDetail", item);
        updateUrlParamsAndNavigate(ROUTER?.DETAIL_PRODUCT, { id: item?.id });
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[20px]">
            {listProduct.map((item) => (
                <Link
                    key={item?.id}
                    onClick={() => handleNextPage(item)}
                    className="cursor-pointer"
                >
                    <Card className="product__item__card py-4">
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={item.image}
                                height={300}
                                style={{ objectFit: 'cover' }}
                            />
                        </CardBody>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h4 className="font-semibold text-[16px] text-start">
                                {item.name}
                            </h4>
                            <p className="text-emerald-500">{item.price}VNĐ</p>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>

    );
}

export default ItemProduct
