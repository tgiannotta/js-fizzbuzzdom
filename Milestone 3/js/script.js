const boxesContainer = document.querySelector('.container');


for (let i = 1; i <=1000; i++) {
    let contenuto;

    if ((i % 3 === 0) && (i % 5 === 0)){
        contenuto = 'fizzbuzz';
        console.log(i);
        console.log(contenuto);
    }
    else if (i % 3 === 0) {
        contenuto = 'fizz';
    }
    else if (i % 5 === 0) {
        contenuto = 'buzz';
    }
    else {
        contenuto = i;
    }
        
    let newBox = `
    <div class="box ${contenuto}">${contenuto}</div>
 `;
    boxesContainer.innerHTML += newBox;
    console.log(newBox);

}