const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
  '**********': ' ',
}
  
function cutZero(str) {
  for (let char of str) {
    if (str.startsWith('0')) {
      str = str.slice(1);
    }
    else return str;
  }
}
  
function makeDashDots(str) {
  const arrStr = str.match(/[\s\S]{2}/g);
  const elDot = '.';
  const elDash = '-';
  const arrDd = [];

  arrStr.forEach(el => {
    if (el === '10') {
      arrDd.push(elDot);
    }
    else if (el === '11') {
      arrDd.push(elDash);
    }
    else if (el === '**') {
      arrDd.push('**');
    }
  });
  return arrDd.join('');
}
  
function decode(expr) {
  const arr = expr.match(/[\s\S]{10}/g);
  const arrWz = arr.map((el) => cutZero(el));
  const arrDd = arrWz.map((el) => makeDashDots(el))
  const arrL = [];
    
  arrDd.forEach((el) => {
    for (let key in MORSE_TABLE) {
      if (el === key) {
        arrL.push(MORSE_TABLE[key]);
      }
    }  
  });
  const result = arrL.join('');
  return result;
}

module.exports = {
    decode
}