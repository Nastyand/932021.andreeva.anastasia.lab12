function getReult(first_value, second_value, sign){
    document.querySelector('.page_head').innerHTML = 'Result';
    document.querySelector('.block').style = "display:none;"
    result = document.createElement('div')
    result.style = " margin-top: 20px; margin-bottom: 20px;"
    result.innerHTML = first_value + sign + second_value + "="
    result.innerHTML += eval(first_value + sign + second_value)
    document.querySelector('.page_head').append(result)
    document.title = 'Result - Backend2'
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.submit').onclick = function(){
        first_value = document.querySelector('.first-input').value
        second_value = document.querySelector('.second-input').value
        sign = document.querySelector('.sign').value
        if (first_value.length !=0 && second_value.length !=0){
            getReult(first_value,second_value, sign)
        }
    }
})
