console.log("Hi World 1234")
let nombre = "luis"
let apellido = "machado"
console.log(nombre , apellido)

const userName = document.getElementById ("name").value;
console.log(userName);

const userAge = parseInt (document.getElementById ("age").value)
console.log(userAge);

const ParagraphGreeting = document.getElementById ("hello")
    ParagraphGreeting.innerText = "hello " + userName

const adult = document.getElementById ("adult")
      adult.innerText = "you have " + userAge +  " years old"
console.log(userAge >= 18);

const isOfLegalAge = document.getElementById ("isOfLegalAge");
      // isOfLegalAge.innerText = "are you is of legal age?:" +  (userAge >= 18);
      
      if (userAge < 18) {
        adult.innerText = " You can buy only water and sodas "
       }
      
       else  if (userAge >= 18  && userAge < 60) {
        adult.innerText = " You can buy alcoholic beverages "
       }

       else {
        adult.innerText = " you can buy everything and you have 20% save in all store "
       }