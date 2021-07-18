
/* program that prints the numbers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number 
and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz". */

for(var i = 1; i <= 100; i++) {
    var output = ""

    if(i % 3 == 0) { output += "Fizz" }
    if(i % 5 == 0) { output += "Buzz" }

    if(output == "") { output = i; }

    console.log(output)


    //IF ELSE Method
   /* if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }*/
}