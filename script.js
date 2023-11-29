function fillcut(str = String, len = Number) {
  let finalString = '';

  if (str.length > len) finalString = str.slice(0, len);
  else if (str.length < len) {
    const missingLeght = len - str.length;
    finalString = addDots(missingLeght) + str;
  } 
  else finalString = str;

  return finalString;
}

function addDots(dotsQuantity){
  let dots = '';
  for (let i = 0; i < dotsQuantity; i++) dots = dots + '.';
  return dots;
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
