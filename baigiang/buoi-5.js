// const teo = {
//     name: 'Teo',
//     tuoi: 10,
//     diaChi: 'HCM'
// }

// const ty = {
//     name: 'Ty',
//     tuoi: 12,
//     diaChi: 'HN'
// }

class ConNguoi {
    constructor(ten, tuoi, diaChi) {
        this.name = ten;
        this.tuoi = tuoi;
        this.diaChi = diaChi;
    }

    sayHello() {
        console.log('Hello ' + this.name + this.tuoi);
    }
}

const teo = new ConNguoi('Teo', 10, 'HCM');
teo.sayHello();
const ty = new ConNguoi('Ty', 10, 'HN');
ty.sayHello();
// console.log(teo, ty);


/*********************** EXTENDS**********************/

class DongVat {
    constructor(ten, tuoi) {
        this.ten = ten;
        this.tuoi = tuoi;
    }

    sayHello() {
        console.log('Hello ' + this.ten);
    }
}

class ConCun extends DongVat {
    constructor(ten, tuoi, thucAn) {
        super(ten, tuoi);
        this.ten = ten;
        this.tuoi = tuoi;
        this.thucAn = thucAn;
    }
}

const cunCon = new ConCun('Cun', 10, 'BanhMi');
console.log(cunCon);