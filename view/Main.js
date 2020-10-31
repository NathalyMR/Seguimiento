new p5 (function(app){
    
    
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