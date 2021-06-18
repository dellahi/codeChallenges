/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// alphabet table
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// varriables declaration
var flag = 0
var alphabetEnAscii =[]
var motEnAscii = []
var rowTab = []

let completeLine = "";
let line = "";

// read from stdin
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
// transform input text into array
const tabT = T.split('')

for (let i = 0; i < H; i++) {
    rowTab.push(readline())
}
// alphabet ASCCI representation
alphabetEnAscii = rowTab.map( e => e.split(''));

// Write an answer using console.log()

    if(0 < L < 30 && 0 < H < 30 && 0 < tabT.length < 200) {
        tabT.map(e1 => {
            flag = 0
            // search for element in alphabet
            alphabet.map(e2 => {
                if(e1.toLowerCase() == e2.toLowerCase()) {
                    flag = 1
                    let k = alphabet.indexOf(e2)
                    let a = k*L
                    let b = (k+1)*L
                    // alphabet letter representation in ASCII
                    let lettreEnAscii = alphabetEnAscii.map( e3 => e3.slice(a, b) )
                    // add it to our inputtext representation in ASCII
                    motEnAscii.push(lettreEnAscii);
                }
            }  
            )
            if (flag == 0) {
                // if the element is not an alphabet letter
                let c = 26*L
                let d = 27*L
                // ? representation in ASCII
                let lettreEnAscii = alphabetEnAscii.map( e3 => e3.slice(c, d) )
                // add it to our inputtext representation in ASCII
                motEnAscii.push(lettreEnAscii);
            }
        }
        )
    }
    else completeLine = "Conditions non vérifiées"
// To debug: console.error('Debug messages...');

for (let i=0 ; i< H ; i++) {
    motEnAscii.map( lettre => {
        line = ""
        lettre.map( element => {
            if (lettre.indexOf(element) == i ) {
                element.map( char => {
                    line += char
                })
            }
        }
        )

    completeLine += line
    }
    )
    // print the ASCII  representation line by line
    console.log(completeLine);
        completeLine = ""
    
}