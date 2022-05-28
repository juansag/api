const result = document.querySelector('.resultados');
const button = document.querySelector("button");

function traerinfo(){
    fetch('https://api.agify.io?name=meelad').then((res)=>
    res.json()
    ).then(data =>{
        reinfo(data);
    });
}

function reinfo(inform){
    const names = document.createElement('h3');
    names.textContent = inform.name;

    const  age = document.createElement('h3');
    age.textContent = inform.age;

    const  count = document.createElement('h3');
    count.textContent = inform.count;

    const div = document.createElement('div');
    div.appendChild(names);
    div.appendChild(age);
    div.appendChild(count);

    result.appendChild(div);

}

traerinfo();