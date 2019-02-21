// 4.3 Вводим число(0-999), получаем строку с прописью числа.
function getNumberAsString(number) {
    var stringNumber = number + '';
    var stringNumberArray = stringNumber.split('');
    var result;
    
    var oneDigit = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    var twoDigit = {
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirty', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
        80: 'eighty', 90: 'ninety'
    }

    var twoLastDigits = stringNumberArray[stringNumberArray.length-2] + stringNumberArray[stringNumberArray.length-1];

    if (number >=0 && number < 10) {
        result = oneDigit[number];
    } else if (number >= 10 && number <= 20) {
        result = twoDigit[number];
    } else if (number > 20 && number < 100) {
        var secondPart = stringNumberArray[1];
        var firstPart = number - secondPart;
        result = twoDigit[firstPart] + ' ' + oneDigit[secondPart];
    } else if (number == 100) {
        result = oneDigit[1] + ' hundred';
    } else if (number > 100 && number < 1000) {        
        var firstPart = oneDigit[stringNumberArray[0]] + ' hundred';
        var secondPart;

        if (parseInt(twoLastDigits) <= 9) {
            secondPart = oneDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + secondPart;
        } else if (parseInt(twoLastDigits) > 9 && parseInt(twoLastDigits) <= 19) {
            secondPart = twoDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + secondPart;
        } else if (parseInt(twoLastDigits) > 19 && parseInt(twoLastDigits) < 100 && stringNumberArray[2] == 0) {
            secondPart = twoDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + secondPart;
        } else if (parseInt(twoLastDigits) > 19 && parseInt(twoLastDigits) < 100) {
            var tens = parseInt(twoLastDigits - stringNumberArray[2]);
            var units = stringNumberArray[2];
            result = firstPart + ' ' + twoDigit[tens] + ' ' + oneDigit[units];
        }
    } else if (number == 1000) {
        result = oneDigit[1] + ' thousand';
    } else if (number > 1000) {
        var firstPart = oneDigit[stringNumberArray[0]] + ' thousand';
        var secondPart = oneDigit[stringNumberArray[1]] + ' hundred';
        var thirdPart;

        if (parseInt(twoLastDigits) <=9 && stringNumberArray[1] == 0) {
            thirdPart = oneDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + thirdPart;
        } else if (parseInt(twoLastDigits) > 9 && parseInt(twoLastDigits) <= 19) {
            thirdPart = twoDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + thirdPart;
        } else if (parseInt(twoLastDigits) > 19 && parseInt(twoLastDigits) < 100 && stringNumberArray[3] == 0) {
            thirdPart = twoDigit[parseInt(twoLastDigits)];
            result = firstPart + ' ' + thirdPart;
        } else if (parseInt(twoLastDigits) > 19 && parseInt(twoLastDigits) < 100 && stringNumberArray[1] != 0) {
            var tens = parseInt(twoLastDigits - stringNumberArray[3]);
            var units = stringNumberArray[3];
            result = firstPart + ' ' + secondPart + ' ' + twoDigit[tens] + ' ' + oneDigit[units];
        } else if (parseInt(twoLastDigits) > 19 && parseInt(twoLastDigits) < 100 && stringNumberArray[1] == 0) {
            var tens = parseInt(twoLastDigits - stringNumberArray[3]);
            var units = stringNumberArray[3];
            result = firstPart + ' ' + twoDigit[tens] + ' ' + oneDigit[units];
        } 
    }
    return result;
}