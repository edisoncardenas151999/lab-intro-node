class SortedList {
  constructor(items,length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function(a, b) {
         return  a - b
       })

  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }


  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }
  
   

  sum() {   let sum = 0;
    for (let i = 0;i<this.items.length;i++) {
      sum += this.items[i];}
    }

  avg() {}

}
module.exports = SortedList;
