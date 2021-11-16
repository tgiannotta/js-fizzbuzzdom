const boxesContainer = document.querySelector('.container');
console.log(boxesContainer);
for (let i = 1; i <=1000; i++) {
    console.log(i);
    let newBox = `
    <div class="box">${i}</div>
 `;
    boxesContainer.innerHTML += newBox;

}