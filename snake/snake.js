class Snake{
    constructor(){
        this.len=1;
        this.body=[];
        this.body[0]=createVector(1,0);
        //this.body.push(createVector(1,0));
        //this.body.push(createVector(2,0));
        //this.body.push(createVector(3,0));
        this.xdir=0;
        this.ydir=0;
    }
    update(){
        let head = this.body[this.len-1].copy();
        this.body.shift();
        
        head.x+= this.xdir;
        head.y+= this.ydir;
        this.body.push(head);
    }
    show(){
        for(let i=0;i<this.len;i++){
            fill(i);
            rect(this.body[i].x,this.body[i].y,1,1);
        }
    }
    bfs(food){
        if(this.body[this.len-1].x<food.x){
            this.xdir=1;
            this.ydir=0;
        }
        else if(this.body[this.len-1].x>food.x){
            this.xdir=-1;
            this.ydir=0;
        }
        else if(this.body[this.len-1].y<food.y){
            this.ydir=1;
            this.xdir=0;
        }
        else if(this.body[this.len-1].y>food.y){
            this.ydir=-1;
            this.xdir=0;
        }
    }
    hamilton(){
        let z = this.body[this.len-1];
        if(z.x==0 && z.y==0){
            this.xdir=1;
            this.ydir=0;
        }
        else if(z.x==1 && z.y==0){

            this.xdir=1;
        }
        else if(z.x==1 && z.y==w-1){
            this.xdir=-1;
            this.ydir=0;
        }
        else if(z.x==0){
            this.xdir=0;
            this.ydir=-1;
        }
        else if(z.x==1 && this.ydir!=1)
        {
            this.xdir=0;
            this.ydir=1;            
        }
        else if(z.x==h-1 && this.ydir!=1){
            this.xdir=0;
            this.ydir=1;
        }
        else if(z.y%2==0){
            this.ydir=0;
            this.xdir=1;
        }
        else if(z.y%2==1){
            this.ydir=0;
            this.xdir=-1;
        }
    }
    endGame(){
        let x = this.body[this.len-1].x;
        let y = this.body[this.len-1].y;
        for(let i=0;i<this.len-1;i++){
            let part = this.body[i];
            if(part.x==x && part.y==y){
                //len=i;
                return true;
            }
        
        }
        if(x>w-1 || x<0 || y>h-1 || y<0){
            return true;
        }
        return false ;
    }
    setDir(p,q){
        this.xdir=p;
        this.ydir=q;
    }
    grow(pos){
        this.len++;
        this.body.unshift(createVector(pos.x,pos.y));
    }
    eat(pos){
        let x=this.body[this.len-1].x;
        let y= this.body[this.len-1].y;
        if(x==pos.x-1 && y==pos.y && this.xdir==1){
            this.grow(pos);
            return true;
        }
        if(x==pos.x+1 && y==pos.y && this.xdir==-1){
            this.grow(pos);
            return true;
        }
        if(x==pos.x && y==pos.y-1 && this.ydir==1){
            this.grow(pos);
            return true;
        }
        if(x==pos.x && y==pos.y+1 && this.ydir==-1){
            this.grow(pos);
            return true;
        }
        return false;
    }
}