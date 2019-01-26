//1,2, 3, 5, 8, 13, 21, 34, 55, 89 -- do not exceed four million, find the sum of the even-valued terms.

document.write('This example finds the sum of Fibonacci numbers until an X number<br />');

function fibonacci() {
	var num = prompt('Please, enter a number');

	var sum = [];

	sum[0] = 1;
	sum[1] = 2;

	var altLast = 0;

	//Finding and assigning Fibonacci numbers
	for (var x = 0;altLast<=num;x++) {
		sum[x+2] = sum[x+1] + sum[x];
		altLast = sum[x+2];
	}

	var summa = 0;

	//Calculating the sum of Fibonacci numbers until !num!
	for (var x = 0;x<sum.length-1;x++) {
		 summa = summa + sum[x];
	}

	document.write('The sum of Fibonacci numbers until - ' + num + ' is ===> ' + summa + '!');

	document.write('<br />These are Fibonacci numbers until - ' + num + '! Please, consider them: <br />');

	for (var x = 0;x<sum.length-1;x++) {
		document.write('*!!* - ' + sum[x] + '<br />');
	}

	// And now sum of only even numbers!

	document.write('---------------------------- EVEN NUMBERS ONLY ----------------------------');
    
	var even = 0;

	for (var x = 0;x<sum.length-1;x++) {
		if (sum[x]%2===0) {
			even = even + sum[x];
		} else {
			continue;
		}
	}

	document.write('<br />Sum of even Fibonacci numbers of - ' + num + ' is ====>     ' + even + '!!!<br />Thanks for attention!<br />');
}

fibonacci();

