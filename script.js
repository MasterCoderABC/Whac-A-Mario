let currentMoleTile;
let currentPlantTile;
let currentPlantTile2;
let prevnum;
let score = 0;
let easy_highScore = 0;
let medium_highScore = 0;
let hard_highScore = 0;
let impossible_highScore = 0;
let gameOver = false;
const whack_sound = document.getElementById("whack-sound");
const game_over = document.getElementById("game_over");
const start_effect = document.getElementById("start-button");
const bg_music = document.getElementById("bg-music");
let mute = true;
let moleInterval;
let plantInterval;
let plantInterval2;
let difficulty = "easy";
bg_music.volume = 1;
bg_music.play();
function sound(){
    if (mute){
        mute = false;
        bg_music.play();
        document.getElementById("sound-button").className = "fa-solid fa-volume-high";
    }else{
        mute = true;
        bg_music.pause()
        document.getElementById("sound-button").className = "fa-solid fa-volume-xmark";
    }
}

function start(){
    score = 0;
    bg_music.volume = 0.3;
    const dropdown = document.getElementById("difficulty");
    console.log(dropdown.value)
    difficulty = dropdown.value;
    console.log(difficulty)
    document.getElementById("start-game").innerHTML = '<span id="hs-span"><h2 id="highScore">High Score: 0</h2></span><h2 id="score">Score: 0</h2><div id="board"></div>'
    easy_highScore = localStorage.getItem("easyHS");
    medium_highScore = localStorage.getItem("mediumHS");
    hard_highScore = localStorage.getItem("hardHS");
    impossible_highScore = localStorage.getItem("impossibleHS");
    if (difficulty == "easy"){
        document.getElementById("highScore").innerText = "High Score: " + easy_highScore;
    }else if (difficulty == "medium"){
        document.getElementById("highScore").innerText = "High Score: " + medium_highScore;
    }
    else if (difficulty == "hard"){
        document.getElementById("highScore").innerText = "High Score: " + hard_highScore;
    }
    else if (difficulty == "impossible"){
        document.getElementById("highScore").innerText = "High Score: " + impossible_highScore;
    }
    if (mute == false){
    start_effect.play()
    }

    setGame();
}

function setGame(){
    //setup grid for game board in html, grid is 3x3
    for (let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    setMole();
    setPlant();
    clearInterval(plantInterval2)
    if (difficulty == "easy"){
        moleInterval = setInterval(setMole, 1100);
        plantInterval = setInterval(setPlant, 1000);
        console.log("it works bro u have skill issue")
    }else if (difficulty == "medium"){
        moleInterval = setInterval(setMole, 850);
        plantInterval = setInterval(setPlant, 750);
    }else if (difficulty == "hard"){
        setPlant2();
        moleInterval = setInterval(setMole, 650);
        plantInterval = setInterval(setPlant, 600);
        plantInterval2 = setInterval(setPlant2, 610);
    }else if (difficulty == "impossible"){
        setPlant2();
        let randomNumber = Math.floor(Math.random()*401)+200
        moleInterval = setInterval(setMole, randomNumber);
        plantInterval2 = setInterval(setPlant2, 500);
        plantInterval = setInterval(setPlant, 510);
    }else{
        console.log("error")
    }
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);

    if (num == prevnum){
        if (num > 0){
            num -= 1
        }else{
            num += 1
        }
    }
    prevnum = num;
    return num.toString();
}

function setMole(){
    if (gameOver){
        return;
    }
    
    if (currentMoleTile){
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "montymole.png"
    mole.style.zIndex = "2"

    let num = getRandomTile();
    
    if (currentPlantTile && currentPlantTile.id == num || currentPlantTile2 && currentPlantTile2.id == num){
        return;
    }

    currentMoleTile = document.getElementById(num)
    currentMoleTile.appendChild(mole)
}

function setPlant(){
    if (gameOver){
        return;
    }

    if (currentPlantTile){
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "pirhanaplant.png"
    plant.style.zIndex = "2";

    let num = getRandomTile();

    if (currentMoleTile && currentMoleTile.id == num || currentPlantTile2 && currentPlantTile2.id == num){
        return;
    }

    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function setPlant2(){
    if (gameOver){
        return;
    }

    if (difficulty == "hard" || difficulty == "impossible"){
        if (currentPlantTile2){
        currentPlantTile2.innerHTML = "";
        }

    let plant2 = document.createElement("img");
    plant2.src = "pirhanaplant.png"
    plant2.style.zIndex = "2";

    let num = getRandomTile();

    if (currentMoleTile && currentMoleTile.id == num || currentPlantTile && currentPlantTile.id == num){
        return;
    }

    currentPlantTile2 = document.getElementById(num);
    currentPlantTile2.appendChild(plant2);}
}

function selectTile(){
    if (gameOver){
        return;
    }

    
    if (this == currentMoleTile){
        if (difficulty == "easy"){
            score += 5
            if (easy_highScore < score){
                easy_highScore = score;
                localStorage.setItem("easyHS", easy_highScore)
                document.getElementById("highScore").innerText = "High Score: " + easy_highScore;
            }
        }else if (difficulty == "medium"){
            score += 10
            if (medium_highScore < score){
                medium_highScore = score;
                localStorage.setItem("mediumHS", medium_highScore)
                document.getElementById("highScore").innerText = "High Score: " + medium_highScore;
            }
        }
        else if (difficulty == "hard"){
            score += 10
            if (hard_highScore < score){
                hard_highScore = score;
                localStorage.setItem("hardHS", hard_highScore)
                document.getElementById("highScore").innerText = "High Score: " + hard_highScore;
            }
        }
        else if (difficulty == "impossible"){
            score += 15
            if (impossible_highScore < score){
                impossible_highScore = score;
                localStorage.setItem("impossibleHS", impossible_highScore)
                document.getElementById("highScore").innerText = "High Score: " + impossible_highScore;
            }
        }
        if (mute == false){
        whack_sound.play();
        }
        document.getElementById("score").innerText = "Score: " + score.toString();
        setMole();
        currentMoleTile.innerHTML = "";
        if (difficulty == "impossible"){
        clearInterval(moleInterval);
        randomNumber = Math.floor(Math.random()*401)+200
        moleInterval = setInterval(setMole, randomNumber);
        }
    }
    else if (this == currentPlantTile || this == currentPlantTile2){
        if (difficulty == "easy"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + easy_highScore.toString() + "<br/><button id='restart' onclick='restart()'>RESTART</button>";
        }else if (difficulty == "medium"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + medium_highScore.toString() + "<br/><button id='restart' onclick='restart()'>RESTART</button>";
        }
        else if (difficulty == "hard"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + hard_highScore.toString() + "<br/><button id='restart' onclick='restart()'>RESTART</button>";
        }
        else if (difficulty == "impossible"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + impossible_highScore.toString() + "<br/><button id='restart' onclick='restart()'>RESTART</button>";
        }
        document.getElementById("score").style.opacity = "0";
        document.getElementById("highScore").style.opacity = "0";
        if (mute == false){
        bg_music.pause()
        game_over.play();
        }
        gameOver = true;
        clearInterval(moleInterval)
        clearInterval(plantInterval)
    }
}

function restart(){
    score = 0;
    bg_music.volume = 1;
    if (mute == false){
    bg_music.play();
    }
    gameOver = false;
    difficulty = "easy";
    document.getElementById("score").style.opacity = "1";
    document.getElementById("highScore").style.opacity = "1";
    document.getElementById("start-game").innerHTML = '<h1 id="title">Whac-A-Mario</h1><h2 id="difficulty-label">Select Difficulty:</h2><select id="difficulty"><option value="easy" selected="selected">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="impossible" style="background-color: red;">IMPOSSIBLE</option></select><br><br><br><button id="start" onclick="start()">START</button><br></br>';
}
