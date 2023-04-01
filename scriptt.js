const btn = document.querySelector('.submit-btn')
// console.log(btn)
const inputvalue = document.querySelector('#grocery')
// console.log(inputvalue)
const ultag = document.createElement("ul")
// console.log(ultag)
const divtag = document.querySelector(".grocery-list")
// console.log(divtag)
divtag.append(ultag)
const ptag = document.querySelector('.alert')
const clearbtn = document.querySelector('.clear-btn')
// console.log(clearbtn)

btn.addEventListener('click',function(Event){
event.preventDefault()
    if (inputvalue.value === ""){
        ptag.innerText = "Empty List can not be added"
    ptag.style.display = "block"
    ptag.classList.add("shows")
    setTimeout(function(){
        ptag.style.display = "none"
        ptag.classList.remove("shows")
    },1000)
    }
    if(inputvalue.value != ""){

    const newli = document.createElement("li")
    ultag.append(newli)
    newli.innerText = inputvalue.value
    inputvalue.value=""
    clearbtn.style.display = "block"

    const deleteBtn = document.createElement('span')
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    deleteBtn.style.color = "red"
    
    newli.append(deleteBtn)
    console.log(deleteBtn)

    ptag.innerText = "Item added to the list"
    ptag.style.display = "block"
    ptag.classList.add("show")

    setTimeout(function(){
        ptag.style.display = "none"
        ptag.classList.remove("show")
    },1000)
    
    deleteBtn.addEventListener('click',function(e){
        if(e.target.classList.contains('fa-sharp')) {
            // console.log('show')
            newli.style.display = "none"            
        }
        ptag.innerText = "Item removed"
        ptag.style.display = "block"
        ptag.classList.add("shows")    
        setTimeout(function(){
            ptag.style.display = "none"
            ptag.classList.remove("shows")
        },1000)
    })

  } 
})


//this code is for clear item action

clearbtn.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('clear-btn')){
        // console.log('wel')
        ultag.style.display = "none"
        clearbtn.style.display ="none"
    }
    ptag.innerText = "Empty List"
    ptag.style.display = "block"
    ptag.classList.add("showed")
    setTimeout(function(){
        ptag.style.display = "none"
        ptag.classList.remove("showed")
    },1000)
})





