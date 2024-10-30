$(function () {
    let input1;
    let input2;
    let operasiSelected = null;

    $(".tombol-angka").click(function () {
        let angka = $(this).text();
        
        if (operasiSelected == null) {
            let angkaSebelumnya = $("#input1").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input1 = angkaSebelumnya + angka;
            $("#input1").text(input1);
            $("#hasil").text(input1);
            input1=$("#input1").text()
        } else {
            let angkaSebelumnya = $("#input2").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input2 = angkaSebelumnya + angka;
            $("#input2").text(input2);
            $("#hasil").text(input2);
            input2=$("#input2").text()
        } 

    });

    $(".decimal").click(function () {  
        if (operasiSelected == null) {
            let angkaSebelumnya = $("#input1").text();
            if (angkaSebelumnya == "..." || angkaSebelumnya.includes(".")) return; 
            input1 = angkaSebelumnya + ".";  
            $("#input1").text(input1);
        } else {
            let angkaSebelumnya = $("#input2").text();
            if (angkaSebelumnya == "..." || angkaSebelumnya.includes(".")) return;
            input2 = angkaSebelumnya + ".";  
            $("#input2").text(input2);   
        }
    });


    $(".tombol-operasi").click(function () {
        let newOperasi = $(this).text();
        if (operasiSelected == null) {
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        } else {
            $("#input1").text($("#hasil").text());
            $("#input2").text("...");
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        }
    });

$(".tombol-koma").click(function () {
    if (operasiSelected == null) {
        let angkaSekarang = $("#input1").text();
        if (angkaSekarang == "..." || angkaSekarang.includes(".")) {
            return;
        }
        input1 = angkaSekarang + ".";
        $("#input1").text(input1);
        $("#hasil").text(input1);
    } else {
        let angkaSekarang = $("#input2").text();
        if (angkaSekarang == "..." || angkaSekarang.includes(".")) {
            return;
        }
        
        input2 = angkaSekarang + ".";
        $("#input2").text(input2);
        $("#hasil").text(input2);
    }
});

$(".tombol-plusminus").click(function () {
    if (operasiSelected == null) {
        let angkaSekarang = $("#input1").text();
        if (angkaSekarang == "...") return;
        
        if (angkaSekarang.startsWith("-")) {
            input1 = angkaSekarang.substring(1);
        } else {
            input1 = "-" + angkaSekarang;
        }
        $("#input1").text(input1);
        $("#hasil").text(input1);
    } else {
        let angkaSekarang = $("#input2").text();
        if (angkaSekarang == "...") return;
        
        if (angkaSekarang.startsWith("-")) {
            input2 = angkaSekarang.substring(1);
        } else {
            input2 = "-" + angkaSekarang;
        }
        $("#input2").text(input2);
        $("#hasil").text(input2);
    }

});

    $(".tombol-faktorial").click(function () {
        if (operasiSelected == null) {
            let angka = parseInt($("#input1").text());
            if (angka < 0) {
                alert("Faktorial hanya bisa dihitung untuk angka non-negatif.");
                return;
            }
            if (angka % 1 !== 0) {
                alert("Faktorial hanya bisa dihitung untuk angka bulat.");
                return;
            }
            let hasil = 1;
            for (let i = 1; i <= angka; i++) {
                hasil *= i;
            }
            $("#hasil").text(hasil);
            $("#input1").text(hasil);
            input1 = hasil;
        }
    });

    $("#btn-hitung").click(function () {
        input1 = parseFloat($("#input1").text());
        input2 = parseFloat($("#input2").text());
        let hasil;

        if (isNaN(input1) || isNaN(input2)) {
            alert("Masukkan angka yang valid sebelum menghitung.");
            return;
        }

        if(operasiSelected=="+") {
            hasil = input1 + input2;
        } else if (operasiSelected == "-") {
            hasil = input1 - input2;
        } else if (operasiSelected == "x") {
            hasil = input1 * input2;
        } else if (operasiSelected == "/") {
            hasil = input1 / input2;
        } else if (operasiSelected == "^") {
            hasil = input1 ** input2;
        } else if (operasiSelected == "%") {
            hasil = input1 % input2;
        } else if (operasiSelected == "/") {
            if (input2 === 0) {
                alert("Tidak bisa membagi dengan nol");
                return;
            }
            hasil = input1 / input2;
        } else{
            alert(`Belum ada handle untuk operasi ${operasiSelected}`)
        }
        
        $("#hasil").text(hasil);
    })

    $("#btn-clear").click(function() {
        $("#input1").text("...");
        $("#input2").text("...");
        $("#operasi-selected").text("...");
        $("#hasil").text("...");
        input1 = null;
        input2 = null;
        operasiSelected = null;
    });
});