//1.1 Если а – четное посчитать а*б, иначе а+б
function multiplyOrSum(a, b) {
    if (a % 2 === 0) {
        return a * b;
    }

    return a + b;
}

// 1.2 Определить какой четверти принадлежит точка с координатами (х,у)
function getQuarterByCoordinates(x, y) {
    if (x > 0 && y > 0) 
    {
        return 1;
    }
    else if (x < 0 && y > 0)
    {
        return 2;
    }
    else if (x < 0 && y < 0)
    {
        return 3;
    }
    else if (x > 0 && y < 0)
    {
        return 4;
    }
    else
    {
        throw Error('Point not exist.');
    }
}

// 1.3 Найти суммы только положительных из трех чисел
function getPositiveNumbersSum(a, b, c) {
    let result = 0;

    if (a > 0) 
    {
        result += a;
    }

    if (b > 0)
    {
        result += b;
    }

    if (c > 0)
    {
        result += c;
    }

    return result;
}

// 1.4 Посчитать выражение макс(а*б*с, а+б+с)+3
function calculateMaxSumOrMultiply(a, b, c) {
    const sum = a + b + c;
    const multiply = a * b * c;

    return 3 + (sum > multiply ? sum : multiply);
}

// 1.5 Написать программу определения оценки студента по его рейтингу
function getRate(rating) {
    if (rating >= 0 && rating < 20) 
    {
        return 'F';
    }
    else if (rating >= 20 && rating <= 39)
    {
        return 'E';
    }
    else if (rating >= 40 && rating <= 59)
    {
        return 'D';
    }
    else if (rating >= 60 && rating <= 75)
    {
        return 'C';
    }
    else if (rating >= 75 && rating <= 89)
    {
        return 'B';
    }
    else if (rating >= 90 & rating <= 100)
    {
        return 'A';
    }
    else 
    {
        throw Error('Mark is out of range 0-100');
    }
}

// 2.1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function evenNumbersSumAndCountInRange(rangeStart, rangeEnd) {
    var sum = 0;
    var count = 0;
    for (rangeStart; rangeStart <= rangeEnd; rangeStart++)
    {
        if (rangeStart % 2 === 0)
        {
        sum += rangeStart;
        count++;
        }
    }
    return `${sum}, ${count}`;
}

// 2.2 Проверить простое ли число?
function isNumberPrime(number)
{
    var result;
    if (number === 1 || number === 2 || number === 3)
    result = true;
    else if (number === 0)
    result = false;

    for (var i = 2; i <= number / 2; i++)
    {
        if (number % i == 0)
        result = false;
        else result = true;
    }

    return result;
}

// 2.3 Вычислить корень числа
function sqrtNumber(number)
{
    return parseInt(Math.sqrt(number));
}

// 2.4 Вычислить факториал числа
function factorial(number)
{
    var result = 1;
    while (number--) {
    result *= number + 1
    }
    
    return result;
}

// 2.5 Посчитать сумму цифр заданного числа
function sumOfNumberDigits(number)
{
    if (number < 0) {
        throw Error('Number should be positive.');
    }
    var strNumber = String(number);
    var result = 0;

    if (strNumber[0] == '-')
    {
        delete strNumber[0];
    } 

    for (var i = 0; i < strNumber.length; i++)
    {
        result += parseInt(strNumber.charAt(i), 10);
    }

    return result;
}

// 2.6 Вывести число, которое является зеркальным отображением 
// последовательности цифр заданного числа
function mirrorNumber(number)
{
    var result = '';
    var tempNumber = 0;

    if (number < 0)
    {
        number *= -1;
        while(number != 0)
        {
            result += number % 10;
            number = parseInt(number / 10);
            tempNumber = tempNumber * 10;
            tempNumber = (tempNumber + result);
        }

        result *= -1;
    }
    else
    {
        while(number != 0)
        {
            result += number % 10;
            number = parseInt(number / 10);
            tempNumber = tempNumber * 10;
            tempNumber = tempNumber + result;
        }
    }

    return String(result);
}

// 3.1 Найти минимальный элемент массива
// 3.2 Найти максимальный элемент массива
// 3.3 Найти индекс минимального элемента массива
// 3.4 Найти индекс максимального элемента массива
function arrayExtremes(numberArray) {
    // var numberArray = [23, 1, 34, 132];
    var firstIndex = numberArray[0];
    var max = firstIndex;
    var min = firstIndex;

    for (i = 1; i < numberArray.length; ++i)
    {
        numberArray[i] > max ? max = numberArray[i] : false;
        
        numberArray[0] < firstIndex ? firstIndex = numberArray[i]: false;
    }

    for (i = 0; i < numberArray.length; i++)
    {
        numberArray[i] < min ? min = numberArray[i] : false;

        numberArray[0] > firstIndex ? firstIndex = numberArray[i] : false;
    }

    var maxIndex = numberArray.indexOf(max);
    var minIndex = numberArray.indexOf(min);

    return `max=${max},min=${min},maxIndex=${maxIndex},minIndex=${minIndex}`;
}

// 3.5 Посчитать сумму элементов массива с нечетными индексами 
function arrayOddIdxElementsSum(numberArray) {

    var sum = 0;

    for (var i = 0; i < numberArray.length; i++)
    {
        if (i % 2)
        {
            sum += numberArray[i];
        }
    }
    
    return sum;
}

// 3.6 Сделать реверс массива (массив в обратном направлении) 
function arrayReverse(array) {
    var reverseArray = [];

    for (var i = 0; i < array.length;)
    {
        reverseArray.push(array[array.length-1]);
        array.pop(array.length);
    }

    return reverseArray;
}

// 3.7 Посчитать количество нечетных элементов массива
function oddIdxCountInArray(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++)
    {
        if (array[i] % 2 !== 0)
        {
            count += 1;
        }
    }

    return count;
}

// 3.8 Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function swapArray(array) {

    var swappedArray = [];

    for (var i = 0; i < (array.length); i++)
    {
        var a = array.pop(array[i]);
        swappedArray.unshift(a);
    }

    var concat = swappedArray.concat(array);

    return concat;
}

// 4.1 Получить строковое название дня недели по номеру дня.
function dayName(dayNumber) {
    var result = '';
    var daysDictionary = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }

    if (dayNumber >= 1 && dayNumber <=7) {
        result = daysDictionary[dayNumber];
    } else { 
        throw Error('Incorrect day number');;
    }

    return result;
}

// 4.2 Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function twoPointsDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

// 4.3 Вводим число(0-999), получаем строку с прописью числа.
function getNumberAsString(number) {
    var stringNumber = String(number);
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

  }
  return result;
}

// 4.4 Вводим число прописью, получаем его числовое значение (0-999)
function getIntNumber(stringNumber) {
    var result;
    var strArray = stringNumber.split(' ');

    var oneWord = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8,
                   'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirty': 13, 'fourteen': 14, 'fifteen': 15,
                   'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
                   'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90, 'hundred': 100 }

    if (strArray.length === 1)
    {
        result = oneWord[stringNumber];
    }
    else if (strArray.length === 2)
    {
        if (strArray[1] == 'hundred')
        { 
            result = oneWord[strArray[0]] * oneWord[strArray[1]];
        }
        else if (strArray.length == 2 && strArray[1] != oneWord['hundred'])
        {
            result = oneWord[strArray[0]] + oneWord[strArray[1]];
        }
    }
    else if (strArray.length === 3)
    {
        result = oneWord[strArray[0]] * oneWord['hundred'] + oneWord[strArray[2]];
    }
    else if (strArray.length === 4)
    {   
        result = oneWord[strArray[0]] * oneWord['hundred'] + oneWord[strArray[2]] + oneWord[strArray[3]];        
    }

    return result;
}   