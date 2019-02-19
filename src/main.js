
//HW : 
// Alist, Llist - в них нужно добавить все старые функции. Нужно унаследовать . 
// Сначала создать List, класс который содержит 8 функций без реализации.
// От него наследуемся для Llist и Alist. А в Alist и Llist реализуем функции.
// После этого интерфейс List расширить. В List добавить функцию sort, toArrayList, toLinkedList, toString.
// Этот интерфейс должен наследоваться от List.
// Интерфейс реализуем 

function SuperList() {

    this.pop = function() {};

    this.push = function(value) {};
    
    this.shift = function() {};

    this.unshift = function(value) {};

    this.remove = function(value) {};

    this.isArray = function() {};

    this.lengthArray = function() {};
    
    this.toString = function () {}
}

function Alist() {

    SuperList.apply(this);

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

var listTest = new Alist();
listTest.push(1);
listTest.push(2);
listTest.push(3);
listTest.push(4);
listTest.push(5);
listTest.remove(2);
