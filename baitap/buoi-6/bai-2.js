/*
    Sử dụng function với tham số truyền vào là 1 function
*/


function map(mangTruyenVao, f) {
    let results = [];
    for (let i = 0; i !== mangTruyenVao.length; i ++) {
        results[i] = f(mangTruyenVao[i]);
    }
    return results;
}

const mangTruyenVao = [1 , 2, 3, 4, 5];

const result = map(mangTruyenVao, (giaTri) => {
    if (giaTri % 2 != 0) {
        return giaTri * 2;
    } else {
        return giaTri * 3;
    }
});

console.log(result);