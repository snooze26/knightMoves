class ChessBoard { 
    constructor(containerId) { 
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

class Knight { 
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




function validLocation(position) { 
    
    const boardLimit = 8; 
    const [x , y] = position

    if((x >= 0 && x < boardLimit) && (y >= 0 && y < boardLimit)) { 
        // console.log(x)
        // console.log(y)
        return true
    } else { 
        console.error("Location is not valid");   
    }
}

function shortestPath(currentPosition, destination) { 
    // console.log(currentPosition)
    // console.log(destination);
    
    if(!validLocation(currentPosition)) { 
        return console.error("Please enter a valid current position");        
    }

    if(!validLocation(destination)) { 
        return console.error("Please enter a valid destination position");
    }

    let fastPath = null;
}

//test area 
// const testValid = validLocation([5, 5])

// console.log(testValid);
const shortPath = shortestPath([1 , 10] , [2 , 6])

document.addEventListener("DOMContentLoaded" , () => {
    //     const testCB = new ChessBoard("#container"); 
    //     console.log(testCB);
            // const testKnight = new Knight(); 
            // console.log(testKnight)
            
    })


// console.log("script is loading");
