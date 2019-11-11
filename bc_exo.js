const submitButton = document.getElementById("button");
console.log(submitButton);

submitButton.addEventListener('click', () => {
	


	let list = [];


	const table = {
		A: '01000001',
	    B: '01000010',
	    C: '01000011',
	    D: '01000100',
	    E: '01000101',
	    F: '01000110',
	    G: '01000111',
	    H: '01001000',
	    I: '01001001',
	    J: '01001010',
	    K: '01001011',
	    L: '01001100',
	    M: '01001101',
	    N: '01001110',
	    O: '01001111',
	    P: '01010000',
	    Q: '01010001',
	    R: '01010010',
	    S: '01010011',
	    T: '01010100',
	    U: '01010101',
	    V: '01010110',
	    W: '01010111',
	    X: '01011000',
	    Y: '01011001',
	    Z: '01011010',
	   ' ': '/',
	};

	console.log(table);

	const message = document.getElementById("textarea");
	console.log(message.value.toUpperCase());
	//const message1 = message.toUpperCase;
	const messageSplit = message.value.toUpperCase().split('');
	console.log(messageSplit);

	//messageSplit.map(letter => table[letter]);


	const result = messageSplit.map(letter => {
		if (table[letter]) {

			return table[letter];
		}
			else {
	        	return letter;
	        }


	}).join(" ");


	console.log(result);
	const output = document.getElementById("output");
	output.insertAdjacentHTML('afterbegin',`<p>${result}</p>`)

});








//(5).toString(2)
