class Figura {
    constructor(app,x,y,number){
        this.app = app;
        this.x = x;
        this.y = y;
        this.number = number;
        this.velocidad=this.app.random(1,3);
    }
    dibujarFigura(){
    this.app.rect(this.x,this.y,50,50); 
    }

    move(){
        this.y+=this.velocidad;
        if (this.y>184-50 || this.y < 0) {
            this.velocidad= -this.velocidad;
            
        }


    }
    
}