function fillcut(str, len) {
  let finalString = '';

  if (str.length > len) 
  {
    finalString = str.slice(0, len)
  }
  else if (str.length < len) 
  {
    finalString = str.padStart(len, '.')
  }
  else {finalString = str}

  return finalString;
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
