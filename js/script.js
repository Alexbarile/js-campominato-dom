
// creo un div con una classe specifica

function createGrid(number){
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = number;
    return element;
    
}

// creo e definisco il pulsante play

let button = document.getElementById('button');
button.addEventListener('click', function(){

    // richiamo la funzione

    let grid = document.getElementById('grid');
    
    // non faccio ripetere la griglia ogni volta che schiaccio play

    if(grid){
        grid.innerHTML = '';
    }

    // creo il ciclo for con i numeri

    for(let i=0; i<100; i++){
        const square = createGrid(i+1);
        
        // aggiungo la funzione quando schiaccio sulla casella cambia colore
    
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(`Hai selezionato il numero ${this.innerText}`)
        });
    
        // creo un figlio di grid

        grid.appendChild(square);
    }

});
