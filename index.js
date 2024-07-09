let addInput = []

console.table(addInput)
function takeInput(){
let input = document.getElementById('inputtext')
addInput.push(input.value)
console.table(addInput)
createDOM(addInput)
input.value = ''
}
function createDOM(item){
let ul = document.querySelector('ul')
 ul.innerHTML=item.map((goods,index)=>{
  return `  <li> 
    <p id="${index}">${goods}</p>
    <button class="del" onclick="deleteitem(${index})"><i class="bi bi-x-circle"></i></button>
    <button class="tkn" onclick="markPurchased"> <i class="bi bi-check-circle"></i></button>
    </li>`    
})

}
createDOM(addInput)
function deleteitem(index){
addInput.splice(index,1)
createDOM(addInput)
}
function markPurchased(index){
let p = document.getElementById(index.toString())
p.classList.add("markpurchased")

}

