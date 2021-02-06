class Question {
    constructor() {
        this.title = createElement('h2');
        this.name = createInput("Enter your name");
        this.button = createButton('Submit');
        this.answer = createInput("Enter correct option no.");
        this.question = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
    }

    hide(){
        this.question.hide();
        this.name.hide();
        this.button.hide();
        this.answer.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.name.position(150, 260);
        this.button.position(350, 340);

        this.question.html("Question:- What starts and ends with the letter 'E'. But has only one letter");
        this.question.position(150, 80);
        this.option1.html("1: Envelope");
        this.option1.position(150, 110);
        this.option2.html("2: Everyone");
        this.option2.position(150, 140);
        this.option3.html("3: Eye");
        this.option3.position(150, 170);
        this.option4.html("4: End");
        this.option4.position(150, 200);


        this.answer.position(450, 260);

        this.button.mousePressed(()=>{
        this.name.hide();
        this.button.hide();
        this.answer.hide();

        contestant.name = this.name.value();
        contestant.answer = this.answer.value();
        
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        })
    }
}