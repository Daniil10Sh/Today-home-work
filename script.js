const monthes = document.querySelector('.monthes');
console.log (monthes);

const whichmonth = document.querySelector('.whichmonth');
console.log (whichmonth);

 const p = document.querySelector('.show-massedge');
 console.log (p);

 function handlButtonclick{} (
    console.log ('hi');
    const year = monthes.value;

    switch(year){ 
        case "january":
        case "february":
            alert('winter');
        case "march":
        case "april":
        case "march":
            alert('Spring');
        case "june":
        case "juli":
        case "august":
            alert('Summer');
        case "september":
        case "october":
        case "november":
            alert('Autumn');
        case "december":
            alert('Winter');
         break;
         default:
         alert('it is not a month ')
         break;
    }
)

whichmonth.addEventListener('click', handlButtonclick);

