const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
  
}

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() =>{event.target.classList.add('hide')
  }, 0)  
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault()
  
}

function dragenter(event) {  
  event.target.classList.add('hovered')
  item.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

function dragleave(event) { 
  // colorArray.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}

