//1.1 Если а – четное посчитать а*б, иначе а+б
function parityBasedCalculation(firstNumber, secondNumber)
{
    var result;
    if (firstNumber % 2 === 0) {
        result = firstNumber * secondNumber;
    } else result = firstNumber + secondNumber;
    return result;
}

// 1.2 Определить какой четверти принадлежит точка с координатами (х,у)
function getNumericQuarter(x, y)
{
    var result;
    if (x > 0 & y > 0) {
        result = 'I координатная четверть';
    } else if (x < 0 & y > 0) {
        result = 'II координатная четверть';
    } else if (x < 0 & y < 0) {
        result = 'III координатная четверть';
    } else if (x > 0 & y < 0) {
        result = 'IV координатная четверть';
    } else result = 'Точка на координатной оси';
    
    return result;
}

// 1.3 Найти суммы только положительных из трех чисел
function positiveNumbersSum(firstNumber, secondNumber, thirdNmber)
{
    var result = 0;

    if(firstNumber > 0) {
        res += firstNumber;
    }

    if(secondNumber > 0) {
        res += secondNumber;
    }

    if(thirdNmber > 0) {
        res += thirdNmber;
    }

    return result;
}

// 1.4 Посчитать выражение макс(а*б*с, а+б+с)+3
function calculationOfMaxExpression(firstNumber, secondNumber, thirdNumber)
{
    var firstExpression = firstNumber * secondNumber * thirdNumber;
    var secondExpression = firstNumber + secondNumber + thirdNumber;

    if (firstExpression > secondExpression) {
        return firstExpression + 3;
    }
    else {
        return secondExpression + 3;
    }
}

// 1.5 Написать программу определения оценки студента по его рейтингу
function ectsConvert(numberRate)
{
    var result;

    if (numberRate >= 0 && numberRate < 20) {
    result = 'F';
    } else if (numberRate >= 20 && numberRate < 40) {
    result = 'E';
    } else if (numberRate >= 40 && numberRate < 60) {
    result = 'D';
    } else if (numberRate >= 60 && numberRate < 75) {
    result = 'C';
    } else if (numberRate >= 75 && numberRate < 90) {
    result = 'B';
    } else if (numberRate >= 90 && numberRate <= 100) {
    result = 'A';
    } else result = 'Число не входит в диапазон 0-100'

    return result;
}

// 2.1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function evenNumbersSumAndCountInRange(rangeStart, rangeEnd)
{
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

    return `Sum is ${sum} and count is ${count}`;   
}

// 2.2 Проверить простое ли число?
function isNumberPrime(number)
{
    var result;
    if (number === 1 || number === 0)
    result = true;
    else if (number === 2)
    result = true;

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
    var res2_3 = parseInt(Math.sqrt(a));
    
    result.innerHTML = 'Корень введенного числа равен ' + res2_3;
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
    var strNumber = number.toString();
    var result = 0;

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
    var result = 0;
    while(number != 0)
    {
        result = result * 10 + (number % 10);
        number = number /10;
    }

    return result;
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
function arrayOddIdxElementsSum() {
    var numberArray = [2, 3, 0, 1, 24, 2, 2];
    var sum = 0;

    for (var i = 0; i < numberArray.length; i++)
    {
        if (numberArray[i] % 2 !== 0)
        {
            sum += numberArray[i];
        }
    }
    
    return sum;
}

// 3.6 Сделать реверс массива (массив в обратном направлении) 
function arrayReverse() {
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
    var reverseArray = [];

    for (var i = 0; i < numberArray.length;)
    {
        reverseArray.push(numArray[numberArray.length-1]);
        numberArray.pop(numberArray.length);
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
function swapArray() {
    var numberArray = [1, 2, 3, 4];
    var swappedArray = [];

    for (var i = 0; i < (numberArray.length); i++)
    {
        var a = numberArray.pop(numberArray[i]);
        swappedArray.unshift(a);
    }

    var concat = swappedArray.concat(numberArray);

    return concat;
}

// 3.9 Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function bubbleSort(arr) {
    var numberArray = [1, 2, 12, -1, 412, 13, 56];
    for (var i = 0, endI = numberArray.length - 1; i < endI; i++)
     {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) 
        {
            if (numberArray[j] > numberArray[j + 1]) {
                var swap = numberArray[j];
                numberArray[j] = numberArray[j + 1];
                numberArray[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return numberArray;
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
        result = 'Incorrect day number, enter again';
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

    return result;
    //Альтернативный вариант: Вместо словаря создаем массив. Делим число на 100, получаем остаток отделения... и т.д
    }
}

// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function getIntNumber(stringNumber) {
    var result;
    var strArray = stringNumber.split(' ');

    var oneWord = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11, 
        'twelve': 12,
        'thirty': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
        'hundred': 100
    }

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
    else
    {
        var tempResult;
        for (var i = 0; i < strArray.length; i++)
        {
            tempResult += oneWord[strArray[strArray[length]]];
        }
        result = tempResult;
    }

    return result;
}