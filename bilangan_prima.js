function prima(bilangan) {
    if (bilangan <= 1) return false;
    if (bilangan === 2) return true;
    else {
      for (let i = 2; i < bilangan; i++) {
        if (bilangan % i === 0) return false;
      }
      return true;
    }
  }

function getPrima(bilangan2) {
    const arr = [];
    let i = 2
  
    while (arr.length < bilangan2) {
      if (prima(i)) {
        arr.push(i)
      }
      i++
    }
    return arr;
  }

console.log(getPrima(5));