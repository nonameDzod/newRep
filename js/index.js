// 
// n1 = document.querySelector('.first-value').value
// n1 = parseInt(n1)
// n2 = document.querySelector('.second-value').value
// n2 = parseInt(n2)
// let rez
// let out = document.querySelector('.rezult')

// console.log(out)

function plus() 
{
    let num1,num2,rezult
    num1 = document.getElementById('num1').value
    num1 = parseInt(num1)

    num2 = document.getElementById('num2').value
    num2 = parseInt(num2)
    rezult = num1 + num2 
    document.getElementById('out').innerHTML = rezult
    console.log(rezult)
}

