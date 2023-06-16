// complete the given function

function palindrome(str){
	str = str.replace(" ", "");
	let l = 0, r = str.length-1;
	while(l < r){
		if(str[l].toLowerCase() !== str[r].toLowerCase()) return false;
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
