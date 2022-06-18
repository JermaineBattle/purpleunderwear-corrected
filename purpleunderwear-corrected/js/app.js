const myName = "Jermaine";
let spanName = document.querySelector("span.name");
spanName.innerHTML = myName;

function appendToTasks(){
    let ol = document.getElementById("taskList");
    let input = document.getElementById("formInput");
    let li = document.createElement("li");
    let inputValue = input.value;
    let lowerCase = inputValue.toString().toLowerCase();
    //[IF inputValue[0] is a vowel, reverse inputValue]
    // Attempted to loop through a vowels array during developer interview
    // Should have used regex to search for vowels at index [0]
    // See below
    if(lowerCase.search(/[aeiou]/gi) === 0){
        li.innerText = inputValue.split('').reverse().join('');
        } else {
            li.innerText = inputValue; 
        }
        ol.appendChild(li);
        input.value ="";
};

  


