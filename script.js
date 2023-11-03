let turn = 'X';

function changeTurn(){
    return turn === "X"? "0": "X"
}

let boxes = document.getElementsByClassName('box')

Array.from(boxes).forEach(element =>{
    let reset = document.querySelector('#reset')
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
            if(boxtext.innerHTML === ''){
                boxtext.textContent = turn
                turn = changeTurn()
                
            }
            

            checkWin()


        reset.addEventListener('click' , ()=> {
          
        boxtext.textContent = ''
    })
    })

})


function checkWin(){
    let boxtext = document.querySelectorAll('.boxtext')
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach( (e) =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            boxes[e[0]].classList.add('violet')
            boxes[e[1]].classList.add('violet')
            boxes[e[2]].classList.add('violet')

            reset.addEventListener('click' , ()=>{
                boxes[e[0]].classList.remove('violet')
                boxes[e[1]].classList.remove('violet')
                boxes[e[2]].classList.remove('violet')  
            })
            
            
            

            console.log(boxes[e[0]])
    } 
}

    )}
