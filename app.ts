const btn = document.querySelector('button');
const input = document.querySelector('input');
const password = document.querySelector('h3');

const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword(length: number) {
    let result = '';
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    password!.innerHTML = result;
}


btn?.addEventListener( 'click', () =>{
    if(input!.value !== null){
        generatePassword(parseInt(input!.value))
    }else{
        alert( "Please enter a valid number" );
    }
})



