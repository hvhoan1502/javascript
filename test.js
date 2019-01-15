const a = [1,8,9,10,6,12,3,5,2];
let ketqua = [];
for (let i = 0; i < a.length; i++) {
    const value = a[i];
    if (value > 5 && value % 2 === 0) {
        ketqua.push(value)
    }
}

console.log ('Mảng cần tìm là: ' + ketqua);
