function hhhh(mast) {
    switch (mast) {
      case 1:
        return "пики";
      case 2:
        return "трефы";
      case 3:
        return "бубны";
      case 4:
        return "червы";
      default:
        return "неправильное число";
    }
  }
  
mast = 4;
xxx = hhhh(mast);
console.log(xxx);