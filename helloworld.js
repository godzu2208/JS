var handleClickOK = function() {
    var name = document.getElementById('inputName').value
    document.getElementById('hello_name').innerHTML = name
    // document.write('Hello ' + name + '!')
}

// handleClickOK()

var thong_bao = function() {
    document.getElementById('thong_bao').innerHTML += "Timeout!<br>"
}
setTimeout(thong_bao, 3000)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('thong_bao').innerHTML += "Timeousdfdsfdsft!<br>";
});
// document.getElementById("test").innerHTML += "Waiting!<br>"
// document.getElementById('test').innerHTML += "Timadsadsaeout!<br>"