
function setnum(num){
    var input = document.getElementById("screen");
    input.value += num
}

function ans(){
    var inputvalue = document.getElementById("screen");
    inputvalue.value = output
}

function clearbtn(){
    var inputvalue = document.getElementById("screen");
    inputvalue.value = ""
}

function del(){
    var inputvalue = document.getElementById("screen");
    inputvalue.value = inputvalue.value.slice(0,-1)
}