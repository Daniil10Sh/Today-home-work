const monthes = document.querySelector('.monthes');
console.log (monthes);

const whichmonth = document.querySelector('.whichmonth');
console.log (whichmonth);

 const p = document.querySelector('.show-massedge');
 console.log (p);

 function handlButtonclick() {
    console.log ('hi');
    const year = monthes.value;

    switch(year){ 
        case "1":
        case "2":
            alert('winter');
        case "3":
        case "4":
        case "5":
            alert('Spring');
        case "6":
        case "7":
        case "8":
            alert('Summer');
        case "9":
        case "10":
        case "11":
            alert('Autumn');
        case "12":
            alert('Winter');
         break;
         default:
         alert('it is not a month ')
         break;
    }
}

whichmonth.addEventListener('click', handlButtonclick);

