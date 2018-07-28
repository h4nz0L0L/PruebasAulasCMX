function papelTapiz(length, width, height) {
    
  let rollo = (10 * .52);
  let newAlto = (height * .15) + height; //margen del 15%
  let areaACubrir = 2 *((length*newAlto) + (width*newAlto));
  let r = Math.ceil(areaACubrir/rollo);
  let numero = ["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    
  if (r > 0 && r < 21) {
    return numero[r-1]; 
  } else if (r === 0) { 
      return "cero";
    } else {
      return r;
    }
  }
  console.log(papelTapiz(2, 5, 5))
  