const arrayOne = [
    [123,23,5,55],
    [93,345,643,5],
    [234,3,22,545,34],
    [123,53,1,53,4]
]
arrayBaru = [].concat(...arrayOne);
console.groupCollapsed('For Debugging');
    console.warn('Array Lama : ' + arrayOne + ' Panjang Array Lama arrayOne : ' + arrayOne.length);    
    console.info('Array Baru : ' + arrayBaru + ' Panjang Array Baru arrayBaru: ' + arrayBaru.length);
    console.error('Urutan Angka : [Masih SALAH] => ' + arrayBaru.sort());
console.groupEnd();

function ngurutin(angka) { 
    for(let n = 0; n < angka.length; n++) {
        let awal = n;

        for(let j = n+1; j < angka.length; j++){
            if(angka[j] < angka[awal]) {
                awal=j; 
            }
        }

        if (awal !== n) {
            let skrg = angka[n]; 
            angka[n] = angka[awal];
            angka[awal] = skrg;      
        }
    }

    console.log('SOAL 1 // Urutan Angka : ' + angka);
    return angka;
}

function mean(angka) {
    // Nilai Rata Rata
    var total = 0, i;
    for (i = 0; i < angka.length; i += 1) {
        total += angka[i];
    }
    console.log('SOAL 2 // Sub MEAN : ' + Math.floor(total / angka.length));
    return total / angka.length;
}

function median(angka) {
    // Data tengah setelah urut
    var median = 0, panjangAngka = angka.length;
 
    if ( panjangAngka % 2 === 0 ) {
        median = (angka[panjangAngka / 2 - 1] + angka[panjangAngka / 2]) / 2;
    } else {
        median = angka[(panjangAngka - 1) / 2];
    }
    
    console.log('SOAL 2 // Sub MEDIAN : ' + median);
    return median;
}

function modus(angka) {
    // nilai paling banyak muncul
    var moduss = [], hitung = [], i, number, maxIndex = 0;
 
    for (i = 0; i < angka.length; i += 1) {
        number = angka[i];
        hitung[number] = (hitung[number] || 0) + 1;
        if (hitung[number] > maxIndex) {
            maxIndex = hitung[number];
        }
    }
 
    for (i in hitung)
        if (hitung.hasOwnProperty(i)) {
            if (hitung[i] === maxIndex) {
                moduss.push(Number(i));
            }
        }
    console.log('SOAL 2 // Sub MODUS : ' + moduss);
    return moduss;
}

function jumlah(angka) {
    let total = 0;

    for(i = 0; i <angka.length; i++){
    total += angka[i];
    }

    console.log('SOAL 3 // Penjumlahan TOTAL : ' + total);
    return total;
}


const a = ngurutin(...[arrayBaru]);
mean(...[a]);
median(...[a]);
modus(...[a]);
jumlah(...[a]);