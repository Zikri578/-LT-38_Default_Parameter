# -LT-38_Default_Parameter

Default parameter adalah fitur yang ditambahkan pada javascript ECMAScript 6 yang memungkinkan Anda untuk memberikan nilai default untuk parameter dalam function. Saat membuat function, Anda dapat memberikan nilai default untuk parameter dengan menetapkan nilai pada saat mendeklarasikan parameter. Contoh:

    function greet(name = 'stranger') {
        console.log("Hello, " + name);
    }

Pada contoh di atas, parameter `"name"` memiliki nilai default `"stranger"` yang digunakan jika tidak ada nilai yang diteruskan saat function `"greet"` dipanggil.

    greet(); // Output: "Hello, stranger"

Jika Anda ingin memanggil function dengan parameter, Anda dapat mengirimkan nilai yang sesuai dengan parameter saat memanggil function. Contoh:

    greet("John"); // Output: "Hello, John"

Secara keseluruhan, Default parameter dalam javascript membuat function lebih fleksibel dan mudah digunakan. Default parameter memungkinkan Anda untuk memberikan nilai default untuk parameter dan digunakan jika tidak ada nilai yang diteruskan saat function dipanggil. Ini membuat kode Anda lebih mudah diatur dan digunakan kembali. Namun juga harus berhati-hati dalam menentukan urutan parameter dan nilai default yang digunakan.

Selain itu, default parameter juga dapat digunakan untuk mengakomodasi jenis parameter yang berbeda dalam satu function. Seperti membuat function yang menerima parameter yang berbeda jumlahnya atau tipe data yang berbeda.

    function add(a = 0, b = 0) {
        return a + b;
    }
    console.log(add()); // Output: 0
    console.log(add(1, 2)); // Output: 3

Pada contoh di atas, parameter `"a"` dan `"b"` memiliki nilai default 0, sehingga jika tidak ada nilai yang diteruskan, maka nilai a dan b akan menjadi 0.

Selain itu, saat menggunakan default parameter, Anda harus berhati-hati dalam memberikan urutan parameter saat memanggil function, karena javascript memperlakukan parameter dengan urutan yang sesuai dengan deklarasi parameter.

    function add(a = 0, b) {
        return a + b;
    }
    console.log(add(1)); // Output: NaN
    console.log(add(undefined, 1)); // Output: 1

Pada contoh di atas, parameter `"a"` memiliki nilai default 0, tetapi parameter `"b"` tidak memiliki nilai default, jika Anda tidak memberikan nilai ke parameter `"b"`, maka akan terjadi error.

Secara keseluruhan, default parameter dalam javascript membuat function lebih fleksibel dan mudah digunakan. Default parameter memungkinkan Anda untuk memberikan nilai default untuk parameter dan digunakan jika tidak ada nilai yang diteruskan saat function dipanggil. Ini membuat kode Anda lebih mudah diatur dan digunakan kembali. Namun juga harus berhati-hati dalam menentukan urutan parameter dan nilai default yang digunakan.
