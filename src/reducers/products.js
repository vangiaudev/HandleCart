var initialState = [
    {
        id : 1,
        name : 'OPPO Reno 6',
        description : 'Sau khi ra mắt OPPO Reno5 chưa lâu thì OPPO lại cho ra mẫu smartphone mới mang tên OPPO Reno6 với hàng loạt cải tiến mới về ngoại hình bên ngoài lẫn hiệu năng bên trong, mang đến trải nghiệm vượt bật cho người dùng.',
        image : 'https://cf.shopee.vn/file/0dd5958cfb340ac50c0ece1e5f176150',
        price: 12990000,
        inventory : 50,
        rating : 4
    },
    {
        id : 2,
        name : 'Xiaomi Redmi 9C',
        description : 'Xiaomi Redmi 9C (3GB/64GB), smartphone nổi bật trong phân khúc điện thoại giá rẻ với thiết kế tinh tế sang trọng, hiệu năng mạnh mẽ Helio G35 mới, viên pin dung lượng khủng, cùng bộ 3 AI camera bắt trọn mọi khoảnh khắc.',
        image : 'https://cf.shopee.vn/file/b4e8d8271168fe19fc564efb58a43b50',
        price: 2490000,
        inventory : 80,
        rating : 3
    },
    {
        id : 3,
        name : 'IPhone 12 64GB',
        description : 'Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.',
        image : 'https://cf.shopee.co.id/file/cf114bcb502f6d75f29faeba3ab27bd8',
        price: 20190000,
        inventory : 20,
        rating : 5
    }
];

const products = (state = initialState, action) =>{
    switch (action.type) {
    
        default:
            return [...state];
    }
}

export default products;