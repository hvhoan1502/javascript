CHUNG
    # While: Vòng lặp
    while (điều kiện) {

    }
    ex: 
    const a = 1;
    while (a < 10) {
        console.log(a);
        a++;
    }
**************************************************************************
    #Do-While: Vòng lặp
    do {
        biểu thức
    } while (điều kiện);

    ex: 
    const b = 5;
    do {
        console.log(b);
        b += 2;
    } while (b < 8);

**************************************************************************
    #Switch - Case : Thực hiện lựa chọn
    switch(giá trị) {
        case giatriA:
            console.log('avc');
            ....
            break;
        case giatriB:
            console.log('avc');
            ....
            break;
        // Group giá trị
        case giatriC:
        case giatriD:
        case giatriE:
            console.log();
            ...
            break;
        default:
            console.log();
            ....
    }

    ex: 
    const chon = 11;

    switch(chon) {
        case 1:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 2:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 3:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 4:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 5:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 6:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 7:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 8:
            console.log('Bạn lựa chọn: ' + chon);
            break;
        case 10:
        case 11:
        case 12:
            console.log('Bạn đã vô lựa chọn đặc biệt ' + chon);
            break;
        default: 
            console.log('Vui lòng nhập lại');
    }


RIÊNG