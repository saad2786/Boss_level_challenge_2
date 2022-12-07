var userClickedPattern = []
var gamePattern = []
var buttonColor = ['red', 'green', 'blue', 'yellow']
var randomChosenColor
var keyPressed = false
var level = 0
var currentLevel =0
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4)
  playSound(buttonColor[randomNumber])
  randomChosenColor = buttonColor[randomNumber]
  gamePattern.push(randomChosenColor)
  level++
 animatePress('.' + randomChosenColor)
  userClickedPattern = []
  $('h1').text('Level ' + level)
}
function animatePress(currentColor) {
  $(currentColor).addClass('pressed')
  setTimeout(function () {
    $(currentColor).removeClass('pressed')
  }, 100)
}
function playSound(name) {
  var chosenButton = name
  var a = new Audio('sounds/' + chosenButton + '.mp3')
  a.play()
}
function handler() {
  var userChosenColor
  $('div').click(function () {
    userChosenColor = $(this).attr('class')
    userClickedPattern.push(userChosenColor)
  })
}

$(document).on('keypress', function () {
  if (keyPressed === false) {
    nextSequence()
    keyPressed = true
  }
})
function gameOver()
{
  level = 0
  gamePattern = []
  keyPressed = false
  userClickedPattern = []
  currentLevel = 0
  $('body').addClass('game-over')
  $("h1").text("Game Over, Enter Any key to Restart")
  setTimeout(function () {
    $('body').removeClass('game-over')
  }, 200)
   console.log("hi")
  var a = new Audio('sounds/wrong.mp3')
  a.play()
}
handler()
$('div').click(function () {
  playSound($(this).attr('class'))
  $(this).fadeOut(100).fadeIn(100)
  animatePress(this)
  

  checkAnswer(currentLevel++)
  if(currentLevel===level && keyPressed==true)
  {
    currentLevel=0
    setTimeout(function () {
      nextSequence()
    }, 1000)  }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
    gameOver()
      return
  }
  
    
  }
  
