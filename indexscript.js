function buatDeck(){
    var simbol = ["♠","♥","♣","♦"]
    var angka = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    var deck = []

    for(var simbolCounter = 0; simbolCounter < 4; simbolCounter++){
        for(var angkaCounter = 0; angkaCounter < 13; angkaCounter++){
            deck.push(angka[angkaCounter] + simbol[simbolCounter] 
            + "<span>" + simbol[simbolCounter] + "</span>")
        } 
    }
    return deck
}

function acakDeck(deck){
    for(var i = 0; i < 52; i++){
        var tempCard = deck[i]
        var acak = Math.floor(Math.random()*52)
        deck[i] = deck[acak]
        deck[acak] = tempCard;
    }
}

var pemain1 = []
function bagiDeck(){ 
    for(var i = 0; i < 13; i++){
        pemain1.push(deckBaru[i])
    }
}


function munculkanDeck(){
    for(var i = 0; i < 13; i++ ){
        document.querySelectorAll(".kartu")[i].innerHTML = pemain1[i]
        if (pemain1[i][1]=="♥"){
            document.querySelectorAll(".kartu")[i].style.color= "red"
        } else if (pemain1[i][1]=="♦") {
            document.querySelectorAll(".kartu")[i].style.color= "red"
        } else if (pemain1[i][2]=="♥") {
            document.querySelectorAll(".kartu")[i].style.color= "red"
        } else if (pemain1[i][2]=="♦") {
            document.querySelectorAll(".kartu")[i].style.color= "red"
        } else {
            document.querySelectorAll(".kartu")[i].style.color= "black"
        }
    }
}


var barisAtas = []
var barisTengah = []
var barisBawah = []

function bagiBaris(){
    barisAtas = [] 
    barisTengah = [] 
    barisBawah = [] 
    for(var i = 0; i < 3; i++){
        barisAtas.push(pemain1[i])
    }
    for(var i = 3; i < 8; i++){
        barisTengah.push(pemain1[i])
    }
    for(var i = 8; i < 13; i++){
        barisBawah.push(pemain1[i])
    }
}

function cariPairBaris1(){
    var cariAngka = []
    var cariPasangan = []
    bagiBaris()
    for(var i = 0; i < 3; i++){
        cariAngka.push(barisAtas[i][0])
    }
    for(var i = 0; i < 3; i++){
        for(var x = i + 1; x < 3; x++){
            if(cariAngka[i]==cariAngka[x]){
                cariPasangan.push("true")
            }
        }
    }
    if(cariPasangan.length==3){
        document.querySelectorAll(".hasil")[0].innerHTML = "Three of a Kind"
    } else if (cariPasangan.length==1){
        document.querySelectorAll(".hasil")[0].innerHTML = "One Pair"
    } else if (cariPasangan.length==0){
        document.querySelectorAll(".hasil")[0].innerHTML = "High Card"
    }
}

function cariPairBaris2(){
    var cariAngka = []
    var cariPasangan = []
    bagiBaris()
    for(var i = 0; i < 5; i++){
        cariAngka.push(barisTengah[i][0])
    }
    for(var i = 0; i < 5; i++){
        for(var x = i + 1; x < 5; x++){
            if(cariAngka[i]==cariAngka[x]){
                cariPasangan.push("true")
            }
        }
    }
    if(cariPasangan.length==6){
        document.querySelectorAll(".hasil")[1].innerHTML = "Four of a Kind"
    } else if (cariPasangan.length==4){
        document.querySelectorAll(".hasil")[1].innerHTML = "Full House"
    } else if (cariPasangan.length==3){
        document.querySelectorAll(".hasil")[1].innerHTML = "Three of a Kind"
    } else if (cariPasangan.length==2){
        document.querySelectorAll(".hasil")[1].innerHTML = "Two Pair"
    } else if (cariPasangan.length==1){
        document.querySelectorAll(".hasil")[1].innerHTML = "One Pair"
    } else if (cariPasangan.length==0){
        document.querySelectorAll(".hasil")[1].innerHTML = "High Card"
    }
}

function cariPairBaris3(){
    var cariAngka = []
    var cariPasangan = []
    bagiBaris()
    for(var i = 0; i < 5; i++){
        cariAngka.push(barisBawah[i][0])
    }
    for(var i = 0; i < 5; i++){
        for(var x = i + 1; x < 5; x++){
            if(cariAngka[i]==cariAngka[x]){
                cariPasangan.push("true")
            }
        }
    }
    if(cariPasangan.length==6){
        document.querySelectorAll(".hasil")[2].innerHTML = "Four of a Kind"
    } else if (cariPasangan.length==4){
        document.querySelectorAll(".hasil")[2].innerHTML = "Full House"
    } else if (cariPasangan.length==3){
        document.querySelectorAll(".hasil")[2].innerHTML = "Three of a Kind"
    } else if (cariPasangan.length==2){
        document.querySelectorAll(".hasil")[2].innerHTML = "Two Pair"
    } else if (cariPasangan.length==1){
        document.querySelectorAll(".hasil")[2].innerHTML = "One Pair"
    } else if (cariPasangan.length==0){
        document.querySelectorAll(".hasil")[2].innerHTML = "High Card"
    }
}


function cariRoyalFlush2(){
    bagiBaris()

    //Cari Straight
    var nilaiKartu = {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        1 : 10,
        J : 11,
        Q : 12,
        K : 13,
        A : 14
    }
    var cariNilai = []
    var jumlahUrutan = []

    //variabel untuk jika As = 1, straight A 2 3 4 5
    var AsKecil = [2,3,4,5,14]

    for(var i = 0; i < 5; i++){
        var nilai = nilaiKartu[barisTengah[i][0]]
        cariNilai.push(nilai)
    }
    //urutkan nilai dari terendah menuju tertinggi
    cariNilai.sort(function(a,b){
        return a-b
    })
    for(var i = 1; i < 5; i++){
        if(cariNilai[i]-cariNilai[i-1]==1){
            jumlahUrutan.push("true")
        }
    }

    //Cari Flush
    var cariBentuk = []
    var cariPasanganBentuk = []

    for(var i = 0; i < 5; i++){
        cariBentuk.push(barisTengah[i][barisTengah[i].length - 8])
    }

    // Masih Flush
    // Masukkan bentuk pertama lebih dahulu, lalu cocokkan bentuk pertama dan bentuk lainnya
    cariPasanganBentuk.push(cariBentuk[0])
    for(var i = 1; i < 5; i++){
        if(cariBentuk[i]==cariPasanganBentuk[0]){
            cariPasanganBentuk.push(cariBentuk[i])
        }
    }

    //Cari Royal Flush, Straight Flush, Flush, Straight
    var nilaiBaris = [] // diisi dengan Straight atau Flush atau Straight Flush
    
    if( cariNilai[0]==AsKecil[0] && cariNilai[1]==AsKecil[1] && cariNilai[2]==AsKecil[2] &&
        cariNilai[3]==AsKecil[3] && cariNilai[4]==AsKecil[4]){
        nilaiBaris.push("Straight")
    } else if (jumlahUrutan.length==4){
        nilaiBaris.push("Straight")
    }

    if(cariPasanganBentuk.length==5){
        nilaiBaris.push("Flush")
    }

    if(nilaiBaris.length==2 && cariNilai[3]==13){
        document.querySelectorAll(".hasil")[1].innerHTML = "Royal Flush" //Royal Flush
    } else if(nilaiBaris.length==2){
        document.querySelectorAll(".hasil")[1].innerHTML = nilaiBaris[0] + " " + nilaiBaris[1] //Straight Flush
    } else if(nilaiBaris.length==1){
        document.querySelectorAll(".hasil")[1].innerHTML = nilaiBaris[0] // Straight atau Flush
    } else {
        cariPairBaris2() // sisanya
    }
    
}


function cariRoyalFlush3(){
    bagiBaris()

    //Cari Straight
    var nilaiKartu = {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        1 : 10,
        J : 11,
        Q : 12,
        K : 13,
        A : 14
    }
    var cariNilai = []
    var jumlahUrutan = []

    //variabel untuk jika As = 1, straight A 2 3 4 5
    var AsKecil = [2,3,4,5,14]

    for(var i = 0; i < 5; i++){
        var nilai = nilaiKartu[barisBawah[i][0]]
        cariNilai.push(nilai)
    }
    //urutkan nilai dari terendah menuju tertinggi
    cariNilai.sort(function(a,b){
        return a-b
    })
    for(var i = 1; i < 5; i++){
        if(cariNilai[i]-cariNilai[i-1]==1){
            jumlahUrutan.push("true")
        }
    }

    //Cari Flush
    var cariBentuk = []
    var cariPasanganBentuk = []

    for(var i = 0; i < 5; i++){
        cariBentuk.push(barisBawah[i][barisBawah[i].length - 8])
    }

    // Masih Flush
    // Masukkan bentuk pertama lebih dahulu, lalu cocokkan bentuk pertama dan bentuk lainnya
    cariPasanganBentuk.push(cariBentuk[0])
    for(var i = 1; i < 5; i++){
        if(cariBentuk[i]==cariPasanganBentuk[0]){
            cariPasanganBentuk.push(cariBentuk[i])
        }
    }

    //Cari Royal Flush, Straight Flush, Flush, Straight
    var nilaiBaris = [] // diisi dengan Straight atau Flush atau Straight Flush
    
    if( cariNilai[0]==AsKecil[0] && cariNilai[1]==AsKecil[1] && cariNilai[2]==AsKecil[2] &&
        cariNilai[3]==AsKecil[3] && cariNilai[4]==AsKecil[4]){
        nilaiBaris.push("Straight")
    } else if (jumlahUrutan.length==4){
        nilaiBaris.push("Straight")
    }

    if(cariPasanganBentuk.length==5){
        nilaiBaris.push("Flush")
    }

    if(nilaiBaris.length==2 && cariNilai[3]==13){
        document.querySelectorAll(".hasil")[2].innerHTML = "Royal Flush" //Royal Flush
    } else if(nilaiBaris.length==2){
        document.querySelectorAll(".hasil")[2].innerHTML = nilaiBaris[0] + " " + nilaiBaris[1] //Straight Flush
    } else if(nilaiBaris.length==1){
        document.querySelectorAll(".hasil")[2].innerHTML = nilaiBaris[0] // Straight atau Flush
    } else {
        cariPairBaris3() // sisanya
    }
}



var kartu = document.getElementsByClassName("kartu")

var kartu2 = true
var get1 = []

function tukar(){
    if(kartu2==true){
        get1 = []
        var isi = pemain1.indexOf(this.innerHTML)
        get1.push(isi)
        kartu[isi].style.opacity = "70%"
        kartu[isi].style.marginBottom = "50px"
        kartu2 = false
    } else {
        var konten2 = get1[0]
        var konten = pemain1.indexOf(this.innerHTML)
        var tem = pemain1[konten2]
        pemain1[konten2] = pemain1[konten]
        pemain1[konten] = tem
        kartu[get1[0]].style.opacity = "100%"
        kartu[get1[0]].style.marginBottom = "0px"
        munculkanDeck()
        cariPairBaris1()
        cariRoyalFlush2()
        cariRoyalFlush3()
        kartu2 = true
    }
    
}

for(i = 0; i < 13; i++){
    kartu[i].onclick = tukar
}


var deckBaru = buatDeck()
acakDeck(deckBaru)
bagiDeck()
munculkanDeck()
cariPairBaris1()
cariRoyalFlush2()
cariRoyalFlush3()





    










