class Form{

    constructor(){
        this.input = createElement('h3');
        this.button = createButton('Play');
        this.greeting = createElement('div');
        this.title = createElement('h2');
        this.inputName = createInput('');
        this.startGame = createButton('START GAME');
        this.level = createElement('h4');
        
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
        this.inputName.hide();
        this.level.hide();
        this.startGame.hide();

    }

    display(){
       this.input.html("NAME :");
       this.input.position(displayWidth/2-50,displayHeight/4);

       this.button.position(displayWidth/2+30,displayHeight/4+180);

       this.inputName.position(displayWidth/2+40,displayHeight/4+15);

       this.title.html("SOLVE THE MYSTERY!");
       this.title.position(displayWidth/2-300,0);
        
       this.level.html("LEVEL " + k );  
       this.level.position(displayWidth/2-400 , displayHeight/4+400);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.inputName.hide();
        this.button.hide();

        name = this.inputName.value();
        console.log(name);
       // playerCount++;

        this.greeting.html("HELLO " + name);
        this.greeting.position(displayWidth/2-50,displayHeight/2-100);

        this.startGame.position(displayWidth/2+30,displayHeight/2);


    



    })

    this.startGame.mousePressed(()=>{
        gameState = "play";
    })


    }

}