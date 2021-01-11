let who = [
    'Lukashenko',
    'Karaev',
    'Balaba',
    'Ermoshina',
    'Azarenok'
]
let howLong = [
    'life imprisonment',
    '5 лет',
    '20 лет',
    '15 лет',
    '10 лет'
]
let whereto = [
    'Zhodino',
    'Okrestino',
    'Mogilev',
    'Gaaga',
    'Novinki'
]

function randomInt(length) {
    randNumber = Math.floor(Math.random() * (length));
    return randNumber;
};

let gavel = document.querySelector('.judge_gavel');
gavel.addEventListener('click', function() {
    //let result = '';
    let decision = who[randomInt(who.length)] + "   " + howLong[randomInt(howLong.length)] + "   " + whereto[randomInt(whereto.length)];
    document.getElementById("judgment").innerHTML = decision;

})
document.getElementById("judgment").innerHTML = decision;