const display = document.getElementById('display');
function addKaro(value){
display.value+=value;
}
function cleanKaro(value){
    display.value=' ';
}
function delKaro(){
    display.value=display.value.slice(0,-1);
}
function calcuKaro(){
    try {
        const result = eval(document.getElementById('display').value); // Use eval carefully!
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }

    }
