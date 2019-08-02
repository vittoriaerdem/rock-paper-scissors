/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/


/*----- cached element references -----*/
const scoreEls = {
    p: document.getElementById('p-score'),
    t: document.getElementById('t-score'),
    c: document.getElementById('c-score')
};

const resultEls = {
    p: {
        borderEl: document.getElementById('p-result'),
        imgEl: document.querySelector('#p-result img')
    },
    c: {
        borderEl: document.getElementById('c-result'),
        imgEl: document.querySelector('#c-result img')
    },
};

const repsLookup = {
    r: {
        imgUrl: 'imgs/rock.png', 
        beats: 's'
    },
    p: {
        imgUrl: 'imgs/paper.png', 
        beats: 'r'
    },
    s: {
        imgUrl: 'imgs/scissors.png', 
        beats: 'p'
    },
};
/*----- event listeners -----*/
document.querySelector('main button')
    .addEventListener('click', playRound);

/*----- functions -----*/
init ();

function init(){
    scores = {
        p: 0, 
        t: 0, 
        c: 0
    };
    results = {
        p: 'r', 
        c: 'r'
    };
    winner = null; // 'p', 't', 'c' 
    render();
}

function render(){
// render scores
    for(let score in scores){
        scoreEls[score].textContent = scores[score];
    }
// render results
    for(let result in results){
        resultEls[result].borderEl.style.borderColor = 
            winner === result ? 'grey' : 'white';
        resultEls[result].imgEl.src = 
    }
}

function playRound(){
    console.log('clicked');
}