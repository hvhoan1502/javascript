/*
    Cho mảng số nguyên: const mang = [1, 8, 9, 5, 12, 14, 13,14];
    Sử dùng do-while kết hợp switch-case để chia thành 2 mảng số nguyên chẵn và lẻ
    Ví dụ kết quả sẽ in ra:
    Mảng số chẵn là: 8,12,14,14
    Mảng số lẻ là: 1,5,9,13 
*/
// Cách làm khó mình (Tham khảo)
const mang = [1, 8, 9, 5, 12, 14, 13,14]
let mangchan = [];

let mangle = [];

let item = 0;
do {
    const giatrithuI = mang[item];
    let laydu = giatrithuI % 2;
    switch(laydu) {
        case 0:
            mangchan.push(giatrithuI);
            break;
        case 1:
            mangle.push(giatrithuI);
            break;
        default:
            break;
    }
    item ++;
} while (item < mang.length);


console.log('Mảng chẵn là: ' + mangchan);

console.log('Mảng lẻ là: ' + mangle);


// cách dễ và tốt hơn
for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 2== 0) {
        mangchan.push(mang[i]);
    } else {
        mangle.push(mang[i])
    }
}

console.log('Mảng chẵn là: ' + mangchan);
console.log('Mảng lẻ là: ' + mangle);