var hint = document.getElementsByClassName("hint")[0];
var word = document.getElementsByClassName("word")[0];
var used = document.getElementsByClassName("used")[0];
var guess = document.getElementsByClassName("guess")[0];
var reload = document.getElementsByClassName("reload")[0];
var score = document.getElementsByClassName("score")[0];

var currentScore = 3;

function Words(word, hint){
  this.word = word;
  this.hint = hint;
}

var word1 = new Words("hello", "pick up line?")
var word2 = new Words("hat", "trick performed by hockey player scoring 3 goals")
var word3 = new Words("lemon","subpar vehicle")
var word4 = new Words("dog", "may be found in a pound")
var word5 = new Words("waiter", "one taking orders")
var word6 = new Words("prodigy", "someone with a gift")
var word7 = new Words("werewolf", "lycanthrope / loup garou / movie monster")
var word8 = new Words("shaker","has holes in it's head without a lobotomy")
var word9 = new Words ("priest", "has a mass audience?")
var word10 = new Words("moon", "can be full, blue, or made of cheese")

var words=[]
words.push(word1.word, word2.word, word3.word, word4.word, word5.word, word6.word, word7.word, word8.word, word9.word, word10.word)
var hints=[]
hints.push(word1.hint, word2.hint, word3.hint, word4.hint, word5.hint, word6.hint, word7.hint, word8.hint, word9.hint, word10.hint)
var answer = ""
var guessedLetters = []

var randomWord = Math.floor(Math.random()* words.length)
var letterArray = words[randomWord].toLowerCase().split("")
console.log(letterArray)

var dashes = letterArray.map(function(x){return "_"})
console.log(dashes)
hint.innerHTML = hints[randomWord]
word.innerHTML = dashes.join(" ")


var letterWrapper = document.createElement("div")
letterWrapper.style.width = "850px"
letterWrapper.style.position = "absolute"
// letterWrapper.style.border = '1px solid #618685'
// letterWrapper.style.backgroundColor = "whitesmoke"
document.body.appendChild(letterWrapper)

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

for(let i=0; i<alphabet.length;i++){
  var alpha = document.createElement("div")
  alpha.classList.add("letter")
  alpha.innerHTML = alphabet[i]
  letterWrapper.appendChild(alpha)
  var boxes = document.getElementsByClassName("letter")

  boxes[i].addEventListener("click", function(){
    // answer = event.target.innerHTML
    if(guessedLetters.indexOf(boxes[i].innerHTML) !==-1){
      console.log("already guessed")
    }else {


      if(letterArray.includes(boxes[i].innerHTML)){
      for(let j=0; j<letterArray.length;j++){
        if(letterArray[j] === boxes[i].innerHTML){
        dashes.splice(j, 1, boxes[i].innerHTML)


        }
      }
      word.innerHTML = dashes.join(" ")

    }else{
      score.innerHTML = currentScore--;
      if(score.innerHTML == 0){
        window.location.reload(true)
      }
  }
  guessedLetters.push(boxes[i].innerHTML)
  used.innerHTML = guessedLetters


}
  })
}
reload.addEventListener("click", function(){
  window.location.reload(true)
})
