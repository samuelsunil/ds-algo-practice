function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    
    // get
    function isEmpty() {
      return this.length === 0;
    },
    // peek
    
    // delete
    function push(node) {
     
      if(this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }
      
      this.tail = node;
      this.length ++;
      return node;
    },
    // pop
    
    
    
    
  }
  
}