function setup() {
    createCanvas(800, 600);

    // let = variable, a container that stores information
    let answer = 42; //Declared a variable
    let fav = 8; // Number data type

    console.log(answer + fav); //print out 49
    console.log(answer - fav);
    console.log(answer * fav);
    console.log(answer / fav);

    let fruit1 = 'apple';
    let fruit2 = 'banana';
  
    console.log(fruit1+" "+fruit2);
    console.log(`I like ${fruit1}s, but not ${fruit2}s`); // add text or create complex sentences with varables
    console.log('cat'[1]); // returnes the letrer indicated in the specified position
    console.log(answer.toString()); // convert numjber to string

    let determine = 42==43;
    console.log(determine); // boolean
    console.log(42==43); //booleanos

    const name = 'Mariana'; // Constant variable
    // name = 'iPhone'; its impossible, shows an error because const is a constant, it cannot be changed

    let huh;
    console.log(huh); // undefined, because it has not been assigned a value yet

    let droid = 'BB-8';
    let fromEarth = null; //null, not applicable
    console.log(fromEarth); 
    
}

function draw() {
    background(220);
}

//console.log() = like a script, shows or writes what we indicate inside the ()

