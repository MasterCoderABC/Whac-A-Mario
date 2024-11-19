//FIREBASE PART
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV-NnEFovGS0OmX6OHHIJaqQczP0nF8Yo",
  authDomain: "whac-a-mario.firebaseapp.com",
  databaseURL: "https://whac-a-mario-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whac-a-mario",
  storageBucket: "whac-a-mario.appspot.com",
  messagingSenderId: "38376451619",
  appId: "1:38376451619:web:050e9a7e5d9fa01a830b96",
  measurementId: "G-PMJZ8H6LMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
let difficulty = "easy";

let name = ""

function addData(EHS, MHS, HHS, IHS){
    set(ref(db, 'PlayerSet/' + name), {
        username: {name},
        easy_HS: {EHS},
        medium_HS: {MHS},
        hard_HS: {HHS},
        imp_HS: {IHS}
    })
}

const dbRef = ref(db)
let playersList = [];
let count = 1;
const getAllData = function(){
    get(child(dbRef, 'PlayerSet')).then((snapshot)=>{
        playersList = [];
        count = 1;
        document.getElementById("lbbody").innerHTML = '<tbody id="lbbody"><tr><th colspan="3" id="lbheading">LEADERBOARD <i class="fa-solid fa-sort-down" style="color:green;"></th></tr><tr><th>Position</th><th>Name</th><th>Score</th></tr></tbody>'
        snapshot.forEach(player => {
            playersList.push(player.val())
        });
        if (difficulty == "easy"){
            playersList.forEach(player => {
                if (player.easy_HS == null){
                    delete playersList[playersList.indexOf(player)]
                }
            })
            playersList.sort((a, b) => b.easy_HS.EHS - a.easy_HS.EHS)
            playersList.forEach(player => {
                if (count == 1){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥇"+"</td><td>"+player.username.name+"</td><td>"+player.easy_HS.EHS+"</td></tr>"
                }else if (count == 2){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥈"+"</td><td>"+player.username.name+"</td><td>"+player.easy_HS.EHS+"</td></tr>"
                }else if (count == 3){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥉"+"</td><td>"+player.username.name+"</td><td>"+player.easy_HS.EHS+"</td></tr>"
                }else{
                    document.getElementById("lbbody").innerHTML += "<tr><td>"+count.toString()+"</td><td>"+player.username.name+"</td><td>"+player.easy_HS.EHS+"</td></tr>"
                }
                
                count++;
            })
        }else if (difficulty == "medium"){
            playersList.forEach(player => {
                if (player.medium_HS == null){
                    delete playersList[playersList.indexOf(player)]
                }
            })
            playersList.sort((a, b) => b.medium_HS.MHS - a.medium_HS.MHS)
            playersList.forEach(player => {
                if (count == 1){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥇"+"</td><td>"+player.username.name+"</td><td>"+player.medium_HS.MHS+"</td></tr>"
                }else if (count == 2){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥈"+"</td><td>"+player.username.name+"</td><td>"+player.medium_HS.MHS+"</td></tr>"
                }else if (count == 3){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥉"+"</td><td>"+player.username.name+"</td><td>"+player.medium_HS.MHS+"</td></tr>"
                }else{
                    document.getElementById("lbbody").innerHTML += "<tr><td>"+count.toString()+"</td><td>"+player.username.name+"</td><td>"+player.medium_HS.MHS+"</td></tr>"
                }
                
                count++;
            })
        }else if (difficulty == "hard"){
            playersList.forEach(player => {
                if (player.hard_HS == null){
                    delete playersList[playersList.indexOf(player)]
                }
            })
            playersList.sort((a, b) => b.hard_HS.HHS - a.hard_HS.HHS)
            playersList.forEach(player => {
                if (count == 1){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥇"+"</td><td>"+player.username.name+"</td><td>"+player.hard_HS.HHS+"</td></tr>"
                }else if (count == 2){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥈"+"</td><td>"+player.username.name+"</td><td>"+player.hard_HS.HHS+"</td></tr>"
                }else if (count == 3){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥉"+"</td><td>"+player.username.name+"</td><td>"+player.hard_HS.HHS+"</td></tr>"
                }else{
                    document.getElementById("lbbody").innerHTML += "<tr><td>"+count.toString()+"</td><td>"+player.username.name+"</td><td>"+player.hard_HS.HHS+"</td></tr>"
                }
                
                count++;
            })
        }else if (difficulty == "impossible"){
            playersList.forEach(player => {
                if (player.imp_HS == null){
                    delete playersList[playersList.indexOf(player)]
                }
            })
            playersList.sort((a, b) => b.imp_HS.IHS - a.imp_HS.IHS)
            playersList.forEach(player => {
                if (count == 1){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥇"+"</td><td>"+player.username.name+"</td><td>"+player.imp_HS.IHS+"</td></tr>"
                }else if (count == 2){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥈"+"</td><td>"+player.username.name+"</td><td>"+player.imp_HS.IHS+"</td></tr>"
                }else if (count == 3){
                    document.getElementById("lbbody").innerHTML += "<tr><td>🥉"+"</td><td>"+player.username.name+"</td><td>"+player.imp_HS.IHS+"</td></tr>"
                }else{
                    document.getElementById("lbbody").innerHTML += "<tr><td>"+count.toString()+"</td><td>"+player.username.name+"</td><td>"+player.imp_HS.IHS+"</td></tr>"
                }
                
                count++;
            })
        }
    })
}

getAllData();

function getUsername(){
    if (localStorage.getItem("username") == null){
        return null;
    }else{
        name = localStorage.getItem("username");
        document.getElementById("username").style.display = "none";
        document.getElementById("save").style.display = "none";
        document.getElementById("warning").innerText = "Hello " + name + ", REMEMBER, DO NOT HIT THE PLANTS!"
    }
}

getUsername();

function saveUsername(){
    get(child(dbRef, 'PlayerSet')).then((snapshot)=>{
        playersList = [];
        snapshot.forEach(player => {
            playersList.push(player.val())
        });
        try {
            playersList.forEach(player => {
                if (document.getElementById("username").value == player.username.name.toLowerCase()){
                    alert("Username already taken!");
                    document.getElementById("username").value = ""
                    throw new Error ("Break the loop")
                }else{
                    if (document.getElementById("username").value.length > 15){
                        alert("Username is too long!");
                        document.getElementById("username").value = ""
                        throw new Error ("Break the loop")
                    }else{
                        name = document.getElementById("username").value;
                    localStorage.setItem("username", name);
                    document.getElementById("warning").innerText = "Hello " + name + ", REMEMBER, DO NOT HIT THE PLANTS!"
                    document.getElementById("username").style.display = "none";
                    document.getElementById("save").style.display = "none";
                    }
                } 
            })
        }catch {
            return;
        }
        
    })
}

document.getElementById("save").addEventListener("click", ()=>{
    saveUsername();
})

let lbHidden = false;
document.getElementById("difficulty").addEventListener('change', ()=>{
    difficulty = document.getElementById("difficulty").value;
    getAllData();
    setTimeout(()=>{updateLB();}, 500)
})
// MAIN GAME

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
let mute = true;
let moleInterval;
let plantInterval;
let plantInterval2;
let gameTime;
let countdownInterval;
let second = 60;

function sound(){
    if (mute){
        mute = false;
        document.getElementById("sound-button").className = "fa-solid fa-volume-high";
    }else{
        mute = true;
        document.getElementById("sound-button").className = "fa-solid fa-volume-xmark";
    }
}

document.addEventListener('click', ()=>{
    document.body.style.cursor = "url('hammerup.png'), auto";
    setTimeout(()=>{
    document.body.style.cursor = "url('hammerdown.png'), auto";
  }, '100')
})


document.getElementById("mute").addEventListener("click", ()=>{
    sound();
})

function start(){
    score = 0;
    const dropdown = document.getElementById("difficulty");
    difficulty = dropdown.value;
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("start-game").innerHTML = '<span id="hs-span"><h2 id="highScore">High Score: 0</h2></span><h2 id="score">Score: 0</h2><h1 id="countdowntimer">60</h1><div id="board"></div>'
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
    countdownInterval = setInterval(()=>{
        second -= 1;
        document.getElementById("countdowntimer").innerText = second.toString();
    }, 1000)
}

document.getElementById("start").addEventListener("click", ()=>{
    if (name == null || name == ""){
        alert("Set Username!")
    }else{
        start();
        gameTime = setTimeout(()=>{
        if (difficulty == "easy"){
            document.getElementById("board").innerHTML = "TIME UP!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + easy_highScore + "<br/><button id='restart'>RESTART</button>";
        }else if (difficulty == "medium"){
            document.getElementById("board").innerHTML = "TIME UP!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + medium_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        else if (difficulty == "hard"){
            document.getElementById("board").innerHTML = "TIME UP!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + hard_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        else if (difficulty == "impossible"){
            document.getElementById("board").innerHTML = "TIME UP!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + impossible_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        document.getElementById("score").style.opacity = "0";
        document.getElementById("highScore").style.opacity = "0";
        if (mute == false){
        game_over.play();
        }
        gameOver = true;
        clearInterval(moleInterval)
        clearInterval(plantInterval)

        document.getElementById("restart").addEventListener("click", ()=>{
            restart();
        })

        clearInterval(countdownInterval)
    }, 60000)
    }
})

function setGame(){

        document.getElementById('board').addEventListener('click', ()=>{
            document.getElementById('board').style.cursor = "url('hammerup.png'), auto";
            setTimeout(()=>{
            document.getElementById('board').style.cursor = "url('hammerdown.png'), auto";
          }, '100')
        })

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
        moleInterval = setInterval(setMole, 900);
        plantInterval = setInterval(setPlant, 800);
    }else if (difficulty == "medium"){
        moleInterval = setInterval(setMole, 650);
        plantInterval = setInterval(setPlant, 650);
    }else if (difficulty == "hard"){
        setPlant2();
        moleInterval = setInterval(setMole, 600);
        plantInterval = setInterval(setPlant, 600);
        plantInterval2 = setInterval(setPlant2, 610);
    }else if (difficulty == "impossible"){
        setPlant2();
        let randomNumber = Math.floor(Math.random()*301)+200
        moleInterval = setInterval(setMole, randomNumber);
        plantInterval2 = setInterval(setPlant2, 400);
        plantInterval = setInterval(setPlant, 410);
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
                easy_highScore = parseInt(score);
                localStorage.setItem("easyHS", easy_highScore)
                document.getElementById("highScore").innerText = "High Score: " + easy_highScore;
                addData(easy_highScore, medium_highScore, hard_highScore, impossible_highScore)
            }
        }else if (difficulty == "medium"){
            score += 10
            if (medium_highScore < score){
                medium_highScore = parseInt(score);
                localStorage.setItem("mediumHS", medium_highScore)
                document.getElementById("highScore").innerText = "High Score: " + medium_highScore;
                addData(easy_highScore, medium_highScore, hard_highScore, impossible_highScore)
            }
        }
        else if (difficulty == "hard"){
            score += 10
            if (hard_highScore < score){
                hard_highScore = parseInt(score);
                localStorage.setItem("hardHS", hard_highScore)
                document.getElementById("highScore").innerText = "High Score: " + hard_highScore;
                addData(easy_highScore, medium_highScore, hard_highScore, impossible_highScore)
            }
        }
        else if (difficulty == "impossible"){
            score += 15
            if (impossible_highScore < score){
                impossible_highScore = parseInt(score);
                localStorage.setItem("impossibleHS", impossible_highScore)
                document.getElementById("highScore").innerText = "High Score: " + impossible_highScore;
                addData(easy_highScore, medium_highScore, hard_highScore, impossible_highScore)
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
            let randomNumber = Math.floor(Math.random()*301)+200
            moleInterval = setInterval(setMole, randomNumber);
        }
    }
    else if (this == currentPlantTile || this == currentPlantTile2){
        clearTimeout(gameTime)
        if (difficulty == "easy"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + easy_highScore + "<br/><button id='restart'>RESTART</button>";
        }else if (difficulty == "medium"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + medium_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        else if (difficulty == "hard"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + hard_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        else if (difficulty == "impossible"){
            document.getElementById("board").innerHTML = "GAME OVER!<br> &nbsp;Your score was:" + score.toString() + "<br> High Score: " + impossible_highScore + "<br/><button id='restart'>RESTART</button>";
        }
        document.getElementById("score").style.opacity = "0";
        document.getElementById("highScore").style.opacity = "0";
        if (mute == false){
        game_over.play();
        }
        gameOver = true;
        clearInterval(moleInterval)
        clearInterval(plantInterval)

        document.getElementById("restart").addEventListener("click", ()=>{
            restart();
        })

        clearInterval(countdownInterval)
    }
}

function restart(){
    score = 0;
    second = 60;
    gameOver = false;
    difficulty = "easy";
    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("score").style.opacity = "1";
    document.getElementById("highScore").style.opacity = "1";
    document.getElementById("start-game").innerHTML = '<h1 id="title">Whac-A-Mario</h1><h3 style="color: rgb(83, 4, 4);" id="warning">HELLO ' + name + ', DONT HIT THE PLANTS!</h3><h2 id="difficulty-label">Select Difficulty:</h2><select id="difficulty"><option value="easy" selected="selected">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option><option value="impossible" style="background-color: red;">IMPOSSIBLE</option></select><br><br><br><button id="start">START</button><br></br>';

    document.getElementById("start").addEventListener("click", ()=>{
        start();
    })

    getAllData();
    document.getElementById("difficulty").addEventListener('change', ()=>{
        difficulty = document.getElementById("difficulty").value;
        getAllData();
    })
}

//leaderboard

function updateLB(){
    document.getElementById("lbheading").addEventListener('click', ()=>{
        if (lbHidden){
            document.getElementById("lbheading").innerHTML = 'LEADERBOARD <i class="fa-solid fa-sort-down" style="color:green;">'
            lbHidden = false;
            const lb = Array.from(document.getElementById("leaderboard").childNodes[1].children)
            lb.splice(0,1)
            function setupLeaderboard(){
                lb.forEach(row => {
                    row.id = "unhidden";
                })
            }
    
            setupLeaderboard();
        }else{
            document.getElementById("lbheading").innerHTML = 'LEADERBOARD <i class="fa-solid fa-sort-up" style="color:green;">'
            lbHidden = true;
            const lb = Array.from(document.getElementById("leaderboard").childNodes[1].children)
            lb.splice(0,1)
            function setupLeaderboard(){
                lb.forEach(row => {
                    row.id = "hidden";
                })
            }
    
            setupLeaderboard();
        }
    })
}
if (window.innerWidth < 769){
    alert("Play on desktop for better gameplay")
    setTimeout(()=>{
        updateLB();
    }, 1000)
}else{
    setTimeout(()=>{
        updateLB();
    }, 1000)
}