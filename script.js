// A=>ay
// B=>mebleg
// C=>emek haqqi
// D=> musteriye dusen maksimal mebleg
// G=> ayliq odenis
// F=> ayliq emek haqqinin 45%-i
// 3000 azn mebleg size 15%le 16 ay muddetine  ayliq 345 manat odenishle veririlir 
// faiz=> Musterinin faizle odeyeceyi mebleg
let faiz
let a
let b
let c
function bank(a,b,c) {
    let d = c * 10
    let g = b / a
    let f = c * 0.45
    if(a>35 && d  < b && f > g) {
        console.log("Siz kredit əldə edə bilməzsiniz!");
    }
    else {
        if(a<=12 && a>0) {
           percent  = ( b * 0.13 ) + b
           let arr = ["SİZƏ" ,b,"AZN MƏBLƏĞİ 13%-LƏ", a , "MÜDDƏTİNƏ AYLIQ", g , "MANAT ÖDNİŞLƏ VERİLİR" ]
           let newArr = arr.join(" ")
           console.log(newArr);
           
        }
        else if (a>12 && a<=24 ) {
            percent  = ( b * 0.15 ) + b
            let arr = ["SİZƏ" ,b,"AZN MƏBLƏĞİ 15%-LƏ", a , "MÜDDƏTİNƏ AYLIQ", g , "MANAT ÖDNİŞLƏ VERİLİR"]
            let newArr = arr.join(" ")
            console.log(newArr);

        }
       else {
        percent  = ( b * 0.17 ) + b
        let arr = ["SİZƏ" ,b,"AZN MƏBLƏĞİ 17%-LƏ", a , "MÜDDƏTİNƏ AYLIQ", g , "MANAT ÖDNİŞLƏ VERİLİR"]
        let newArr = arr.join(" ")
        console.log(newArr);

       }   
    }
}

bank(6,2000,5000)