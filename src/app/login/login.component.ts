import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../Service/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arrPersona : any;
  cognome  = "";
  CodiceFiscale ="";
  id = "";



  ngOnInit(): void {
    this.allPersona()





  }

  constructor(private personaService: PersonaService,private router: Router){}

  allPersona():void{
    this.personaService.getPersona().subscribe(res=>{
      this.arrPersona = res
      console.log(this.arrPersona);

    })

  }

  clickLogin(){
    let accesso = false
    for (let index = 0; index <  this.arrPersona.length; index++) {
      if(this.arrPersona[index].cognome == this.cognome && this.arrPersona[index].codiceFiscale == this.CodiceFiscale){
        accesso = true;
        this.id = this.arrPersona[index].id
        if(this.arrPersona[index].admin == 0){

        this.router.navigate(["/segnalazione"]);
        }else{
          this.router.navigate(["/admin"]);
        }
        break;


      }


    }

    if(accesso== false){
      alert("Credenziali non trovate")
    }


    console.log(accesso);
    console.log(this.id);





  }
}
