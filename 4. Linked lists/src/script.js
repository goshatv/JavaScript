//Methods for Linked lists.
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

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

LinkedList.prototype.unshift = function(value) {
   const newNode = new Node(value, this.head, null);
   if (this.head) this.head.prev = newNode;
   else this.tail = newNode; 
   this.head = newNode;
};

LinkedList.prototype.search = function(searchValue) {
   let currentNode = this.head;
    
   while(currentNode) {
     if (currentNode.value === searchValue) return currentNode;
     currentNode = currentNode.next; 
   }
   return null;
}

//Testing:

function linkedPop(array) {
    var linkedList = new LinkedList();
    for (var i = 0; i < array.length; i++)
    {
        linkedList.push(array[i]);
    }

    linkedList.pop();
    return linkedList.tail.value;
}

function linkedPush(array, value) {
    var linkedList = new LinkedList();
    for (var i = 0; i < array.length; i++)
    {
        linkedList.push(array[i]);
    }

    linkedList.push(value);
    return linkedList.tail.value;
}

function linkedShift(array) {
    var linkedList = new LinkedList();
    for (var i = 0; i < array.length; i++)
    {
        linkedList.push(array[i]);
    }

    linkedList.shift();

    return linkedList.head.value;
}

function linkedUnshift(array, value) {
    var linkedList = new LinkedList();
    for (var i = 0; i < array.length; i++)
    {
        linkedList.push(array[i]);
    }

    linkedList.unshift(value);

    return linkedList.head.value;
}