function submit(){
    var code = document.getElementById("code").value
    var qty = document.getElementById("qty").value

    if(document.getElementById(code)){
        harga_code = document.getElementById(code).innerText
        harga_total = harga_code * qty
        
        alert("total pembayaran adalah: " + harga_total)
        uang = uangUser()
        // hitung_kembalian = harga_total-uang
        alert("total kembalian anda adalah: "+ (uang - harga_total))
    }
}

function uangUser(){
    bayar = prompt("masukkan uang user")
    return bayar
}