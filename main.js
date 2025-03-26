let arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16];
let mathedArr;

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
        mathedArr.push(everything);
    }
    setTimeout(() => {
        console.log(`Original array: ${arr}`);
        console.log(`Mathed array: ${mathedArr}`);
    });
    arr = mathedArr;
}

setInterval(poelse, 300);