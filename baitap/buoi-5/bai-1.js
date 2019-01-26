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
}

const teo = new ConNguoi('Teo', 10, 'HCM');
const ty = new ConNguoi('Ty', 10, 'HN');

console.log(teo, ty);