*****************PROMISE*******************
Promise là 1 hàm dùng để xử lý bất đồng bộ trong javascript
function sanPham() {
    return new Promise((resolve, reject) => {
        setTimeout(item => {
            reject(5);
        }, 2000);
    });
}

console.log(1);

sanPham()
.then(item => console.log(item)) //Nhận kết quả resolve trả về
.catch(item => console.log(item)); // Nhận kết quả reject trả về

console.log(3);

/******************ASYNC-AWAIT***************************
1 kiểu xử lý bất đồng bộ, có từ phiên bản node 7
Cách khai báo: async function abc() {
        const a = await getSanPham();
}

ex:

function thongTin() {
    return new Promise((resolve, reject) => {
        setTimeout(item => {
            resolve({
                ten: 'Trang',
                tuoi: 18
            });
        }, 200);
    });
}


async function layThongTin() {
    let layThongTin = await thongTin();
    layThongTin.ten = 'Hoan';
    return layThongTin;
}

layThongTin().then(item => console.log(item));

/**********************************NODE**********************************/
Khởi tạo 1 project: npm init
Sau đó nhập những thông tin cần thiết
Tạo nhanh: npm init -y

- Cài thư viện: npm install tên-tv (viết nhanh: npm i tên-tv);