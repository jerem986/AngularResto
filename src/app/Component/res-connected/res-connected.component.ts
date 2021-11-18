import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SessionService } from 'src/app/Service/session/session.service';
import { MinChar } from 'src/app/Validator/MinChar.validator';

@Component({
  selector: 'app-res-connected',
  templateUrl: './res-connected.component.html',
  styleUrls: ['./res-connected.component.scss']
})
export class ResConnectedComponent implements OnInit {

  items!: MenuItem[]
  switchSteps : number = 0

  username? : string  = this._session.user?.name

  myFormGroup : FormGroup = this._formbuild.group({})

  today = new Date()
  monthNumber! : number
  month! : string 
  test: number =14
  
  numPreDay: number = 1
  numPostDay: number = 7 // on fait 42-nbjour sur le mois - numPreDay

  constructor(
    private _formbuild :FormBuilder,
    private _session : SessionService
  ) { }

  ngOnInit(): void {
  this.items = [
    {label: 'Step 1'},
    {label: 'Step 2'},
    {label: 'Step 3'}
  ];

  this.myFormGroup = this._formbuild.group({
    name : this._session.user?.id,
    nbPers : [null, [Validators.required]]
    // tel : [null,[Validators.required,MinChar(9),Validators.maxLength(20),]], // regex number? ou + en premiere place?
    // email : [null,[Validators.required, Validators.email]],
    // password : [null, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$")] //regex minimum 6 lettres dont une Uppercase ,une Lowercase et un caractère spécial
  }, Validators.required)

  console.log(16-2);
  this.monthNumber = this.today.getMonth()+1
  this.getMonth()
  }

  next(){
    this.switchSteps +=1
  }

  previous(){
    if(this.switchSteps>=1)
    this.switchSteps-=1
  }

  getMonth(){
    switch(this.monthNumber){
      case 1 :
        return this.month = "Janvier"
      case 2 :
        return this.month = "Février"
      case 3 :
        return this.month = "Mars"
      case 4 :
        return this.month = "Avril"
      case 5 : 
        return this.month = "Mai"
      case 6 :
        return this.month = "Juin"
      case 7 :
        return this.month = "Juillet"
      case 8 :
        return this.month = "Aout"
      case 9 :
        return this.month = "Septembre"
      case 10 :
        return this.month = "Octobre"
      case 11 : 
        return this.month = "Novembre"
      case 12 :
        return this.month = "Décembre"
      default :
        return this.month = ""
    }
  }

  nextMonth(){
    if(this.monthNumber == 12){
      this.monthNumber = 1
      this.getMonth()
    }
    else{
      this.monthNumber++
      this.getMonth()

    }
  }
  previousMonth(){
    if(this.monthNumber == 1){
      this.monthNumber = 12
      this.getMonth()
    }
    else{
      this.monthNumber--
      this.getMonth()
      
    }
  }

}

// switch(type : string){
//   switch (type) {
//     case 'bug':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png'
//     case 'dark':
//     return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png'
//     case 'dragon':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/120px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png'
//     case 'electric':
//       return  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'
//     case 'fairy':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png'
//     case 'fighting':
//     return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png'
//     case 'fire':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png'
//     case 'flying':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png'
//     case 'ghost':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
//     case 'grass':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png'
//     case 'ground':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png'
//     case 'ice':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png'
//     case 'normal':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png'
//     case 'poison':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'
//     case 'psychic':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png'
//     case 'rock':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png'
//     case 'steel':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png'
//     case 'water':
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png'
//     default:
//       return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFJvitmOFD3FJkE5HG8FJi4H_Mt5SdXntJA&usqp=CAU'
//   }
// } 
