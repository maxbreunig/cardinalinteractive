var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue === "feet"){
        result.value = Number(input.value) * 3.28084;
    }else if(inputTypeValue === "meter" && resultTypeValue === "inches"){
        result.value = Number(input.value) * 39.3701;
    }else if(inputTypeValue === "meter" && resultTypeValue === "milimeter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value;
    }

    if(inputTypeValue === "feet" && resultTypeValue === "meter"){
        result.value = Number(input.value) / 3.28084;
    }else if(inputTypeValue === "feet" && resultTypeValue === "inches"){
        result.value = Number(input.value) * 12;
    }else if(inputTypeValue === "feet" && resultTypeValue === "milimeter"){
        result.value = Number(input.value) * 304.8;
    }else if(inputTypeValue === "feet" && resultTypeValue === "feet"){
        result.value = input.value;
    }

    if(inputTypeValue === "milimeter" && resultTypeValue === "feet"){
        result.value = Number(input.value) / 304.8;
    }else if(inputTypeValue === "milimeter" && resultTypeValue === "inches"){
        result.value = Number(input.value) / 25.4;
    }else if(inputTypeValue === "milimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "milimeter" && resultTypeValue === "milimeter"){
        result.value = input.value;
    }

    if(inputTypeValue === "inches" && resultTypeValue === "feet"){
        result.value = Number(input.value) / 12;
    }else if(inputTypeValue === "inches" && resultTypeValue === "milimeter"){
        result.value = Number(input.value) * 25.4;
    }else if(inputTypeValue === "inches" && resultTypeValue === "meter"){
        result.value = Number(input.value) / 39.37;
    }else if(inputTypeValue === "inches" && resultTypeValue === "inches"){
        result.value = input.value;
    }
}