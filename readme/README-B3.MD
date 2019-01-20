*********************************TYPES********************
- Các kiểu dữ liệu trong javascript
1. Number
2. String
3. Boolean
4. array
5. null
6. undefined
7. Infinity
8. NaN

- Trong biểu thức so sánh thì null, undefined, Infinity sẽ được hiểu là false
ex: const a;
    if (a) {

    } else {
        Vô else
    }

1. Số
    - Sử dụng làm phép tính
    - Số + chuỗi -> Chuỗi và ngược lại
    - 1 biến A có giá trị là null thực hiện phép tính với 1 số thì biến A đó
    được hiểu là 0.
    - undefined thực hiện phép tính với 1 số sẽ ra NaN (not a number).
    - 1 phép toán có kết quả là Infinity khi mà chúng ta làm những phép toán sai (ví
    dụ: 6/0);
2. String
    - Chuỗi + chuỗi -> Chuỗi
    - concat(string): Được dùng để nối chuỗi ex: (
        const chuoi = hello;
        chuoi.concat(' Hoan'); -> kết quả: hello Hoan);
    - length: đếm số phần tử của chuỗi ex: (
        const chuoi1 = 'Hi Hi Hi';
        const kq = chuoi1.length -> kết quả: kq = 8
    )
    - indexOf(string): tìm vị trí theo yêu cầu truyền vào từ trái qua phải. ex (
        const chuoi2 = 'Ec ec go go ...';
        const kq = chuoi2.indexOf('go');
        kết quả: kq = 6;
        p/s: Nếu tìm trong chuỗi ko có ký tự đó sẽ trả ra kết quả: -1
    )
    - lastIndexOf(string): tìm vị theo yêu cầu truyền vào từ phải qua trái ex (
        const chuoi3 = 'Trang iu cua anh, iu iu iu...';
        const kq = chuoi3.lastIndexOf('iu');
        kết quả: kq = 23;
        p/s: Nếu tìm trong chuỗi ko có ký tự đó sẽ trả ra kết quả: -1
    )
    - split(string): Cắt chuỗi dựa vào ký tự tùy úy ex (
        const chuoi4 = 'Trang, yeu, em';
        const kq =  chuoi4.split(',');
        kết quả: kq = [Trang, yeu, em];
        Nếu tìm ko ra thì sẽ trả ra 1 mảng có 1 phần tử là string đó.
    )
    - search(string): Tìm vị trí trong chuỗi ex (
        const chuoi = 'Trang, yeu, em';
        const chuoi1 = chuoi.search('e');
        kêt quả: kq = 8;
        p/s: Nếu tìm trong chuỗi ko có ký tự đó sẽ trả ra kết quả: -1
    )
    - startsWith(chuỗi): Kiểm tra ký tự bắt đầu của chuỗi có phải là chuỗi mình nhập vào hay ko
    ex (
        const a = 'helloworld';
        const kq = a.startsWith(he);
        kết quả: kq = true.
        Nếu ko phải bắt đầu bằng he thì trả ra false
    )
    - endsWith(chuỗi): Kiểm tra ký tự kết thúc của chuỗi có phải là chuỗi mình nhập vào hay ko
    ex (
        const a = 'helloworld';
        const kq = a.endsWith(ld);
        kết quả: kq = true.
        Nếu ko phải bắt đầu bằng he thì trả ra false
    )
    - substring(từ vị trí a, đến vị trí b); Cắt chuỗi từ vị trí a đến vị trí b
    ex (
        const a = 'helloworld';
        const kq = a.substring(2, 6);
        kết quả: kq = 'llow';
    )
    - toLowerCase(): chuyển chữ hoa trong chuỗi thành chữ thường ex(
        const a = 'HelloWorld';
        const kq = a.toLowerCase();
        kết quả: kq = 'helloworld'
    )
    - toUpperCase(): NGược lại toLowerCase
    - includes(string): Kiểm tra trong chuỗi có tồn tại chuỗi mình nhập vào hay không
    ex (
        const a = 'helloworld';
        const kq = a.includes('world');
        kết quả: kq = true;
        Nếu không tồn tại thì: kq = false
    )

3. Mảng