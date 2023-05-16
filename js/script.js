

for(let i = 0; i < 101; i++){
    let p = document.createElement('p');
    if((i % 5 == 0) && (i % 3 == 0)){
        console.log('FizzBuzz');
        p.append(i + ': ' + "FizzBuzz");
        p.style.color = "violet";
        document.getElementById('my-container').append(p);
    }else if(i % 5 == 0){
        console.log('Buzz');
        p.append(i + ': ' + "Buzz");
        p.style.color = "yellow";
        document.getElementById('my-container').append(p);
    }else if(i % 3 == 0){
        console.log('Fizz');
        p.append(i + ': ' + "Fizz");
        p.style.color = "red";
        document.getElementById('my-container').append(p);
    }else{
        console.log(i);
        p.append(i);
        document.getElementById('my-container').append(p);
    }
}