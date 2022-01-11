function scuberGreetingForFeet(feetNumber){
  let result
  if (feetNumber <= 199) {
    result = `This one is on me!`;
    } else if (feetNumber > 2500) {
      result = `No can do.`;
      }

  else if (feetNumber > 2000) {
   result = `I will gladly take your thirty bucks.`;}
     
  
  console.log(result)
  return result;
  }
  
  // Write your code here!

scuberGreetingForFeet(188);

function ternaryCheckCity(city){
    return city==="NYC" ? "Ok, sounds good." : "No go.";
    
    }

function switchOnCharmFromTip(tipAmount){
  if (tipAmount==="generous") {
    return "Thank you so much."
  } else if (tipAmount==='not as generous') {
    return "Thank you."
  } else if (tipAmount==="thanks for everything") {
    return "Bye."
  }
  // Write your code here!
}