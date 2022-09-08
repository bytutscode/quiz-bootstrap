let currentQuestion = 0;
let runing = true;
let points = 0;
let bg = '';
update();

//tiptool call
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// functions
function update () {
   if(currentQuestion < questions.length){
    runing = true; 
   let pergunta = questions[currentQuestion];

    document.querySelector('.modal-header h5').innerHTML =`${currentQuestion + 1}.${pergunta.question}`;
    document.querySelector('.list-group').innerHTML = '';

    shuffle(pergunta.options);
    
    pergunta.options.forEach((item,idx)=>{
        
        document.querySelector('.list-group').innerHTML += `<div role="button" class="list-group-item list-group-item-action d-flex  align-items-center border border-secondary rounded-4 p-2 text-dark fs-5 my-1"><span class="rounded-circle d-flex justify-content-center align-items-center text-white bg-black me-2">${idx + 1}º</span>${item}</div>`;
    });
    
    document.querySelectorAll('.list-group-item').forEach((element,idx)=>{
    element.addEventListener('click',(e)=>{
       if(runing){
            if(questions[currentQuestion].options[idx] == questions[currentQuestion].answer){
                element.classList.add('bg-success');
                points++;
                runing = false;
                setTimeout(next,1000);
                currentQuestion++;
            } else {
                element.classList.add('bg-danger');
                runing = false;
                // in case of show the correct answer 
                // document.querySelectorAll('.list-group-item').forEach((item,idx)=>{
                //     if(idx == (questions[currentQuestion].answer - 1)){
                //         item.classList.add('bg-success');
                //     }
                // });
                setTimeout(next,1000);
                currentQuestion++;
            }
       }
    });
});

setTimeout(()=>{
    document.querySelector('.list-group').classList.add('fade');
    document.querySelector('.list-group').style.opacity = 1;
},100)
   } else {
    percent = (points * 100) / questions.length;
    let msg = '';

    if(percent <= 20){
        bg = 'bg-danger'
        msg = 'Ta ruim em?😥'
    } else if(percent <= 40) {
        msg = 'Abaixo do esperado...😅'
        bg = 'bg-warning'
    } else if(percent <= 60) {
        msg = 'não está ruim mas não está bom!😐'
        bg = 'bg-info'
    } else if(percent <= 80) {
        msg = 'Você foi acima da média!😳'
        bg = 'bg-primary'
    } else {
        msg = 'Muito Bom 😎'
        bg = 'bg-success'
    };
    document.querySelector('.modal').classList.remove('fade');
    document.querySelector('.list-group').style.opacity = 1;
    document.querySelector('.modal-content').classList.add(bg)
    document.querySelector('.modal-header h5').innerHTML = msg;
    document.querySelector('.list-group').innerHTML = `Você acertou ${percent}% das questões! isso representa ${points} resposta(s) correta(s) de ${questions.length} respondidas!`;
   }
};


function next () {
    document.querySelector('.list-group').classList.remove('fade');
    document.querySelector('.list-group').style.opacity = 0;
    update();
};

function reset () {
    document.querySelector('.modal').classList.add('fade');
    if(document.querySelector('.modal-content').classList.contains(bg)){
        document.querySelector('.modal-content').classList.remove(bg)
    }
    currentQuestion = 0;
    points = 0;
    shuffle(questions);
    update();
}

document.querySelector('.btn-close').addEventListener('click',reset)
