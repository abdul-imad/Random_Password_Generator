function myFunction() {
	const charArr = "VQWERTYUIOPASDFGHJKLZXCVBNM";
	const lowerChar = "qwertyuioplkjhgfdsazxcvbnm";
	const numberChar = "1234567890";
	const symbolsChar = ",.?/';@#$%^&*!~";
	let digits = document.getElementById("myText").value;
	let lowerCase, symbols, numbers;
	if (digits === "") {
		document.getElementById("password").innerHTML =
			"Invalid password length!!";
	}else if(digits < 4 || digits > 16){
        document.getElementById("password").innerHTML =
			"Length out of range(valid range is 4 - 16)!!";
    }
     else {
		// lowerCase
		if (document.getElementById("lower").checked) {
			lowerCase = true;
		} else {
			lowerCase = false;
		}
		// symbols
		if (document.getElementById("symbol").checked) {
			symbols = true;
		} else {
			symbols = false;
		}
		// numbers
		if (document.getElementById("number").checked) {
			numbers = true;
		} else {
			numbers = false;
		}

		if (!lowerCase && !symbols && !numbers) {
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += charArr.charAt(Math.floor(Math.random() * charArr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (!lowerCase && !symbols && numbers) {
			let arr = numberChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (!lowerCase && symbols && !numbers) {
			let arr = symbolsChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (!lowerCase && symbols && numbers) {
			let arr = numberChar + charArr + symbolsChar;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (lowerCase && !symbols && !numbers) {
			let arr = lowerChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (lowerCase && !symbols && numbers) {
			let arr = lowerChar + numberChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (lowerCase && symbols && !numbers) {
			let arr = lowerChar + symbolsChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		} else if (lowerCase && symbols && numbers) {
			let arr = lowerChar + symbolsChar + numberChar + charArr;
			let result = "";
			for (let i = 0; i < digits; i++) {
				result += arr.charAt(Math.floor(Math.random() * arr.length));
			}
			document.getElementById("password").innerHTML = result;
		}
	}
}
