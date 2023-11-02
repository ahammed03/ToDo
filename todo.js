inputElement=document.querySelector('input');
addButton=document.querySelector('.search-add button');


function addnew(){
    if (inputElement.value!=""){
    const newcontainer=document.createElement('div');
    newcontainer.classList.add('task-box');
    const pTag=document.createElement('p');
    pTag.classList.add('task');
    pTag.textContent=inputElement.value;
    const addBtn =document.createElement('button');
    addBtn.classList.add('completed');
    addBtn.innerHTML='&#x2713;';
    const delBtn =document.createElement('button');
    delBtn.classList.add('remove')
    delBtn.innerHTML='&#9249;';
    newcontainer.appendChild(pTag);
    newcontainer.appendChild(addBtn);
    newcontainer.appendChild(delBtn);
    const maincontainer=document.querySelector('.list');
    maincontainer.appendChild(newcontainer);
    delBtn.addEventListener('click',()=>{
        newcontainer.remove();
    })
    addBtn.addEventListener('click',()=>{
        pTag.style.backgroundColor='gray';
        addBtn.style.backgroundColor='gray';
    })
}
}

addButton.addEventListener('click',addnew)

const completedButton =document.querySelector('.completed');

completedButton.addEventListener('click',()=>{
    const taskElement=document.querySelector('.task');
    taskElement.style.backgroundColor='gray';
    completedButton.style.backgroundColor='gray';

})



const removeButtons = document.querySelectorAll('.remove');

removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent div of the clicked button
        const div = button.parentNode;

        // Remove the parent div from the container
        div.remove();
    });
});












// inputElement.addEventListener('keyup')