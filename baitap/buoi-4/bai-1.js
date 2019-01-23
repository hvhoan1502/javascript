/**
 * 1. Viết function có tham số là giá trị n, sau đó dựa vào n tính giá trị của biểu 
thức: expres = 1/n + 2/n + 3/n + ... + n/n. Gọi hàm và in kết quả ra màn hình.
 */

function tinh(n) {
    let ketqua = 0;
    for (let i = 1; i <= n; i++) {
        ketqua += i/n;
    }
    return ketqua;
}

const kq = tinh(10);
console.log(kq);

/**
 * 2. Viết hàm giả phương trình bậc 1 có tham số truyền vào là các giá trị của a, b. 
Gọi hàm và in kết quả ra màn hình.
 */

function phuongTrinhBac1(a, b) {
    let kq;
    if (a != 0) {
        kq = 'Phương trình có 1 nghiệm là x = ' + -b/a;
    } else if(b == 0) {
        kq = 'Phương trình vô số nghiệm';
    } else {
        kq = 'Phương trình vô nghiệm';
    }
    return kq;
}

const kq1 = phuongTrinhBac2(1, 2);
console.log(kq1);

/**
 * 3. Viết hàm giả phương trình bậc 2 có tham số truyền vào là các giá trị của a, b, c.
Gọi hàm và in kết quả ra màn hình.
 */

function phuongTrinhBac2(a, b, c) {
    let ketqua;
    if (a == 0) {
        ketqua = phuongTrinhBac1(b, c);
    } else {
        const delta = b*b - 4*a*c;
        if ( delta < 0) {
            ketqua = 'Phương trình vô nghiệm.';
        } else if (delta == 0) {
            ketqua = 'Phương trình có nghiệm kép: x1 = x2 = ' + -b/(2*a);
        } else {
            ketqua = 'Phương trình có 2 nghiệm là x1 = ' + (-b + Math.sqrt(delta)/(2*a)) + '/n /t x2 = ' + (-b - Math.sqrt(delta)/(2*a));
        }
    }
    return ketqua;
}

console.log(phuongTrinhBac2(-3, 5, 4));
