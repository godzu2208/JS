// var handleClickOK = function() {
//     var name = document.getElementById('inputName').value
//     document.getElementById('hello_name').innerHTML = name
//     // document.write('Hello ' + name + '!')
// }

// // handleClickOK()

// var thong_bao = function() {
//     document.getElementById('thong_bao').innerHTML += "Timeout!<br>"
// }
// setTimeout(thong_bao, 3000)
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('thong_bao').innerHTML += "Timeousdfdsfdsft!<br>";
// });
// // document.getElementById("test").innerHTML += "Waiting!<br>"
// // document.getElementById('test').innerHTML += "Timadsadsaeout!<br>"

// let a = 10;

// var print_a = function() {
//     document.write(a)
// }

function exampleVar() {
    if (true) {
      var x = 10; // Biến x có phạm vi trong hàm exampleVar
      console.log(x); // 10
    }
    console.log(x); // 10 (vẫn truy cập được vì var không có block scope)
  }
  exampleVar();
//   console.log(x); // ReferenceError: x is not defined (x không tồn tại bên ngoài hàm)

function exampleLet() {
    // let y;
    if (true) {
        let y = 20; // Biến y có phạm vi trong khối if
        console.log(y); // 20
      }
      console.log(y); // ReferenceError: y is not defined (y không tồn tại bên ngoài khối if)
}
exampleLet();
// console.log(y);
