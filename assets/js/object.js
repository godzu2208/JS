// let user = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     phone: "0909090909",
//     email: "john@gmail.com",
//     address: "123 Main St",
//     country: "USA",
//     zip: "12345",
//     isActive: true,
//     getInfo: function () {
//         // document.getElementById("username").innerHTML = "Hello " + this.name + " " + this.address;
//         console.log(`Hello ${this.name} ${this.address}`);
//     },
//     updateDiv() {
//         const divElement = document.getElementById('username');
//         if (divElement) {
//             divElement.innerHTML = `Hello ${this.name}, you are ${this.age} years old!!!`;
//         } else {
//             console.error('Không tìm thấy thẻ div với id="username"');
//         }
//     }

// };

// user.updateDiv();
// user.getInfo();
// const test2 = document.getElementById('hello_name');
// const test = document.getElementById('ABC');
// if (test2) {
//     console.log("Tìm thấy thẻ div với id='username'");
// } else {
//     console.log("Không tìm thấy thẻ divaaa với id='tedasdsadst2'");
// }


const person = {
    firstname: "John",
    lastname: "Cena",
    age: 30,
    city: "New York",
    // fullname: function () {
    //     document.getElementById("hello_name").innerHTML = this.name + " " + this.lastname;
    //     return this.name + " " + this.lastname;

    // }
}

function getFullName({ firstname, lastname }) {
    return firstname + " " + lastname;
}

/*
bind(person) : Phương thức `bind` được sử dụng để tạo ra một hàm mới với `this` 
được liên kết với đối tượng `person`. Khi hàm `getFullName` được gọi, `this` bên 
trong nó sẽ tham chiếu đến đối tượng `person`.
*/
const fullname = getFullName(person);
console.log(`My name is `, fullname);
// console.log(person.getFullName());

function addPerson(person) {
    document.getElementById("hello_name").innerHTML = person;
}

/*
Tạo một chuỗi bằng cách truy cập từng thuộc tính của đối tượng..
*/
function displayPersonInfo(person) {
    const info = `
        Firstname: ${person.firstname}<br>
        Lastname: ${person.lastname}<br>
        Age: ${person.age}<br>
        City: ${person.city}
    `;
    document.getElementById("hello_name").innerHTML = info;
}

/*
Function này sử dụng JSON.stringify để chuyển đối tượng thành chuỗi JSON.
*/
function displayPersonInfo2(person) {
    document.getElementById("hello_name2").innerHTML = JSON.stringify(person, null, 2);
}

/*
Function này sử dụng vòng lặp for để hiển thị thông tin của đối tượng trong 
phần tử HTML với id là `hello_name3`.
*/

function displayP3(person) {
    let info = "";
    for (let key in person) {
        info += `${key.charAt(0).toUpperCase() + key.slice(1)} ${person[key]} <br>`;
    }
    document.getElementById("hello_name3").innerHTML = info;
}
