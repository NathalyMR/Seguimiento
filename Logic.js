class Logic{
    constructor(app){
        this.app = app;
        this.app.createCanvas(800,550);
        this.contador = 0;
        this.pantalla = 0;
        this.error = false;
        this.figuras = [];
        this.posiciones = [];
        this.posiciones[0]=50;
        this.posiciones[1]=120;
        this.posiciones[2]=190;
        this.posiciones[3]=260;
        this.posiciones[4]=330;
        this.posiciones[5]=400;
        this.posiciones[6]=470;
        this.posiciones[7]=540;
        this.posiciones[8]=610;
        this.posiciones[9]=680;
        this.posiciones[10]=750;
        this.pos=this.app.int(this.app.random(0,4));
    }
    draw(){
        switch (this.pantalla) {
            case 0:
                this.app.background(155);
                this.app.textSize(20);
                this.app.rect(200,450,50,20);
                this.app.rect(165,450,20,20);
                this.app.rect(265,450,20,20);
                this.app.rect(178,475,90,20);
                this.app.text("Continuar",180,493);
                this.app.text(this.contador,220,468);
                this.app.text("+",270,467);
                this.app.text("-",172,465);
                this.app.textSize(20);
                if (this.error) {
                    this.app.text("ERROR",50,50);
                }
                    break;
        
            case 1:
                this.app.background(155);
                
                this.app.rect(120,449,125,50);
                this.app.rect(290,449,125,50);
                this.app.rect(460,449,125,50);
                this.app.rect(630,449,125,50);
                this.app.text("Agregar",120,480);
                this.app.text("Quitar",290,480);
                this.app.text("Agrandar",460,480);
                this.app.text("Circulos",630,480);
                
                for (let i = 0; i < this.figuras.length; i++) {
                    this.figuras[i].dibujarFigura((70*i)+70);
                    this.figuras[i].move();
                }

                    break;
        }
        
        
    }
    mouse(){
        switch (this.pantalla) {
            case 0:
                if (this.app.mouseX >= 265 && this.app.mouseX <= 265+20 && this.app.mouseY >= 450 && this.app.mouseY <= 450+20 && this.contador < 10) {
                    this.contador+=1;
                }
                if (this.app.mouseX >= 165 && this.app.mouseX <= 165+20 && this.app.mouseY >= 450 && this.app.mouseY <= 450+20 && this.contador > 0) {
                    this.contador-=1;
                }
                if (this.app.mouseX >= 178 && this.app.mouseX <= 178+90 && this.app.mouseY >= 475 && this.app.mouseY <= 475+20 && this.contador > 0 && this.contador <= 10) {
                    this.pantalla = 1;
                    for (let i = 0; i < this.contador; i++) {
                        let pos=this.app.int(this.app.random(0,9));
                        this.figuras.push (new Cuadrado(this.app,this.posiciones[pos],100,this.contador));
                        console.log(this.contador);
                    }
                }
                if (this.app.mouseX >= 178 && this.app.mouseX <= 178+90 && this.app.mouseY >= 475 && this.app.mouseY <= 475+20) {
                    this.error = true;
                }
                break;
        
            case 1:
                if (this.app.mouseX >= 0 && this.app.mouseX <= 125 && this.app.mouseY >= 449 && this.app.mouseY <= 449+50) {
                    console.log("agregar");
                }
                if (this.app.mouseX >= 125 && this.app.mouseX <= 125+125 && this.app.mouseY >= 449 && this.app.mouseY <= 449+50) {
                    console.log("quitar");
                }
                if (this.app.mouseX >= 250 && this.app.mouseX <= 250+125 && this.app.mouseY >= 449 && this.app.mouseY <= 449+50) {
                    console.log("tamaño");
                }
                if (this.app.mouseX >= 375 && this.app.mouseX <= 375+125 && this.app.mouseY >= 449 && this.app.mouseY <= 449+50) {
                    console.log("circulo");
                }
                break;
        }
            
        
    }
    key(){
        if (this.app.keyCode===78) {
            this.figuras.sort(function(a,b){
                return a.getValor()-b.getValor();
            });
            
        }


    }
       



}