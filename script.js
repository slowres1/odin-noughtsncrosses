const container = document.querySelector('.container');
let input = 'X';

//game board module function.
const gameBoard = (function() {
    //private array
    let contents = ['','','','','','','','',''];

    //private variable for the board
    const board = document.querySelector('.game-board');
    //displays the board using the current contents
    //removes all children then re-populates

    function createBoard() {
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
        contents = ['','','','','','','','',''];
        for (let i=0; i<contents.length; i++) {
            createSquare(i);
        }
        return {contents}
    }

    function createSquare(num) {
        const square = document.createElement('div');
        square.classList.add('flex');
        square.setAttribute('id', num);
        board.appendChild(square);
        
        //adds on-click functionality to change the square contents.
        square.addEventListener('click', () => {
            
            placeMarker(square.id);
            //changeContent(parseInt(square.id), input),
            //renderBoard();
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

    function placeMarker(id) {
        let selection = document.getElementById(parseInt(id));
        if (selection.textContent) {
            alert('Can\'t place that there M\'lord!');
            return;
        }

        changeContent(parseInt(id), input);
        renderBoard();
        checkGameOver();

        if (input === 'X') {
            return input = '0';
        } else if (input === '0') {
            return input = 'X';
        } else {
            console.log('error');
        };

    }

    function checkGameOver() {
        console.log(contents);

        if (contents.every((value) => value != '')) {console.log('Game Over')};

        //victory conditions
        //horizontal
        
    }

    createBoard();
    renderBoard();

    return {
        //contents: contents,
        createBoard: createBoard,
        renderBoard: renderBoard,
        changeContent: changeContent
    }
})();

const buttonFunctions = (function() {
    //const changePlayer = document.querySelector('.toggle-player');
    
    const reset = document.querySelector('.reset');

    reset.addEventListener('click', () => {
        selectPlayer();
    });

    function selectPlayer() {
        const box = document.createElement('div');
        box.classList.add('select-player');

        const message = document.createElement('h1');
        message.textContent = 'Noughts and Crosses. Choose Player to start.';
        
        const exitButton = createSelectButton(box, 'exit');
        const playerXButton = createSelectButton(box, 'player-x');
        const player0Button = createSelectButton(box, 'player-0');

        box.appendChild(message);
        box.appendChild(exitButton);
        box.appendChild(playerXButton);
        box.appendChild(player0Button);
        
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
                gameBoard.createBoard();
                input = 'X';
                container.removeChild(box);
            });
        } else if (btnClass === 'player-0') {
            name = '0';
            button.addEventListener('click', () => {
                gameBoard.createBoard();
                input = '0';
                container.removeChild(box);
            });
        };

        button.textContent = name;
        return button;
    }

    return {
        reset,
        selectPlayer
    }

})();

buttonFunctions.selectPlayer();

















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