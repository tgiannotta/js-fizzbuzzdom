const boxesContainer = document.querySelector('.container');


for (let i = 1; i <=100; i++) {
    let contenuto;

    if ((i % 3 === 0) && (i % 5 === 0)){
        contenuto = 'FizzBuzz';
        console.log(i);
        console.log(contenuto);
    }
    else if (i % 3 === 0) {
        contenuto = 'Fizz';
    }
    else if (i % 5 === 0) {
        contenuto = 'Buzz';
    }
    else {
        contenuto = i;
    }
        
    let newBox = `
    <div class="box">${contenuto}</div>
 `;
    boxesContainer.innerHTML += newBox;
    console.log(newBox);

}