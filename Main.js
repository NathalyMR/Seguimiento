new p5 (function(app){
    var logic;

    app.setup=function(){
        logic = new Logic(app);
}

    app.draw=function(){
        logic.draw();
}
    app.mousePressed=function(){
        logic.mouse();
}

    app.keyPressed=function(){
        logic.key();
}
});