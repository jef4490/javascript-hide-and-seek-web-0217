function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')

   for (let i = 0, l = lis.length; i < l; i++) {
     lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
   }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
