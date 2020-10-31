class Cuadrado extends Figura{
constructor(app,x,y,number){
    super(app,x,y,number);
    this.velocidad=this.app.random(1,3);
    this.valor=this.app.int(this.app.random(1,10));

}

dibujarFigura(posX,size){
    this.app.rect(posX,this.y,size,size); 
    this.app.text(this.valor,posX+20,this.y+30)
    }

    move(){
        this.y+=this.velocidad;
        if (this.y>184-50 || this.y < 0) {
            this.velocidad= -this.velocidad;
            
        }
    }
getValor(){
    return this.valor;



}

ordenar(){
    
}





}