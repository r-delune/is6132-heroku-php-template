
                                        /* Javascript Helpers */

// how to add an external JS file
/* <script type="text/javascript" src="script.js"></script> */

/* Variables */

    // declare a variable
    let name;
    // declare and assign a variable, note the use of camel case
    let newName = 'john';

    // adding variables. many familiar operators can be used.
    let num1 = 0
    let num2 = 1
    let num3 = num1 + num2

/* Methods */

    // create a method / function (we will talk about these more next week)
    function exampleMethod () {
    let name = "john"
    }
    // a method including arguments
    function exampleMethod (arg1, arg2) {
        let name = arg1
    }
    // this will create an alert
    function showAlert(){
        alert("This is an alert box")
    }

/* Strings */

    // assign a string to a variable. Note the escape character for the apostrophe
    let exampleString = "Brian\'s example string"
    // assign a string to a variable, including quotes. Note we are wrapping the words in similar quote types
    let exampleString2 = "Brian\'s 'example' string"
    // assign a string to a variable, including quotes. Note we are wrapping the words in similar quote types
    let exampleString3 = "Brian\'s 'example' string"
    // adding strings
    let longString = "This is a very long string which needs " +
                    "to wrap across multiple lines because " +
                    "otherwise my code is unreadable."
    // adding strings example 2
    let longString = "This is a very long string which needs \
    to wrap across multiple lines because \
    otherwise my code is unreadable."


/* Logging */

    // How to log to the console
    console.log('This is an example console log: ');
    // How to log a variable to the console
    console.log('This is an example console log: ', newName);
    // add a string to the console
    console.log('This is an example string printed to the console: ' +  newName + "!");


/* DOM Selectors/Manipulators */

    // this will select the id with the name 'demo' and insert text
    function insert_text(){
        document.getElementById("demo").innerHTML = "Hello World";
    }


/* Operators - Examples */

    testvar = 'Hellp'

    // find the type of this variable (typeof)
    if (typeof(testvar) == "String"){
        console.log('Passed condition...')
    }

    // check is this an instance of an existng object (instanceof)
    if (instance(testvar) == NewClass){
        console.log('Passed condition...')
    }   

    //logical and (&&)
    if ((testvar == 5) && (2 == 5)){
        console.log('Passed condition (though the above is not true)...')
    }  
    
    // logical or (||)
    if (testvar == 5 || (2 == 5) && (testvar == 5)){
        console.log('Passed condition (though the above is not true)...')
    } else {
        console.log('Passed condition...')
    }
    
    
    if (time !== 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    // for loop based on array length, print out all members of the array
    for (let i = 0; i < cars.length; i++) {
        console.log('checking item ' + i)
        console.log(cars[i])
    }


/* Data Types - Examples */

    // Boolean - True or false, binary data
    var testVar = True

    // Number - Works for all number values with or without a decimal point.
    var testVar = 2

    // BigInt - Created for operating with very large integers.
    var testVar = 9007199254740991

    // String - Represents a series of one or more characters
    var testVar = "9007199254740991"

    // Array - Used to group similar values in list form
    var test_var = [9007199254740991, 3, "3"]

    // Object - For more complex data structures
    var person = {firstName:"John", lastName:"Doe", age:46};


/* Arrays */

    // Creating an array from variables
    var array_name = [item1, item2]; 

    // specify contents of array
    var chocolate = [ "Mars", "Twix" , "KitKat"];

    // You access an array element by referring to the index number.   
    var bar = chocolate[0];

    // You can also change the value in an array using the index
    chocolate[1] = "Twirl";

    // adds a new element (Fredo) to chocolate
    chocolate.push("Fredo"); 

    // There are in-built properties you can use to work with arrays:
    var x = chocolate.length;    // The length property returns the number of elements
    var y = chocolate.sort();    // The sort() method sorts arrays


/* Objects */

    // create class
    function Student(id, firstName, lastName, course) { 
        this.id = id; 
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
    } 
        
    // create two new student objects
    let scholar1 = new Student(58458, 'Bob', "Dylan", "DDDB"); 
    let scholar2 = new Student(78547, 'Joan', 'Rivers', "DDDB"); 

    // Objects use names properties
    var person = {firstName:"John", lastName:"Doe", age:46};

    // get item from object
    var objectItem = person.firstName


/* Other JS */

    // using Javascript to print out HTML
    text = "<ul>"; 
    for (i = 0; i < cLen; i++) {
        text += "<li>" + chocolate[i] + "</li>";  
    }
    text += "</ul>";

    // chooses random number between 0 and length quotes array
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
      
    // include external Twitter API
    <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/theworldoffunny?ref_src=twsrc%5Etfw">
    Tweets by theworldoffunny</a> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


    // hint
    var answer = myFunction(firstNumber, SecondNumber)