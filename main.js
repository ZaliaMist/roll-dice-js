// Create a function called `rollDie()` which returns a 
// random number 1 - 6.  


function rollDie() {
    let result = Math.floor( Math.random() * 6 ) +1
    return result
}

// Then make a function which rolls 
// two dice and adds together the sum.

function add2dice() {
    let result = Number(rollDie() ) + Number(rollDie() )
    return result
}

// Simulate rolling 1000 pairs of dice!
// For each possible roll( 2 through 12 ), count its frequency. 
// You should use an array to keep track of these counts.

let count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function roll1000Pairs() {
    let i = 0;
    while(i <= 1000) {
        add2dice()
        i++
        let rollOfDice = add2dice()
        count[rollOfDice - 2] = count[rollOfDice - 2] + 1;
    }

    for ( let i = 0; i < count.length; i++ ) {
        let div = document.createElement( "div" )
        div.textContent = "A pair of dice equalling " + i + 2 + " is rolled " + count[ i ] + " times!"
        div.textContent = i + 2 + " is rolled " + count[ i ] + " times! "
        
        let placeHolder = count[ i ] / 500 * 100 
        div.textContent += (placeHolder.toFixed(2) + "%")

        div.style.width = count[ i ] * 4.8 + "px" 
        div.style.backgroundColor = "rgb(32, 235, 211)"
        div.style.border = "solid 2px black"
        div.style.margin = "10px"
        document.body.appendChild( div )
    }

}
roll1000Pairs()
