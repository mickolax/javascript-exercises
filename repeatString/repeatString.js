const repeatString = function(newString,repeats) {

    let resultString = '';

    for(let i = 0; i < repeats; i++) {
        if(i >= 0) {
        resultString = resultString + newString;
        } else {
            resultString = 'ERROR';
        }
    }

    return resultString;
}

module.exports = repeatString
