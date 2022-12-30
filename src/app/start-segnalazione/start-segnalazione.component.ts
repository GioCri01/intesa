import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-segnalazione',
  templateUrl: './start-segnalazione.component.html',
  styleUrls: ['./start-segnalazione.component.css']
})
export class StartSegnalazioneComponent implements OnInit {

  constructor(private router: Router){}

  optionSelected = ""

  select=[
    {
      value:"0",
      descr:"Sono positivo ad un test diagnostico"
    },
    {
      value:"1",
      descr:"Aggiornamento per richiesta fine astensione"

    },
  ]


  ngOnInit(): void {




  }

  goTo(value: any){
    if(value == 0){
      this.router.navigate(["/admin"]);
    }else{
      alert("pagina diversa")
    }
  }



}
