// insert function saves the website the user inputs
function submit() {
	var webn;
	var by;
	var mi;
	var avalue = document.getElementById('webname').value;
	webn = avalue;
	var bvalue = document.getElementById('BirthYear').value
	by = bvalue;
	var cvalue = document.getElementById('MiddleInitial').value
	mi = cvalue;


	//num is place holder for a
	//if you want to know if a is even or odd
	function isEven(num) {
		if (num % 2 == 0)
			return true;
		else
			return false;
	}

	function b() {
		var last_2 = webn.slice(-2);
		var middle = webn[Math.floor((webn.length - 1) / 2)];
		var first_2 = webn.substring(0, 2);
		var Bmi = mi.toUpperCase();
		var result;
		//reverses birth year input
		function reverseBy() {
			by = by + "";
			return by.split("").reverse().join("");
		}
		//changes middle letter to special character
		if (middle == "a") {
			var lett = "!";
		}
		if (middle == "b") {
			lett = '@';
		}
		if (middle == "c") {
			var lett = "#";
		}
		if (middle == "d") {
			var lett = '$';
		}
		if (middle == "e") {
			var lett = "%";
		}
		if (middle == "f") {
			var lett = '^';
		}
		if (middle == "g") {
			var lett = "&";
		}
		if (middle == "h") {
			lett = '*';
		}
		if (middle == "i") {
			var lett = "(";
		}
		if (middle == "j") {
			var lett = ')';
		}
		if (middle == "k") {
			var lett = "!";
		}
		if (middle == "l") {
			var lett = '@';
		}
		if (middle == "m") {
			var lett = "#";
		}
		if (middle == "n") {
			lett = '$';
		}
		if (middle == "o") {
			var lett = "%";
		}
		if (middle == "p") {
			var lett = '^';
		}
		if (middle == "q") {
			var lett = "&";
		}
		if (middle == "r") {
			var lett = '*';
		}
		if (middle == "s") {
			var lett = "(";
		}
		if (middle == "t") {
			lett = ')';
		}
		if (middle == "u") {
			var lett = "!";
		}
		if (middle == "v") {
			var lett = '@';
		}
		if (middle == "w") {
			var lett = "#";
		}
		if (middle == "x") {
			var lett = '$';
		}
		if (middle == "y") {
			var lett = "%";
		}
		if (middle == "z") {
			var lett = '^';
		}
		//sets the password on screen
		function password() {
			if (webn.length % 2 == 0) {
				console.log(lett + first_2 + reverseBy(by) + Bmi); //if even
				result = lett + first_2 + reverseBy(by) + Bmi;
			}
			else {
				console.log(lett + last_2 + reverseBy(by) + Bmi);  //if odd	
				result = lett + last_2 + reverseBy(by) + Bmi;
			}
		}
		password();
		document.getElementById('password').innerHTML = result;
	}
	b();
}