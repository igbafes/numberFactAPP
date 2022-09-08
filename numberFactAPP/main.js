
let numberInput = document.querySelector("#numberInput");
let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
//ADD EVENT LISTENER TO NUMBERINPUT using AJAX FETCH FIRST THEN NEWEST METHOD FETCH API 
  numberInput.addEventListener("input", getFactFetch);

//   //use fetch ajax
//  function getFactAjax(){
//   //to get value from input box
//   let number = numberInput.value;
//   //console.log(number);//now let make Ajax request to API with this number value
//    let xhr = new XMLHttpRequest();
//    // here is the url we are making  API request to
//    xhr.open('GET','http://numbersapi.com/' + number);
//     xhr.onload = function(){
//      // Note HTTP STATUS 200 DENOTE THAT EVERYTHING IS OKAY
//      if (this.status == 200 && number !== ''){
//       //console.log(this.responseText);
//       fact.style.display = 'block';
//       //to remove the response
//       factText.innerText = this.responseText;
//      }
//     }
//   xhr.send();
// }


//  use the latest FETCH API REQUEST

   function getFactFetch(){
    let number = numberInput.value; 

     fetch('http://numbersapi.com/' + number)
     .then(response => response.text())
     .then(data =>{
      //console.log(data);
       if (number !== ''){
        fact.style.display = 'block';
       //to remove the response and then change it to data
       factText.innerText = data;

       }
     })
     .catch(err => console.log(err));
}
