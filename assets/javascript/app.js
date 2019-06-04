var myQuestions = [
    {
        question: "How many days are in a year?",
        anwsers:{
            a: '365',
            b: '364',
            c: '366',
            d: '370',
        },
        correctAnwser = 'a'
    },
    {
        question: "how old is earth",
        anwsers:{
            a: "1.5 billions years",
            b: "4.543 billion years",
            c: "8.723 billion years",
            d: "5.664 billion years",
        },
        correctAnwser = 'a'
    },
    {
        question: "Whats the hottest planet in our solar system?",
        anwsers:{
            a: "Neptune",
            b: "Mars",
            c: "Venus",
            d: "Mercury",
        },
        correctAnwser = "c"
    },
    {
        question: "How much does a full nasa space suit cost?",
        anwsers:{
            a: "1,000,000 dollars!",
            b: "12,000,000 dollars!",
            c: "10,000,000 dollars!",
            d: " 200,000 dollars!",
        },
        correctAnwser = "b",
    }
];

function showQuestions(questions, quizContainer){
     
    var output = [];
    var anwsers;

    for(var i =0; i<questions.length; i++){
        
        anwsers = [];

        for (letter in questions[i].anwsers){

            anwsers.push(
                '<label>' 
                + '<input type = "radio" name="question'+i+'" value"'+letter+'">'
                + letter + ': '
                + questions[i].anwsers[letter]
                + '</label>'
            ) 
        }
    }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                    + '<div class = "anwsers">' + anwsers.join('') + '</div>' 
            );
}




