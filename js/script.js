// ESERIZIO BASE

// creo funzione per contenuto della griglia

function createElementGrid(number, cellRow){

    // creo un div con una classe specifica
    const element = document.createElement('div');
    
    element.style.width = `calc(100% / ${cellRow})`;
    element.style.height = `calc(100% / ${cellRow})`;

    element.classList.add('square');
    element.innerText = number;
    return element;
}

// creo funzione per griglia

function createGrid(bomb, cellNumber, cellRow){

    let grid = document.getElementById('grid');
    
    // non faccio ripetere la griglia ogni volta che schiaccio play

    if(grid){
        grid.innerHTML = '';
    }

    // creo il ciclo for con i numeri

    for(let i=0; i<cellNumber; i++){
        const square = createElementGrid(i+1, cellRow);
        
        // aggiungo la funzione quando schiaccio sulla casella cambia colore
    
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            // console.log(`Hai selezionato il numero ${this.innerText}`)

            // creata condizione che quando becco una bomba esce un alert

            if(bomb.includes(parseInt(this.innerText))){
                alert(`Hai selezionato una bomba ${this.innerText}`);

            }

        });
    
        // creo un figlio di grid

        grid.appendChild(square);
    }
}


// BONUS

let button = document.getElementById('button');
button.addEventListener('click', function(){

    let difficult = document.getElementById('level').value;

    let arrayBomb = [];


    let cellNumber;
    let cellRow;

    switch(difficult){
        case 'Easy':
            cellNumber = 100;
            cellRow = 10;
            break;
        case 'Medium':
            cellNumber = 81;
            cellRow = 9; 
            break;
        case 'Hard':
            cellNumber = 49;
            cellRow = 7;
            break;
        default:
            cellNumber = 100;
            cellRow = 10;
            break;
    }

    arrayBomb = createArrayBomb(1, cellNumber);
    console.log(arrayBomb);

    // richiamo funzione createGrid
    
    createGrid(arrayBomb, cellNumber, cellRow);

});



// funzione che genera numeri casuali

function createArrayBomb(min, max){
    let bomb = [];
    let i = 0;
    while(i < 16){
        let numberRandom = Math.floor(Math.random() * (max - min +1)+ min);
        if(!bomb.includes(numberRandom)){
            bomb.push(numberRandom);
            i++;
        }

    }
    return bomb;
}



