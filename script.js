const container = document.querySelector('.container');
let input = 'X';

//game board module function.
const gameBoard = (function() {
    //private array
    const contents = ['','','','','','','','',''];

    //private variable for the board
    const board = document.querySelector('.game-board');
    //displays the board using the current contents
    //removes all children then re-populates

    function createBoard() {
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
        for (let i=0; i<contents.length; i++) {
            createSquare(i);
        }
    }

    function createSquare(num) {
        const square = document.createElement('div');
        square.classList.add('flex');
        square.setAttribute('id', num);
        board.appendChild(square);
        
        //adds on-click functionality to change the square contents.
        square.addEventListener('click', () => {
            //will need to come back to this so they can't change current contents.
            changeContent(parseInt(square.id), input),
            renderBoard();
        }); 
    }

    function renderBoard() {
        for (let i=0; i<contents.length; i++) {
            const square = document.getElementById(i);
            square.textContent = contents[i];
        }
    }

    function changeContent(location, value) {
        contents[location] = value;
    }

    createBoard();
    renderBoard();

    return {
        //contents: contents,
        renderBoard: renderBoard,
        changeContent: changeContent
    }
})();

const buttonFunctions = (function() {
    const changePlayer = document.querySelector('.toggle-player');
    
    const reset = document.querySelector('.reset');
    
    changePlayer.addEventListener('click', () => {
        if (input === 'X') {
            return input = '0';
        } else if (input === '0') {
            return input = 'X';
        } else {
            console.log('error');
        };
    });

    reset.addEventListener('click', () => {
        selectPlayer();
    });

    function selectPlayer() {
        const box = document.createElement('div');
        box.classList.add('select-player');

        /*const playerX = document.createElement('button');
        playerX.classList.add('btn','player-x');
        playerX.textContent = 'X';

        const player0 = document.createElement('button');

        const exitButton = document.createElement('button');
        exitButton.classList.add('btn', 'exit-modal');
        exitButton.textContent = 'Exit';
        exitButton.addEventListener('click', () => {
            container.removeChild(box);
        })
        
        */
        const exitButton = createSelectButton(box, 'exit');

        box.appendChild(exitButton);
        container.appendChild(box);
    }
    
    function createSelectButton(box, btnClass) {
        const button = document.createElement('button');
        button.classList.add('btn', btnClass);
        let name;
        if (btnClass === 'exit') {
            name = 'Exit';
            button.addEventListener('click', () => {
                container.removeChild(box);
            });
        } else if (btnClass === 'player-x') {
            name = 'X';
            button.addEventListener('click', () => {
                container.removeChild(box);
            });
        } else if (btnClass === 'player-0') {
            name = '0';
        };
        button.textContent = name;

        return button;

    }



    return {
        changePlayer,
        reset
    }
})();




//gameBoard.renderBoard();


/*
//testing area for randomly changing squares and re-rendering.
//It works!
const changeButton = document.querySelector('.btn');
const randomChange = () => {
    let loc = Math.floor(Math.random() * 9);
    let num = Math.floor(Math.random() * 10);
    console.log({loc, num})
    gameBoard.changeContent(loc, num);
    gameBoard.renderBoard(board);
}

changeButton.addEventListener('click', randomChange);
*/
/*
const Player = (name) => {
    const getName = () => name;

    return {getName};
};

const ridgey = Player('Mark Ridge');
console.log(ridgey.getName());
*/