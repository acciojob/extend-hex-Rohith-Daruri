const extendHex = (shortHex) => {
 let start = shortHex.length-3;
	let iscapital = false;
	let result ="#";
	for(int i=start;i<shortHex.length;i++){
		let val = shortHex.charAt(i);
		if(val.charCodeAt(0)>=65&& val.charCodeAt(0)<=90){
			iscapital = true;
		}
	result = result+shortHex.charAt(i)+shortHex.charAt(i);
	}
	if(iscapital==true){
		return result.toUpperCase();
	}
	return result;
};

Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
