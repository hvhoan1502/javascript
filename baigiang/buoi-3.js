// const a = -6/0;


// console.log(a);

// const a = undefined;
/**
 * undefined, null, identifi thì js hiểu là mang giá trị false
 * Khi giá trị của 1 biến là 0 hoặc 1 thì trong biểu thức so sánh js sẽ hiểu
 * 0 là false và 1 là true
 */


// if (a) {
//     console.log('a có giá trị');
// } else {
//     console.log('a không có giá trị');
// }

// let input = false;

// if (input == undefined) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// const b = [];
// if (b) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let n = null;
// console.log(n + 5);

/************NUMBER */

// const a = '3';
// console.log(a+1);
// console.log(a + 'hello' + 3);
// console.log(5 - a);
// console.log(5 + a);
// console.log(parseInt('123'));
// console.log(parseFloat('123.00012'));
// console.log(Math.ceil(1.562));
// console.log(Math.floor(1.5124));
// console.log(Math.round(1.5214));
// console.log(Math.ceil(Math.random() * 100));



/**STRING */
// const b = 'hi';
// console.log(b + ' hoan');
// console.log(b + 2);
// console.log(b.concat(' Hoàn'));


/**
 * ARRAY   
 */
const a = [1, 2, 3, 5, 4];
console.log(a.map(item => item * item));


/**
 * ARRAY OBJECT
 */
// Ví dụ lấy tất cả khách hàng
// KH có tên kh, id, địa chỉ

const khachHang = [
    {
        id: 1,
        ten: 'teo',
        diaChi: 'abc'
    },
    {
        id: 2,
        ten: 'ty',
        diaChi: 'fdfd'
    },
    {
        id: 1,
        ten: 'tun',
        diaChi: 'gfgfg'
    },
    {
        id: 1,
        ten: 'mum mim',
        diaChi: 'fđgg'
    }
]

console.log(khachHang);



