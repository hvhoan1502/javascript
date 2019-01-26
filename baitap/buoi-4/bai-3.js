/*
    Cho 1 mảng tên tùy ý như sau: 
    tenNhanVien = ['HoaN', 'YeU', 'TraNg]
    Hãy viết 1 hàm chuẩn hóa tên trong mảng đó.
*/

const tenNhanVien = ['HoaN', 'YeU', 'TraNg'];

const chuanHoa = (danhSachNhanVien) => {
    for (let item = 0; item < danhSachNhanVien.length ; item ++) {
        let ten = danhSachNhanVien[item];
        danhSachNhanVien[item] = chuanHoaTen(ten);
    }
    return danhSachNhanVien;
}

const chuanHoaTen = (ten) => {
    ten = ten.toLowerCase();
    return (ten.charAt(0).toUpperCase() + ten.substring(1));
}

console.log(chuanHoa(tenNhanVien));