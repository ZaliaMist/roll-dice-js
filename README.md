# roll-dice-js
When rolling two six-sided dice, each die will show a number between 1 and 6. When the numbers on the two dice are added together, they will sum to a number between 2 and 12.   Build an app which rolls a pair of dice 1000 times! Recording how frequently each number, 2 to 12, shows up.

____________
Sources:

Kenzie Academy Assignment with our own modifications

https://www.w3schools.com/JS/js_random.asp

https://stackoverflow.com/questions/38546227/how-to-sum-two-different-functions-in-javascript

Thank you to Jacob who helped with some of the JS logic and most of the CSS
____________

Step One

First, You will need to figure out how to generate random numbers in JavaScript, use your Google-Fu!

Create a function called `rollDie()` which returns a random number 1-6.  Then make a function which rolls two dice and adds together the sum.


Step Two

Simulate rolling 1000 pairs of dice!
For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts.

Initialize an array named `count` by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array.

For example if the variable rollOfDice holds the current roll, you could increment the count with code like:

    count[rollOfDice] = count[rollOfDice] + 1;


Step Three

After the 1000 rolls are finished, show the final counts in an HTML page.

Here's an example of the kind of output your program might produce:

    2: 32  
    3: 50  
    4: 76  
    5: 120  
    6: 151  
    7: 161  
    8: 125  
    9: 121  
    10: 89  
    11: 52  
    12: 23

Output formatting
In addition to the numeric output described above, display the final counts as a bar graph (using a DIV for each bar, and varying the dimensions in proportion with the counts).

How can you make the width of a div be proportional to a number? 

Take a look at this bar chart example.  You can use percentage widths to create bars!  
You’ll just need to convert your numbers into percentages, and then use JavaScript to add the width as a style.

But what is 100%?  
(Hint: 100% isn’t necessarily 1000… That would make all of your bars really tiny.  You probably want the biggest numeric count to be 100%, and everything else is relative to that.  Then your biggest bar will be 100%)