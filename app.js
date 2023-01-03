const todoInp = document.getElementById('input');
const list = document.querySelector('.lists');
const items = document.querySelector('.items')
const clearBtn = document.querySelector('.clearBtn')
const allBtn = document.querySelector('.allBtn')
const activeBtn = document.querySelector('.activeBtn')
const completeBtn = document.querySelector('.completeBtn')
const clearAllBtn = document.querySelector('.clearAll')

let countedItem = document.querySelector('.count-item')
let itemCounter = 0;
let allItem = 0;

let checkedItems = 0;

document.addEventListener('keydown', function(e){
    if(e.keyCode == 13 && todoInp.value !== ""){
        const todoList = document.createElement('div')
        const todoParagraph = document.createElement('p')
        const todoCheck = document.createElement('div')

        itemCounter++
        countedItem.innerHTML = `${itemCounter}`

        todoParagraph.innerHTML = `${todoInp.value}`
        
        todoCheck.addEventListener('click', function(){
            todoCheck.classList.toggle('active')
            if(todoCheck.classList.contains('active')){
                todoList.classList.add('active-todo')
                todoParagraph.style.color = "#6C6E83"
                if(itemCounter !== 0){
                    itemCounter--
                }
                countedItem.innerHTML = `${itemCounter}`
                checkedItems++
            }else{
                todoList.classList.remove('active-todo')
                todoParagraph.style.color = "#FFFF"
                itemCounter++
                countedItem.innerHTML = `${itemCounter}`
                if(checkedItems != 0){
                    checkedItems--
                }
            }
        })
        
        todoList.append(todoCheck)
        todoList.append(todoParagraph)
        todoList.classList.add('todo-list')
        
        list.append(todoList)
        allItem++



        todoInp.value = ""
    }
})

allBtn.addEventListener('click', function(){
    const todos = document.querySelectorAll('.todo-list')
    for(let i = 0; i < allItem; i++){
        todos[i].style.display = "flex"
    }
})

completeBtn.addEventListener('click', function(){
    const todos = document.querySelectorAll('.todo-list')
    for(let i = 0; i< checkedItems; i++){
        todos[i].style.display = "none"
    }
})


activeBtn.addEventListener('click', function(){
    const todos = document.querySelectorAll('.todo-list')
    for(let i = 0; i < checkedItems; i++){
        todos[i].style.display = "none"
    }
})

clearBtn.addEventListener('click', function(){
    const todoChilds = document.querySelectorAll('.active-todo')

    for(let i = 0; i < checkedItems; i++){
        todoChilds[i].remove()
    }
    

    
    allItem -= checkedItems
    checkedItems = 0
    todoInp.value = ""

})

clearAllBtn.addEventListener('click', function(){
    const allTodo = document.querySelectorAll('.todo-list')

    for (let i =0; i < allItem; i++){
        allTodo[i].remove()
    }

    allItem = 0
    checkedItems = 0
    itemCounter = 0
    countedItem.innerHTML = `${itemCounter}`

    todoInp.value = ""
})
