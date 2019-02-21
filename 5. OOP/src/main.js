// 1. Создать "интерфейс" (класс) с 8 методами ListFirst
function ListFirst() {}

ListFirst.prototype.array = [];
ListFirst.prototype.pop = function() {};
ListFirst.prototype.push = function() {};
ListFirst.prototype.shift = function() {};
ListFirst.prototype.unshift = function() {};
ListFirst.prototype.remove = function() {};
ListFirst.prototype.isArray = function() {};
ListFirst.prototype.lengthArray = function() {};

// 2. Реализовать ArrayList & LinkedList на основании ListFirst
function ArrayList() {
    ListFirst.apply(this);
}

ArrayList.prototype = Object.create(ListFirst.prototype);
ArrayList.prototype.constructor = ArrayList;

ArrayList.prototype.pop = function() {
    
    this.array.length -= 1;

    return this;
}

ArrayList.prototype.push = function(value) {

    this.array[this.array.length] = value;

    return this;
}

ArrayList.prototype.shift = function() {

    for(var i = 0; i < this.array.length; i++)
    {
        this.array[i] = this.array[i+1];
    }

    this.array.length -= 1;

    return this;
}

ArrayList.prototype.unshift = function(value) {
    
    let tmpArray = [];

    for (var i = 0; i < this.array.length; i++)
    {
        tmpArray[0] = 0;
        tmpArray[i+1] = this.array[i];
    }

    tmpArray[0] = value;
    this.array = tmpArray;
    return this;
}

ArrayList.prototype.remove = function(value) {

    let tempArray = [];
    let isRemoved = false;

    if (value < 0 || value > this.array.length) {
        throw Error('Value should be >= 0 and less than array length.');
    }

    for (var i = 0; i < this.array.length-1; i++) {

        if (i === value) {
            isRemoved = true;
        }

        if(isRemoved) {
            tempArray[i] = this.array[i+1];
        } else {
            tempArray[i] = this.array[i];
        }
    }
    this.array = tempArray;
    return this;
}

ArrayList.prototype.isArray = function() {

    if (this.array.constructor === Array)
    {
        return true;
    } else {
        return false;
    }
}

ArrayList.prototype.lengthArray = function() {

    let result = 0;

    while(this.array[result] !== undefined)
    {
        result++;
    }

    return result;
}

//Linked list
function LinkedList() {
    ListFirst.apply(this);
    this.head = null;
    this.tail = null;
    this.node = function(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

LinkedList.prototype = Object.create(ListFirst.prototype);
LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.pop = function() {

    if (!this.tail) {
        return null;
     }
 
    let value = this.tail.value;
    this.tail = this.tail.prev;
    
    if (this.tail){
       this.tail.next = null; 
    } else {
        this.head = null;
     }
    
    return value;
}

LinkedList.prototype.push = function(value) {

    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.shift = function() {

    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
     
    if (this.head) this.head.prev = null;
    else this.tail = null;
     
    return value;
}

LinkedList.prototype.unshift = function() {

    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode; 
    this.head = newNode;
}

// 3. Создать "интерфейс" (класс) с 12 методами ListSecond (унаследовав от ListFirst и расширить)
function ListSecond() {
    ListFirst.apply(this);
}

ListSecond.prototype.toString = function() {};
ListSecond.prototype.toArrayList = function() {};
ListSecond.prototype.toLinkedList = function() {};
ListSecond.prototype.sort = function() {};

// ListSecond.prototype.toString = function() {};
// ListSecond.prototype.toArrayList = function() {};
// ListSecond.prototype.toLinkedList = function() {};
// ListSecond.prototype.sort = function() {};

// 4. Реализовать ArrayList & LinkedList на основании ListSecond
function ArrayList2() {
    ListSecond.apply(this);
} 
ArrayList2.prototype = Object.create(ArrayList.prototype);
ArrayList2.prototype.constructor = ArrayList2;

ArrayList2.prototype.toString = function() {

    return `[${String(this.array)}]`;
}

ArrayList2.prototype.toArrayList = function() {

    return [...this.array];
}

ArrayList2.prototype.sort = function() {
    return this.array.sort((a, b) => a - b);
}