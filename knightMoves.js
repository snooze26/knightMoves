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
    static moves = [
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




function validLocation(position) { 
    
    const boardLimit = 8; 
    const [x , y] = position

    if((x >= 0 && x < boardLimit) && (y >= 0 && y < boardLimit)) { 
        return true
    } else { 
        return false
    }
}

function shortestPath(currentPosition, destination) { 
    // console.log(currentPosition)
    // console.log(destination);

    //checking if current position is valid 
    if(!validLocation(currentPosition)) { 
        console.error("Please enter a valid current position");
        return null        
    }
    //checking if destination is valid 
    if(!validLocation(destination)) { 
        console.error("Please enter a valid destination position");
        return null        

    }

    // creating path 
    let fastPath = null

    const recurs = (current , path) => {
        // check if the current position matches destination 
        if(current[0] === destination[0] && current[1] === destination[1]) { 
            if(fastPath == null || path.length < fastPath.length) { //update Fastpath only if no prev path exists or path is shorter than fastPath
                fastPath = [...path];   // copies path array into fast path after each check 
            }
            return;
        }

        if(fastPath && path.length >= fastPath.length) return; // if shorter path has been found stop searching for shorter paths 

        // loop through possible knight moves 
        for(const [dx, dy] of Knight.moves) { 
            const nextPosition = [current[0] + dx , current[1] + dy]; 
            
            //if the move is possible and do not visit the same spot (some prevents cycles)
            if(validLocation(nextPosition) && !path.some(pos => pos[0] === nextPosition[0] && pos[1] === nextPosition[1])) {
                path.push(nextPosition); // add the next position to the path
                recurs(nextPosition, path); // explore further possible moves 
                path.pop(); // removes nextPosition from path after each recursion 
            }
        }
    }
    recurs(currentPosition , [currentPosition]); // 
    return fastPath; // return shortestPath 
}


//left on removing the css styling for when square is visited and adding new css stlying 
function visitedSpace(path) { 
    let spacesVisited = 0; 

    path.forEach(space => {
        const square = document.querySelector(`${space[0]} - ${space[1]}` )
        square.textContent = `${spacesVisited}`;
        square.classList.remove("darkSpace")
        square.classList.add("visitedSpace")
    });
}

function getCoords(input) { 
    if(typeof input !== "string") {
        console.error('Please enter valid coordinates: "x-x"');
    }

    const coords = input.split("-");
    if(!coords == 2) {
        console.error('Please use the valid format "x-x"');            
    }       
    
    const firstNumber = parseInt(coords[0].trim(), 10);
    const secondNumber = parseInt(coords[1].trim(), 10);

    if(!Number.isInteger(firstNumber)) {
        console.error("First input is not a valid number");
    }

    if(!typeof Number.isInteger(secondNumber !== 'integer')) {
        console.error("Second input is not a valid number");
    }

    return [ firstNumber, secondNumber];

}


//test area 
// const testValid = validLocation([5, 5])

// console.log(testValid);
// const shortPath = shortestPath([1 , 3] , [4 , 3])
// console.log(shortPath)

document.addEventListener("DOMContentLoaded" , () => {
    //     const testCB = new ChessBoard("#container"); 
    //     console.log(testCB);
            // const testKnight = new Knight(); 
            // console.log(testKnight)
      const coorddis = "4-4"; 
      console.log(getCoords(coorddis));      
    })




// console.log("script is loading");
