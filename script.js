const word_div = document.getElementById("word-box");
guessed = false;

let words = ["review","passion","weight","passion","telephone","daughter","crosswalk"];

random = getRandomInt(0, 6)
obscured_word = words[random].split('');
orginal_word = words[random].split('');

for (var i = 0; i < getRandomInt(3, obscured_word.length - 2); i++) {
    obscured_word[getRandomInt(0, obscured_word.length)] = "•";
}

word_div.innerHTML = obscured_word.join('');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function arrayEquals(a, b) {
    return a.every((val, index) => val === b[index]);
}

function Check() {

    if (guessed == true){
        window.location.reload(true);
    }

    is_here = false;
    let user_letter = document.getElementById("user-letter");
    for (var i = 0; i < obscured_word.length; i++) {
        if (obscured_word[i] == "•") {
            if (orginal_word[i] == user_letter.value) {
                obscured_word[i] = orginal_word[i];
                is_here = true;
            }
        }
    }

    if (arrayEquals(orginal_word, obscured_word)) {
        guessed = true;
        word_div.innerHTML = "You guessed it!";
    } 

    if (guessed == false){
        if (is_here == false){ 
            $( "#word-box" ).effect( "shake" );
        } else {
            $( "#word-box" ).toggle( "slide" );
            $( "#word-box" ).toggle( "slide" );
        }
        word_div.innerHTML = obscured_word.join('');
    } 

    user_letter.value = "";
}


