const a = 50;
const b =100;

for (let i = a; i <= b; i++) {
    let dem = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            dem ++;
        }
    }
    if (dem == 2) {
        console.log(i);
    }

}