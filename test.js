/** 
1. Hãy viết 1 function với tham số truyền vào là 1 mảng số và 1 function. Kết quả trả về là 1 mảng 
số nguyên tố
ex: [1, 4, 5, 3] result: [1, 3, 5]
*/


/**
2.Hãy viết 1 function với tham số truyền vào là 1 mảng số và 1 function. Kết quả trả về là 1 mảng 
là số chính phương
ex: [1, 4, 5, 3] result: [1, 4]*/

/** 
3. Hãy viết 1 function với tham số truyền vào là 1 mảng số và 1 function. Kết quả trả về sẽ là 1 mảng 
đã lọc theo điều kiện
ex: [1, 2, 4, 8, 4, 5] điều kiện số đó chia hết cho 2, result: [2, 4, 8, 4] */

// function locTheoDieuKien(mangTruyenVao, f) {
//     let ketqua = [];
//     for (let item = 0; item < mangTruyenVao.length; item++) {
//         const giatri = f(mangTruyenVao[item]);
//         if (giatri) {
//             ketqua.push(giatri);
//         }
//     }
//     return ketqua;
// }

// const mang = [1, 2, 4, 8, 4, 5];
// const kq = locTheoDieuKien(mang, item => {
//     if (item % 4 == 0) {
//         return item;
//     }
//     return;
// });

// console.log(kq);