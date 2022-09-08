let questions = [
    {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 'tag script'
    },
    {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 'Tanto na tag body quanto a head estão corretas'
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 'src="xxx.js"'
    },
    {
        question: 'Um arquivo javascript externo precisa ter a tag script?',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 'Falso'
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 'alert("Olá Mundo")'
    }
];

function shuffle (array) {
    let vetorx = [];
    let length = array.length;
        for(let i,j,x = 0; x < length; x++){
            i = parseInt(Math.random()*array.length);
            j = array.splice(i,1);
            vetorx.push(j[0]);
        }
        for(i = 0; i < vetorx.length; i++){
            array.push(vetorx[i]);
        }
}
shuffle(questions);


