// loop through the rainbow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const ew = ['black', 'grey', 'red'];

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = `<p style='color: ${colorArr[i]}'>${colorArr[i]}</p>`;
        printToDom(color, 'rainbow');
    }
}

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

printRainbow(colors);
printRainbow(ew);

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarke"},
  ];

  const printNames = (namesArray) => {
      for (let i = 0; i < namesArray.length; i ++) {
         const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`;
        printToDom(element, 'people');
      }
    }

printNames(instructors);