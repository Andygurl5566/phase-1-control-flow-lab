function scuberGreetingForFeet(value){
  // Write your code here!
  if (value <= 199){
    return "This one is on me!"

  } //else if (value < 2500 >= 2000 ){
    //return 'I will gladly take your thirty bucks.'

    else if (value < 2500 & value >= 2000 ){
      return 'I will gladly take your thirty bucks.'

  } else if (value > 2500) {
    return "No can do."
  }
  
}



function ternaryCheckCity(city){
  if(city === "NYC") {
    return 'Ok, sounds good.'
  }
  else if( city !== "NYC"){
    return "No go."
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
     case "generous":
      return "Thank you so much." 
      break
      case "not as generous":
      return "Thank you."
      break
      default:
      return "Bye."
  }

  //https://www.w3schools.com/js/js_switch.asp
  // Write your code here!
}