/*
    In ra tất cả các số chẵn từ 1 tới 100
*/
// Cách 1 củ chuối
for(let i = 1; i <= 100; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

// Cách 2 thông minh hơn
for (let i = 2; i <= 100; i+=2) {
    console.log(i)
}
// ********************************************************************
/*
    In ra tất cả các số lẻ từ 1 tới 100
*/
// Cách 1 củ chuối
for(let i = 1; i <= 100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }
}

// Cách 2 thông minh hơn
for (let i = 1; i <= 100; i+=2) {
    console.log(i)
}

/*
    In ra tất cả những số chia hết cho 3 từ 1 tới 100
*/

// Cách 1 củ chuối
for(let i = 1; i <= 100; i++) {
    if (i%3 === 0) {
        console.log(i);
    }
}

// Cách 2 thông minh hơn
for (let i = 3; i <= 100; i+=3) {
    console.log(i)
}

// *************************************************
/*
    Cho mảng số nguyên a = [1,8,9,2,5,1,3,5,2];
    In ra màn hình những số lớn hơn 5 và chia hết cho 2
*/
// Cách 1
const a = [1,8,9,2,5,1,3,5,2];
for (let i = 0; i < a.length; i++) {
    const value = a[i];
    if (value > 5 && value % 2 === 0) {
        console.log(value);
    }
}

// Cách 2
const a = [1,8,9,10,6,12,3,5,2];
let ketqua = [];
for (let i = 0; i < a.length; i++) {
    const value = a[i];
    if (value > 5 && value % 2 === 0) {
        ketqua.push(value)
    }
}

console.log ('Mảng cần tìm là: ' + ketqua);

/*
    Khai báo biến a = 50, b = 100
    Liệt kê tất cả số nguyên tố từ a đến b
*/

// Cách 1
const a = 50;
const b =100;

for (let i = a; i <= b; i++) {
    let dem = 0;
    for (let j = 1; j < i; j++) {
        if (i %j === 0) {
            dem ++;
        }
    }
    if (dem === 2) {
        console.log(i);
    }

}

// Cách ngắn hơn
for (let i = a; i <= b; i ++) {
    let dem = 0;
    for (let j = 2; j <= i/2; i++) {
        if (i%j == 0) {
            dem ++;
        }
    }
    if (dem == 0) {
        console.log(i);
    }
}

// ********************************************
/*
    cho a = 10
    Cho b = 100
    Tìm ra số chính phương từ a den b
*/
// Cách 1
const a = 10;
const b = 100
for (let i = a; i < b; i++) {
    for (let j = 1; j < i; j++) {
        if (j = Math.sqrt(i)) {
            console.log(i);
        }
    }
}

// Cách ngắn ngọn

for (let i = 4; i <= 10; i++) {
    console.log(i*i);
}


