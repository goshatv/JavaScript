//Methods for array.
function Alist() {

    this.arr = [];

    this.toString = function() {
        return `[${String(this.arr)}]`;
    }

    this.toArray = function() {
        return [...this.arr];
    }

    this.push = function(value) {
        this.arr[this.arr.length] = value;

        return this;
    }

    this.pop = function() {
        this.arr.length -= 1;
        return this;
    }
    this.shift = function() {
        for(var i = 0; i < this.arr.length; i++)
        {
            this.arr[i] = this.arr[i+1];
        }
        this.arr.length -= 1;
        return this;
    }
    this.unshift = function(value) {
        this.tmpArray = [];
        for (var i = 0; i < this.arr.length; i++)
        {
            this.tmpArray[0] = 0;
            this.tmpArray[i+1] = this.arr[i];
        }

        this.tmpArray[0] = value;
        this.arr = this.tmpArray;
        return this;
    }
    this.remove = function(value) {
        this.tempArray = [];
        this.isRemoved = false;
        if (value < 0 || value > this.arr.length) {
            throw Error('Value should be >= 0 and less than array length.');
        }
        for (var i = 0; i < this.arr.length-1; i++) {
            if (i === value) {
                this.isRemoved = true;
            }
            if(this.isRemoved) {
                this.tempArray[i] = this.arr[i+1];
            } else {
                this.tempArray[i] = this.arr[i];
            }
        }
        this.arr = this.tempArray;
        return this;
    }
    this.isArray = function() {
        if (this.arr.constructor === Array)
        {
            return true;
        }
        else return false;
    }
    this.lengthArray = function() {
        this.result = 0;
        while(this.arr[this.result] != undefined)
        {
            this.result++;
        }
        return this.result;
    }
    this.splice = function() {

    }
    this.some = function() {
        
    }
    this.every = function() {

    }
}

//New object of Alist.
var alist = new Alist();

//Return new array after push method.
function Push(array, value) {
    alist.arr = array;
    alist.push(value);
    return alist.arr;
}

//Return new array after pop method.
function Pop(array) {
    alist.arr = array;
    alist.pop();
    return alist.arr;
}

//Return new array after shift method.
function Shift(array) {
    alist.arr = array;
    alist.shift();
    return alist.arr;
}

//Return new array after unshift method.
function Unshift(array, value) {
    alist.arr = array;
    alist.unshift(value);
    return alist.arr;
}

//Return new array without needed element by index.
function Remove(array, value) {
    alist.arr = array;
    alist.remove(value);
    return alist.arr;
}

//Return is needed value array or not in boolean. 
function IsArray(array) {
    alist.arr = array;
    return alist.isArray(array);
}

//Return length of an array.
function Length(array) {
    alist.arr = array;
    return alist.lengthArray(array);
}

//Return new array without element which deleted by needed index.
function RemoveTest(array, valueIndex) {
    if (valueIndex < 0 || valueIndex >= array.length)
    {
        throw Error('Value should be >= 0 and less than array length.')
    }
    else if (valueIndex === 0) {
        for (var i = 0; i < array.length; i++)
        {
            array[i] = array[i+1];
        }
        array.length -= 1;  
        return array;
    }
    else if (valueIndex === array.length) {
        array.length -= 1;
        return array;
    }
    else if (valueIndex < array.length && valueIndex > 0) {
        var tempArray = []; 
        for (var i = 0; i < valueIndex; i++)
        {
            tempArray[i] = array[i];
        }
        for (var i = valueIndex; i <= array.length-1; i++)
        {
            tempArray[i] = array[i+1];
        }
        tempArray.length -= 1;
        return tempArray;
    }    
}

function rmvTest2(array, value) {
    var tempArray = [];
    var isRemoved = false;
    if (value < 0 || value >= array.length) {
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
    return tempArray;
}

function Condition() {
}

function SomeTest(array, Condition) {
    var result = false;
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] == Condition) result = true;
    }
    return result;
}

function EveryTest(array, Condition) {
    for (var i = 0; i < array.length; i++) 
    {
        return array[i] == Condition;
    }
}