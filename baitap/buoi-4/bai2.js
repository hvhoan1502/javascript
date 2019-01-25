/*
1. Cho 1 danh sách học sinh thuộc 1 lớp, có các thuộc tính như: Tên, điểm, địa chỉ. 
	Để xếp hạng 1 lớp học nhà trường sẽ tính điểm trung bình của lớp đó và xét như sau:
	Loại A: có điểm trung bình từ 8 - 10,
	Loại B: có điểm trung bình từ 6.5 - 7.9,
	Loại C: có điểm trung bình từ 5 - 6.4
	Loại D: có điểm trung bình dưới 5
	
	Yêu cầu: 1. Hãy viết 1 function được sử dụng để tính xếp hạng của 1 lớp với dữ liệu của lớp là tham số truyền vào.
			 2. Hãy viết hàm có tham số là danh sách sinh viên và địa chỉ cần tìm.
			  (ví dụ: truyền vào biến ra là 'Hồ Chí Minh' thì chỉ xuất ra những sinh viên có diaChi là 'Hồ Chí Minh')

Ví dụ lớp A : 
	[
		{
			ten: 'A',
			diem: 8,
			diaChi: 'Hồ Chí Minh'
		},
		{
			ten: 'B',
			diem: 6,
			diaChi: 'Đồng Nai'
		},
		{
			ten: 'C',
			diem: '4',
			diaChi: 'Hồ Chí Minh'
		}
	]
*/

const danhSachSinhVien = [
    {
        ten: 'A',
        diem: 8,
        diaChi: 'Hồ Chí Minh'
    },
    {
        ten: 'B',
        diem: 9,
        diaChi: 'Đồng Nai'
    },
    {
        ten: 'C',
        diem: 8,
        diaChi: 'Hồ Chí Minh'
    }
]

/** Cau 1 */
function tinhXepLoai(diemTrungBinh) {
    let ketqua;
    if (diemTrungBinh >= 8) {
        ketqua = 'Loai A';
    } else if (diemTrungBinh >= 6.5) {
        ketqua = 'Loai B';
    } else if (diemTrungBinh >= 5) {
        ketqua = 'Loai C';
    } else {
        ketqua = 'Loai D';
    }

    return ketqua;
}

function xepLoai(danhSachHocVien) {
    let tongDiem = 0;
    for (let item = 0; item < danhSachHocVien.length; item ++) {
        const sinhVien = danhSachHocVien[item];
        tongDiem += sinhVien.diem;
    }
    const diemTrungBinh = tongDiem/danhSachHocVien.length;
    const ketqua = tinhXepLoai(diemTrungBinh);

    return ketqua;
}

console.log(`Xep Loai Cua Lop La: ${xepLoai(danhSachSinhVien)}`);

/** Cau 2 */
function timHocSinh(danhSachSinhVien, diaChi) {
    let ketqua = [];
    for (let item = 0; item < danhSachSinhVien.length; item ++) {
        const sinhVien = danhSachSinhVien[item];
        if (sinhVien.diaChi == diaChi) {
            ketqua.push(sinhVien);
        }
    }
    return ketqua;
}

const diaChiCanTim = 'Đồng Nai';
console.log(`Các sinh viên thuộc ${diaChiCanTim} là:`);
console.log(timHocSinh(danhSachSinhVien, diaChiCanTim));
