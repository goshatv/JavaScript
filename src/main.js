//PROTOTYPE:

function ListFirstProto() {}

ListFirstProto.prototype.array = [];
ListFirstProto.prototype.pop = function() {}
ListFirstProto.prototype.push = function() {}
ListFirstProto.prototype.shift = function() {}
ListFirstProto.prototype.unshift = function() {}
ListFirstProto.prototype.remove = function() {}
ListFirstProto.prototype.isArray = function() {}
ListFirstProto.prototype.lengthArray = function() {}
ListFirstProto.prototype.toString = function() {}

function AList() {
    ListFirstProto.apply(this);
}

AList.prototype = Object.create(ListFirstProto.prototype);
AList.prototype.constructor = AList;

AList.prototype.pop = function() {
    
    this.array.length -= 1;

    return this;
}

AList.prototype.push = function() {

    array[array.length] = value;

    return this;
}

AList.prototype.shift = function() {

    for(var i = 0; i < array.length; i++)
    {
        array[i] = array[i+1];
    }

    array.length -= 1;

    return this;
}

AList.prototype.unshift = function() {

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

//Как-то по своему

function ListFirst() {

    this.pop = function() {};

    this.push = function(value) {};
    
    this.shift = function() {};

    this.unshift = function(value) {};

    this.remove = function(value) {};

    this.isArray = function() {};

    this.lengthArray = function() {};
    
    this.toString = function () {}
}

function ArrayList() {

    ListFirst.apply(this);

    let array = [];

    this.pop = function() {

        array.length -= 1;

        return this;
    };

    this.push = function(value) {

        array[array.length] = value;

        return this;
    };
        
    this.shift = function() {

        for(var i = 0; i < array.length; i++)
        {
            array[i] = array[i+1];
        }

        array.length -= 1;

        return this;
    };
    
    this.unshift = function(value) {

        let tmpArray = [];

        for (var i = 0; i < array.length; i++)
        {
            tmpArray[0] = 0;
            tmpArray[i+1] = array[i];
        }

        tmpArray[0] = value;
        array = tmpArray;
        return this;
    };
    
    this.remove = function(value) {

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
    };
    
    this.isArray = function() {

        if (array.constructor === Array)
        {
            return true;
        } else {
            return false;
        }
    };
    
    this.lengthArray = function() {

        let result = 0;

        while(array[result] !== undefined)
        {
            result++;
        }

        return result;
    };

    this.toArray = function() {
        return [...array];
    };

    this.toString = function() {
        return `[${String(array)}]`;
    }
}

function ListSecond() {
    ListFirst.apply(this);
    
    this.toArrayList = function() {};
    
    this.toLinkedList = function() {};

    this.sort = function() {};
}

var a = new ListSecond();
console.log(a);

