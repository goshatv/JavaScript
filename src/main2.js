// 1. Создать "интерфейс" (класс) с 8 методами ListFirst

function ListFirstProto() {}

ListFirstProto.prototype.array = [];

ListFirstProto.prototype.pop = function() {
        
    this.array.length -= 1;

    return this;
}

ListFirstProto.prototype.push = function(value) {

    array[array.length] = value;

    return this;
}

ListFirstProto.prototype.shift = function() {

    for(var i = 0; i < array.length; i++)
    {
        array[i] = array[i+1];
    }

    array.length -= 1;

    return this;
}

ListFirstProto.prototype.unshift = function() {
    
    let tmpArray = [];

    for (var i = 0; i < array.length; i++)
    {
        tmpArray[0] = 0;
        tmpArray[i+1] = array[i];
    }

    tmpArray[0] = value;
    array = tmpArray;
    return this;
}

ListFirstProto.prototype.remove = function() {

    let tempArray = [];
    let isRemoved = false;

    if (value < 0 || value > array.length) {
        throw Error('Value should be >= 0 and less than array length.');
    }

    for (var i = 0; i < array.length-1; i++) {

        if (i === value) {
            isRemoved = true;
        }

        if(isRemoved) {
            tempArray[i] = array[i+1];
        } else {
            tempArray[i] = array[i];
        }
    }
    array = tempArray;
    return this;
}

ListFirstProto.prototype.isArray = function() {

    if (array.constructor === Array)
    {
        return true;
    } else {
        return false;
    }
}

ListFirstProto.prototype.lengthArray = function() {

    let result = 0;

    while(array[result] !== undefined)
    {
        result++;
    }

    return result;
}

// 2. Реализовать ArrayList & LinkedList на основании ListFirst
function ArrayList() {
    ListFirstProto.apply(this);
}

ArrayList.prototype = Object.create(ListFirstProto.prototype);
ArrayList.prototype.constructor = ArrayList;

// 3. Создать "интерфейс" (класс) с 12 методами ListSecond (унаследовав от ListFirst и расширить)
function ListSecond() {
    ListFirstProto.apply(this);
}

ListSecond.prototype.toString = function() {

    return `[${String(array)}]`;
}

ListSecond.prototype.toArrayList = function() {

    return [...array];
}

ListSecond.prototype.toLinkedList = function() {
    //
}

ListSecond.prototype.sort = function() {

}

// 4. Реализовать ArrayList & LinkedList на основании ListSecond
function ArrayList2() {
    ListSecond.apply(this);
} 
ArrayList2.prototype = Object.create(ListSecond.prototype);
ArrayList2.prototype.constructor = ArrayList2;