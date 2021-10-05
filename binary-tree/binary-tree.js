
const buckets = require('buckets-js')


let bst1 = new buckets.BSTree()

bst1.add(1)
bst1.add(2)
bst1.add(3)
bst1.add(4)
bst1.add(5)
bst1.add(6)
bst1.add(7)
bst1.add(8)

console.log(bst1.contains(5))
console.log(bst1.contains(15))
console.log(bst1.height())
console.log(bst1.minimum())
console.log(bst1.maximum())

console.log('')

// bst1.inorderTraversal(x => console.log(x))
// bst1.levelTraversal(x => console.log(x))



function getNode(key, data) {
  return {
    key: key,
    data: data,
    left: null,
    right: null
  }
}


function getBST() {
  return {
    add: function(data) {
      let node = getNode()
    }
  }
}















