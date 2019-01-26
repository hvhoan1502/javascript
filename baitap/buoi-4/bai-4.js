/*
1. Cho 1 danh sách nhân viên thuộc công ty A như sau:

 nhanvien = [
    {
        ten: 'A',
        luong: 10000000
    },
    {
        ten: 'B',
        luong: 8000000
    },
    {
        ten: 'C',
        luong: 12000000
    },
    {
        ten: 'D',
        luong: 16000000
    },
    {
        ten: 'E',
        luong: 7000000
    },
    {
        ten: 'F',
        luong: 13000000
    },
    {
        ten: 'G',
        luong: 9000000
    }
]

Hãy tính tổng số thuế công ty phải trả cho cục thuế mỗi tháng theo công thức sau:

Lương:  <= 9 triệu: 0%
    > 9 triệu và <= 12 triệu: (tiền lương - 9tr) x 5%;
    > 12 triệu và < 15 triệu (tiền lương - 12tr) x 10% + (3tr x 5%);
	> 15tr: (tiền lương - 15) x 20% + (3tr x 15%);
*/

const nhanvien = [
    {
        ten: 'A',
        luong: 10000000
    },
    {
        ten: 'B',
        luong: 8000000
    },
    {
        ten: 'C',
        luong: 12000000
    },
    {
        ten: 'D',
        luong: 16000000
    },
    {
        ten: 'E',
        luong: 7000000
    },
    {
        ten: 'F',
        luong: 13000000
    },
    {
        ten: 'G',
        luong: 9000000
    }
]

function tongThueDoanhNghiep(danhSachNhanVien) {
    let tongThue = 0;
    for (let item = 0; item < danhSachNhanVien.length; item ++) {
        const nhanVien = danhSachNhanVien[item];
        tongThue += tinhThueCaNhan(nhanVien);
    }
    return tongThue;
}

function tinhThueCaNhan(nhanvien) {
    const luongNhanVien = nhanvien.luong/1000000;
    const tienThue = 0;

    if (luongNhanVien > 15) {
        tienThue = (luongNhanVien - 15) * 0.2 + 3 * 0.15;
    } else if (luongNhanVien > 12) {
        tienThue = (luongNhanVien - 12) * 0.1 + 3 * 0.05;
    } else if (luongNhanVien > 9) {
        tienThue = luongNhanVien * 0.05;
    }

    return tienThue * 1000000;

}

console.log(tongThueDoanhNghiep(nhanvien));
