let x1=Number(prompt("nhap vao toa do x cua diem A"))
let y1=Number(prompt("nhap vao toa do y cua diem A"))
let x2=Number(prompt("nhap vao toa do x cua diem B"))
let y2=Number(prompt("nhap vao toa do y cua diem B"))
let x3=Number(prompt("nhap vao toa do x cua diem C"))
let y3=Number(prompt("nhap vao toa do y cua diem C"))

let k1=(x2-x1)/(y2-y1)
let k2=(x3-x1)/(y3-y1)
if(k1==k2){
    alert(" 3 điểm A B C thẳng hàng nhé")
}else{
    alert("3 điểm A B C không thẳng hàng")
}
