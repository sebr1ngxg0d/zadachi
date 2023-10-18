function xixixixi(mast, karta) {  
    switch (mast) {
      case 1:
        nazvmast = "пики";
        break;
      case 2:
        nazvmast = "трефы";
        break;
      case 3:
        nazvmast = "бубны";
        break;
      case 4:
        nazvmast = "червы";
        break;
      default:
        return "такой масти не сушествует :(";
    }
  
    if (karta >= 6 && karta <= 14) {
      switch (karta) {
        case 6:
            nazvkart = "шестерка";
          break;
        
        case 7:
            nazvkart = "семерка";
          break;
        case 8:
            nazvkart = "восьмерка";
          break;
        case 9:
            nazvkart = "девятка";
          break;
        case 10:
            nazvkart = "десятка";
          break;
        
        case 11:
            nazvkart = "валет";
          break;
        case 12:
            nazvkart = "дама";
          break;
        case 13:
            nazvkart = "король";
          break;
        case 14:
            nazvkart = "туз";
          break;
      }
      return nazvkart + " " + nazvmast;
    } else {
      return "карты с таким номером нет :)";
    }
  }
  
mast = 5;
karta = 8;
xixixixixixixixi = xixixixi(mast, karta);
console.log(xixixixixixixixi);