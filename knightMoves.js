class ChessBoard{ 
    constructor(containerId){ 
        this.container = document.querySelector(containerId); 
        this.board = []
        this.createBoard();
    }
    
    createBoard() { 
        
        for(let row = 0; row < 8; row++) { 
            //create row
            this.board[row] = [];
            for(let col = 0; col < 8; col++){ 
                //create space divs 
                const space = document.createElement('div'); 
                //add general styling
                space.classList.add('boardSpace');
                //create alternating space styling
                if((row + col) % 2 == 0){
                    space.classList.add('darkSpace'); 
                }
                //assign id to each space
                space.id = `space-${row}-${col}`; 
                //adding the spaces to the chessboard
                this.container.appendChild(space);
                //assign row and columns to space
                this.board[row][col] = space; 
            }
        }
    }
}

class Knight{ 
    constructor() {
        this.moves = [
            [2 , 1], 
            [1 , 2],
            [2 , -1],
            [1 , -2],
            [-2 , 1],
            [-1 , 2],
            [-2 , -1],
            [-1 , -2]
        ]
    }
}




function validLocation(x,y) { 
    const boardLimit = 7; 
    if((x >= 0 && x < boardLimit) && (y >= 0 && x < boardLimit)) { 
        console.log(x)
        console.log(y)
        return true
    } else { 
        console.error("Location is not valid");   
    }
}

const isValid = validLocation(11, 9);
console.log(isValid);


//test area 
document.addEventListener("DOMContentLoaded" , () => {
    //     const testCB = new ChessBoard("#container"); 
    //     console.log(testCB);
            // const testKnight = new Knight(); 
            // console.log(testKnight)
            
    })


// console.log("script is loading");
