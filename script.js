const numberInput = document.getElementById("number");
 const convertBtn = document.getElementById("convert-btn");
const outPut = document.getElementById("output");
    const rNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];


     const checkNumeral = () => {
      let numberVal = numberInput.value
     if(!numberVal){
         outPut.innerText="Please enter a valid number";
     }
     else if(numberVal < 0){
             outPut.innerText="Please enter a number greater than or equal to 1"
         
     }
     else if (numberVal >= 4000){
         outPut.innerText="Please enter a number less than or equal to 3999"
         
     }
     else {
         let result="";

         for (const [numeral, value] of rNumerals){
             while (value <= numberVal){
                 result += numeral;
                 numberVal -= value;
                 
     
          }
         }
  outPut.innerText = result;
     }
     
     }
