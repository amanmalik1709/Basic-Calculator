const display = document.getElementById("dis");
function appendtoeq(input){
    display.value+=input;
}
function clr(){
    display.value='';
}
function cal(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        const operators = ['+', '-', '*', '/'];
            while (operators.includes(display.value.slice(-1))) {
                display.value = display.value.slice(0, -1);
            }
            display.value=eval(display.value);
    }
    

}