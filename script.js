const container = document.querySelector('.container');

//game board module function.
const gameBoard = (function() {
    //private array
    const contents = ['','A','','','X','','','',''];

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

        square.addEventListener('click', () => {
            let value;
            if (input === 1) {value = 'X'
            } else if (input === 0) {
                value = '0'
            } else {
                value = 'L'
            };
            changeContent(parseInt(square.id), value),
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

const input = 1;

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