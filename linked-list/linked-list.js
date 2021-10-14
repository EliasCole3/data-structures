

let node1 = {
  data: 'data1',
  next: null
}

let node2 = {
  data: 'data2',
  next: null
}

let node3 = {
  data: 'data3',
  next: null
}

let node4 = {
  data: 'data4',
  next: null
}

node1.next = node2
node2.next = node3
node3.next = node4


// console.log(node1)










function getLinkedListNode(data, referencedObject=null) {
  return {
    data: data,
    next: referencedObject
  }
}




// GeeksforGeeks visualization: https://www.youtube.com/watch?v=D7y_hoT_YZI
function reverse(head) {
  let node = head
  let previous = null

  while(node) {
    let next = node.next
    node.next = previous
    previous = node
    node = next
  }

  return previous
}



// console.log(reverse(node1))

function reverseRecursively(node) {
  console.log(node.data)
  console.log('')

  if(!node || !node.next) return node

  let temp = reverseRecursively(node.next)

  console.log('temp: ')
  console.log(temp)
  console.log('')

  console.log('node: ')
  console.log(node)
  console.log('')

  console.log('node.next.next: ')
  console.log(node.next.next)
  console.log('')

  console.log('node.next: ')
  console.log(node.next)
  console.log('')

  node.next.next = node
  node.next = undefined

  console.log('-----------')
  return temp
}


console.log(reverseRecursively(node1))






























