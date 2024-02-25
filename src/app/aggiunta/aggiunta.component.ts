import { Component, OnInit } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { DatiService } from '../service/dati.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aggiunta',
  templateUrl: './aggiunta.component.html',
  styleUrl: './aggiunta.component.css'
})
export class AggiuntaComponent implements OnInit{
  
  constructor(public datiservice : DatiService){}

  form : FormGroup
  visibile : boolean = true
  
  ngOnInit(){
    this.form = new FormGroup ({
      titolo : new FormControl("",[Validators.required]),
      autore : new FormControl("",[Validators.required]),
      tipo : new FormControl("",[Validators.required])
    }) 
  }

  addLibro(){
    let libro : Libro = {id : undefined,
      titolo : this.form.get("titolo").value,
      autore : this.form.get("autore").value,
      tipo : this.form.get("tipo").value}
    this.datiservice.addeditLibro(libro).subscribe(data => {
      this.visalFormLibro()
    })

  }

  visalFormLibro(){
    this.visibile =! this.visibile;
  }
}
