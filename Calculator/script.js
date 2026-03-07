let display= document.getElementById('one');
let button= document.querySelectorAll('input[type="button"]');

button.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = this.value;

        if (value === "AC") {
            display.value = "";
        } 
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } 
        
        else {
            display.value += value;
        }
    });
});

display.addEventListener("keydown",
    function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            try{
                display.value= eval(display.value);
            }catch{
                display.value="Error"
            }
        }
    });