// alert("Nhập vào 1 số x bất kì. Hãy tìm các vị trí (i, j) (i < j) thỏa mãn tổng của 2 số tại vị trí i và j bằng số x.")
// var arr = [1, 2, 3, 4, 5]
// var input = Number(prompt("nhap 1 sô bất kì"))
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         var k = Number(arr[i] + arr[j]);
//         if (k == input) {

//             console.log(`(${i},${j})`)
//         }
//     }
// }
// chữa bài
let arr=prompt("nhap vaof dayx soos")
arr=arr.localeCompare(Number)
// hàm map dùng để nó xét từng phần tử trong mảng arr và sẽ chuyển lần lượt các string đó sang số