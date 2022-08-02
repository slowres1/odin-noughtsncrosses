const container = document.querySelector('.container');
const board = document.querySelector('.game-board');

const gameBoard = (function() {
    const contents = ['','A','','','X','','','',''];

    function renderBoard(board) {
        for (let i=0; i<contents.length; i++) {
            const square = document.createElement('div');
            square.classList.add('flex');
            square.textContent = contents[i];
            board.appendChild(square);
        }
    }

    function changeContent(location, value) {
        contents[location] = value;
    }
    
    return {
        //contents: contents,
        renderBoard: renderBoard,
        changeContent: changeContent
    }
})();

gameBoard.renderBoard(board);



/*
const Player = (name) => {
    const getName = () => name;

    return {getName};
};

const ridgey = Player('Mark Ridge');
console.log(ridgey.getName());
*/