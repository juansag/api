const result = document.querySelector('.resultados');
const input = document.querySelector('input');
const button = document.querySelector("button");


button.addEventListener('click', (e) =>{
    e.preventDefault();
    traerinfo(input.value);

})

function traerinfo(inform){
    fetch( `https://api.agify.io?name=${inform}`  ).then((res)=>
    res.json()
    ).then(data => {
        reinfo(data);
    });
}



function reinfo(inform){
    const name = document.querySelector('.titulo1');
    name.textContent = inform.name;

    const edad = document.querySelector('.titulo2');
    edad.textContent = inform.age;

    const num = document.querySelector('.titulo3');
    num.textContent = inform.count;



   const div = document.querySelector('.resultados');
   div.appendChild(name);
    div.appendChild(edad);
    div.appendChild(num);
    result.appendChild(div);
}
traerinfo();
function envioinfo(){
    
}