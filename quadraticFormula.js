//(-b+-√b²-4ac)/2a//
//inputs: a, b, c//
//outputs: x1, x2//
//To run a file in your computer:
//STEP 1 - you have to first navigate to the folder your file is in. Do this in the command prompt with "cd" and then the path to the folder.//
//STEP 2 - do node space file name//
//alert goes to the screen. console goes to the console).//


function quadraticFormula() {
  let a = parseInt(document.getElementById('quadraticID').elements['a-Value'].value);
  let b = parseInt(document.getElementById('quadraticID').elements['b-Value'].value);
  let c = parseInt(document.getElementById('quadraticID').elements['c-Value'].value);
  let x1 = ((-1 * b) + (b * b - (4 * a * c)) ** 0.5)/ (2 * a);
  let x2 = ((-1 *b) - (b * b - (4 * a * c)) ** 0.5)/ (2 * a);
  console.log('Your answers are: ' + x1 + ' & ' + x2)
  //alert('Your answers are: ' + x1 + ' & ' + x2)//
  document.getElementById('answer').innerHTML = 'Your answers are: ' + x1 + ' & ' + x2
  return [x1, x2]
}


// Using the javascript function directly (NOT FROM WEBPAGE).
// This function doesn't take values from the website
function quadraticFormulaOriginal(a,b,c) {
  let x1 = ((-1 * b) + (b * b - (4 * a * c)) ** 0.5)/ (2 * a);
  let x2 = ((-1 *b) - (b * b - (4 * a * c)) ** 0.5)/ (2 * a);
  return [x1, x2]
}

//console.log('Your answers are: ' + quadraticFormulaOriginal(3, 4, 5));//
