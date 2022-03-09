
//div 4
document.getElementById("demo4-2").innerHTML = " Nhúng file JS vào file HTML ";
function callmrbean() {
    document.getElementById("demo4-2").innerHTML=" Mr.bean come in (Gọi hàm từ file JS)";
}
document.getElementById("demo5-2").innerHTML = 5 + 6;
//div 5

//div 6
const cars = ["BWM", "vin", "toyota"];
const students = {firstname: "le dang", lastname: "ha", age: "25", born:"Viet Nam"};
document.getElementById("demo6-1").innerHTML=" Tuoi cua hoc sinh la: " + students.age;
//
function ham_index0f() {
    var str = "qua xoai non la qua xoai chua";
    var check = str.indexOf("qua xoai");
    document.getElementById("demo6-3").innerHTML = check;
}
//
function ham_lastindex0f() {
    var str = "qua xoai non la qua xoai chua";
    var checklast = str.lastIndexOf("qua xoai");
    document.getElementById("demo6-4").innerHTML = checklast;
}
//
var chuoi = "qua xoai non la qua xoai chua";
var a = chuoi.startsWith("qua x");
var b = chuoi.startsWith("a xoai");
document.getElementById("demo6-5").innerHTML = a;
document.getElementById("demo6-6").innerHTML = b;
var c = chuoi.endsWith("qua x");
var d = chuoi.endsWith("chua");
document.getElementById("demo6-7").innerHTML = c;
document.getElementById("demo6-8").innerHTML = d;
//
//div 7
const fruits = ["Xoai", "Tao", "Coc", "Oi", "Na", "Dua"];
fruits.pop();                
fruits.push("Qua Chanh Leo");
let fLen = fruits.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo7-0").innerHTML = text;
fruits.sort();
document.getElementById("demo7-1").innerHTML = "Mang da duoc sap xep: " + fruits;
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo7-2").innerHTML = "Mang: " + points; 
points.sort(function(a, b){return a - b});
document.getElementById("demo7-3").innerHTML = "Min to Max: " + points;
points.sort(function(a, b){return b - a});
document.getElementById("demo7-4").innerHTML = "Max to Min: " + points;
const element = document.getElementById("demo7-4");
element.innerHTML="Mang nay da bi thay doi noi dung !";
document.getElementById("cat_img").src = "img/dog.jpg";
document.getElementById("demo7-5").innerHTML = "Day la Dong Ho : " + Date();
//div 8
function kiemtra() {
    let x = document.getElementById("numb").value; // lay gia tri nhap vao tu khung nhap
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
    text = "Khong hop le";
    } else {
    text = "Hop le";
    }
    document.getElementById("demo8-0").innerHTML = " So: " + x + " " + text ;
}
//
function myMove() {
  let id = null;
  const elem = document.getElementById("qua_bong");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 20); // cai dat 2/100s se thuc hien ham frame 1 lan
  function frame() {
    if (pos == 350) {
      clearInterval(id); // dung hoat dong cua ham 'setInterval'
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
//div 9
function chinhsua1(id) {
  id.innerHTML = "Ooops!";
}
function chinhsua2() {
    document.getElementById('demo9-1').innerHTML = "Loi !!!";
}
function calltime() {
    document.getElementById('demo9-3').innerHTML = Date();
}
// co the dung cau lenh sau thay the cho ham tren: document.getElementById("myBtn").onclick = displayDate;
function mOver(obj) {
  obj.innerHTML = "Thank You"
}
function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
function mover() {
    document.getElementById('myBtn3').innerHTML = "da dua chuot vao";
}
//
var y = document.getElementById("myBtn3");
y.addEventListener("mouseover", mover);
y.addEventListener("mouseout", mout);
function mout() {
    document.getElementById('myBtn3').innerHTML = "da dua chuot ra";
}
document.getElementById("myBtn1").addEventListener("click", function() {
    alert("Hello World !");
  });
//
var x = document.getElementById("myBtn2");
x.addEventListener("click", phanhoi);
x.addEventListener("click", phanhoi2);
function phanhoi() {
    alert ("Xin chao !");
}
function phanhoi2() {
    alert ("Xin chao lan 2 !");
}
// tao phep tinh
document.getElementById("myBtn4").addEventListener("click", nhan2so);
function nhan2so() {
    let p1 = document.getElementById("demo9-in1").value;
    let p2 = document.getElementById("demo9-in2").value;
    let pp=p1*p2;
    document.getElementById("demo9-ou1").innerHTML = pp;
}
const myCollection = document.getElementsByTagName("p");
document.getElementById("demo9-4").innerHTML = "Trong file nay co: " + myCollection.length + " The 'p' " + "=>" + "set all to red";

for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
}

const myNodelist = document.querySelectorAll("p");
document.getElementById("demo9-5").innerHTML = " The 'p' nay duoc noi them the 'p[56]' truoc do vao phia sau: " + myNodelist[56].innerHTML;
//div 10

//div 11

//div 12

//div 13

//div 14

//end