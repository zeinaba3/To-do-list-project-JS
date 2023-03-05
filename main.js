const Addform= document.querySelector('.add');

//searching and filtering\
const search=document.querySelector('.search input');



//waxan so qorno inay list oo page ka html  galan markan rabno function kan ayan samaysanaynaa
const list=document.querySelector(".Todos");
const  generateTemplate = todo =>{
 const  html= `
 <li
 class="list-group-item d-flex justify-content-between align-items-center"
>
 <span> ${todo}</span>
 <i class="far fa-trash-alt delete"></i>
</li>
`;
list.innerHTML+= html;

};

Addform.addEventListener('submit',e =>
{
e.preventDefault();


//button ka add button ka hoseya ina wax ku dhex qoro
const todo = Addform.add.value.trim();
console.log(todo);


//inan ku xadido user ka wuxu soo galinayo inay yihiin string oo number ahyn length xadidana siiyo

if(todo.length){
    generateTemplate(todo);
    //space ka delete dheh oola sin kuwii hore
    Addform.reset();
}
});

///Delete todo
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



//filtering function
const Filtertodos=(term) =>{
   
Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
 
Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));


};


//keyup event in searching and filtering elements
search.addEventListener('keyup' , () =>{
const term=search.value.trim(); 

//calling
Filtertodos(term);
});