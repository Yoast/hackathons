function changeEiToIj( text ) {
	const regex = /ei/g;
	const replacement = 'ij';
	return text.replace( regex, replacement );

}

console.log( changeEiToIj('een ei hoort erbij'));
