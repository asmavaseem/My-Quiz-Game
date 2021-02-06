class Quiz {
    constructor(){}
    
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value")
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
        }
        question = new Question();
        question.display();
        }
    }

    play(){
        background("yellow");
        question.hide();
        textSize(30);
        text("Result",120,100);
        contestant.getPlayerInfo();

        if(allContestants !== undefined){
            var display_position = 130;
            for(var plr in allContestants){
                var correctAns = "3";
                if(correctAns === allContestants[plr].answer){
                    fill("green");
                }
                else{
                    fill("black");
            }
        }
        display_position += 20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer,120,display_position);
        }

    }
}