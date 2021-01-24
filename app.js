
 





// q1
// var inp = prompt('Enter any word: ')
//     var cap = inp.toUpperCase()
//     document.write('User Input: ' + inp + '<br>' + 'Upper case: ' + cap)

// // q2
//   var inp = prompt('Enter any word: ')
//     var cap = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase()
//     document.write('User Input: ' + inp + '<br>' + 'Title Case: ' + cap) 

// q3
// var mob = prompt('Enter your favorite mobile phone model: ')
// document.write('Your favorite phone is: ' + mob+'<br>'+ 'Length of string: '+ mob.length)


// q4

// var a = 'Pakistani';
// for (var i = 0; i <a.length; i++) {
//     if (a.slice(i, i+1) === "n") {
//          document.write("String: " + a + "<br>" + "Index of 'n': " + i); 
//            break;
//      }
//   }

// q5
//     var fname = prompt('Enter your first name: ')
// var lname = prompt('Enter your second name: ')
// var fullname = fname.concat(lname) 
// alert('Hi, ' + fullname)
// }


// q6

// var text = 'Hyderabad';
// var rep = text.replace('Hyder', 'Islam');
// document.write('City: ' + text + '<br>' + 'After Replacement: ' + rep );
// }

// q7

// var str = 'Pakistani';
// var ind = 3;
// var st = str.charAt(3)
//   document.write("String: " + str + "<br>" + " Character at index 3: " + st);  
// }

// q8

// var message = 'Ali and Sami are best friends. They play cricket and football together.'
// for (var i = 0; i < message.length; i++) {
//      if (message.slice(i, i +3) === 'and') {
//      message = message.slice(0, i) + "&" + message.slice(i+3);
//      }
//      }
// document.write(message);

// q9

// var userInput=+prompt("Enter the number");
// document.write("<br>The number is "+userInput);
// var roundedValue=Math.round(userInput);
// document.write("<br>The rounded  number is "+roundedValue);
// var floorValue=Math.floor(userInput);
// document.write("<br>The floor number is "+floorValue);
// var ceilValue=Math.ceil(userInput);
// document.write("<br>The Ceil of the number is "+ceilValue);

// q10

// var userInput=+prompt("Enter the number");
// document.write("<br>The number is "+userInput);
// var roundedValue=Math.round(userInput);
// document.write("<br>The rounded  number is "+roundedValue);
// var floorValue=Math.floor(userInput);
// document.write("<br>The floor number is "+floorValue);
// var ceilValue=Math.ceil(userInput);
// document.write("<br>The Ceil of the number is "+ceilValue);

// q11


// var randValue=Math.floor(Math.random() * 6) + 1;
// document.write("<br>The value of the dice is"+randValue);
// }

// q12


// var randomValue=Math.floor(Math.random()*2)+1;
// if(randomValue===1)
// {
//     document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Tails");

// }
// else if(randomValue===2)
// {
//     document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Heads");

// }


// q13

// var userInput=+prompt("Enter the secret number");
// var random=Math.floor(Math.random() * 10) + 1;
// if(userInput===random)
// {
//     alert("Congratulations!You are Right");
// }
// else{
//     alert("Try Again!");
// }

// q14



// var userInput=prompt("Enter your weight!");
// var parsedValue=parseInt(userInput);
// document.write("<br>The weight of the user is "+parsedValue+" Kilograms");

// q15

// var val = '472';
// var num = parseInt(val)
// var type_val = typeof(val)
// var type_num = typeof(num)
// document.write('Value: ' + val + '<br>' + 'Type: ' + type_val + '<br>' + 'Value: ' + num + '<br>' + 'Type: ' + type_num)




// q16


// var n = 35.36
// var r = n.toString()
// var t = r.replace('.', '')
// document.write('Number: ' + n + '<br>' + 'String: ' + t )
