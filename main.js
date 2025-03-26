let arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16];
let mathedArr;
let arrs = [];

function poelse() {
    mathedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sqroot = Math.sqrt(arr[i]);
        // console.log(sqroot);
        let sinn = Math.sin(sqroot);
        // console.log(sinn);
        let coss = Math.cos(sinn);
        // console.log(coss);
        let everything = sqroot + sinn + coss;
        everything * (Math.pi * Math.e);
        mathedArr.push(everything);
    }
    arrs.push(arr + mathedArr);
    console.log(`Original array: ${arr}`);
    console.log(`Mathed array: ${mathedArr}`);
    console.log(`All arrays: ${arrs}`);
    arr = mathedArr;
}

setTimeout(() => {
    while (true) {
        for (i = 0; i < 100; i++) {
            poelse();
        }
        console.log('Wow your computer has survived for a long time!');
        for (i = 0; i < 200; i++) {
            poelse();
        }
        console.log('Wow your computer has survived for a very long time!');
        for (i = 0; i < 400; i++) {
            poelse();
        }
        console.log('Wow your computer has survived for an extremely long time!');
        for (i = 0; i < 750; i++) {
            poelse();
        }
        console.log('Wow your computer has survived for an amasingly long time!');
        for (i = 0; i < 1000; i++) {
            poelse();
        }
        console.log('Wow your computer just keeps going.');
    }
}, 5000);
