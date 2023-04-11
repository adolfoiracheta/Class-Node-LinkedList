class Node {
  constructor(element,next) {
    this.element = element;
    this.next = next || null;
  }
  
}
/*
let node1 = new Node('a',null)
console.log(node1);
let node2 = new Node('b',null)
console.log(node2);
console.log(node1.next);
node1.next = node2
console.log(node1);
*/

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  prepend(element) {
  //add a node to the beginning of the link list 
    let node = new Node(element,this.head)
    this.size++
    this.head = node
      if (!this.tail) {
        this.tail = node 
    }
  }
  append(element) {
  //add a node to the end of the link list
  let node = new Node(element)
  this.size++
  
    if (!this.head || !this.tail) {
      this.head = node
      this.tail = node
    }
  
    else {
      this.tail.next = node
      this.tail = node
    }
  }
  find(element) {
    let current = this.head
      while (current != null) {
        if (current.element == element) {
          return true
        }
        current = current.next
      }
      return false
  }
  remove(element) {

//input element 
//use while loop to find the element
//point to null
//output is remove element
    
    let current = this.head
      while (current.next != null) {
        if (current.next.element == element) {
          if (current.next.next == null) {
            current.next = null
            console.log(current)
            this.tail = current
            this.size--
            return this
          }
          else {
            current.next = current.next.next
            this.size--
            return this
          }
        }
        current = current.next
      }
  }
  reverse() {
  
    let current = this.head //current = node a, this.head = node a 
    this.head = this.tail //current = node a, this.head = node d, this.tail = node d 
    this.tail = current //current = node a, this.head = node d, this.tail = node a
    
    let prev = null
    let next = null

    while(current != null) {
      next = current.next //current = node a, current.next = node b, next = node b
      current.next = prev //current = node a, current.next = null, next = node b, prev = null
      prev = current //current = node a, current.next = null, next = node b, prev = node a
      current = next //current = node b, current.next = node c, next = node b, prev = node a
    }
  }
}

//this is an new instance or new object of the linkedList class
let linkedList = new LinkedList()
console.log(linkedList);
linkedList.append('a');
console.log(linkedList);
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
console.log(linkedList);
console.log(linkedList.find('z'));
linkedList.reverse();
console.log(linkedList);
