import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALVIN SAYS HI RENATA';
  userSelected:string
computerSelected:string
computerweapon=["rock","paper","scissors"]
userscore=0
computerscore=0
action: string
status:string

  userPick(weapon:string)
   {this.userSelected=weapon
       console.log('userselected',this.userSelected)
    setTimeout(()=>{
const randomNumber=Math.floor(Math.random()*3)
this.computerSelected=this.computerweapon[randomNumber]
  this.checkResult()
    },1000)

  }
  clearfield(){
    setTimeout(()=>{this.status=''
    this.userSelected=''
    this.computerSelected=''
 },1500)

  }
  win(user,computer){
    this.userscore++
    this.userSelected=user
    this.computerSelected=computer
    this.action="beats"
    this.status="you win"
this.clearfield()
  }
  lose(user,computer){
     this.computerscore++
      this.userSelected=user
     this.computerSelected=computer
     this.action="lose to" 
     this.status="you lose"
     this.clearfield()
  }
  draw(user,computer){
    this.userSelected=user
    this.computerSelected=computer
    this.action="and"
    this.status="you draw"
   this.clearfield()

  }
  checkResult(){
     const userChoice=this.userSelected
    const computerChoice=this.computerSelected
    switch(userChoice+computerChoice){
      case"rockscissors":
      case"paperrock":
      case"scissorspaper":
      this.win(userChoice,computerChoice)
      break;
      case"scissorsrock":
      case"rockpaper":
      case"paperscissors":
      this.lose(userChoice,computerChoice)
      break;
      default:
       this.draw(userChoice,computerChoice)
        break;
  }
}
reset(){
  this.userscore=0
  this.computerscore=0
}



};
