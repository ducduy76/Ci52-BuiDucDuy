
let a = prompt("nhap  mot chuoi ki tu viet lien");
let arr = {};
for (let i = 0; i < a.length; i++) {
    if (arr[a[i]]) {
        arr[a[i]]++;
    } else {
        arr[a[i]] = 1;
    }
}
for (let i in arr) {
    console.log(`(${i}, ${arr[i]})`)
}