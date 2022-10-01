function Character(name,strength,health,round){
    this.name=name;
    this.strength=strength;
    this.health=health;
    this.round=round;


    this.attackbtn=document.querySelector(`#${this.name}-attack`)
    this.healthbtn=document.querySelector(`#${this.name}-make-health`)
    this.progres=document.querySelector(`.${this.name}-health span`)
    this.image=document.querySelector(`.${this.name}-personimag`)


} 
Character.prototype.attack=function(opponent){
    round=0;

    if (opponent.health>0){
        opponent.health-=this.strength;
    opponent.progres.style.width=`${opponent.health}%`;
    console.log(opponent)
    if(opponent.health<=30){
         opponent.progres.style.backgroundColor="red"

    }
}else{
opponent.attackbtn.remove()
opponent.healthbtn.remove()
opponent.image.src="./images/You_Died.png";
this.round=this.round+1;


}  
}
Character.prototype.makehealth=function(){
    if(this.health<100 ||this.health>=0){
            this.health+=5;
    this.progres.style.width=`${this.health}%`;

    }
    
}
let naruto=new Character('naruto',10,100)
let sasuke=new Character('sasuke',10,100)


naruto.attackbtn.addEventListener('click',function(){
    naruto.attack(sasuke);
})
sasuke.attackbtn.addEventListener('click',function(){
    sasuke.attack(naruto);
})
naruto.healthbtn.addEventListener('click',function(){
    naruto.makehealth();
})
sasuke.healthbtn.addEventListener('click',function(){
    sasuke.makehealth();
})
console.log(naruto)