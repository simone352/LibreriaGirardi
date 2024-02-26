import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatiService } from '../service/dati.service';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public datiservice : DatiService){}
  
  form : FormGroup
  libro : Libro

  ngOnInit(){
    this.form = new FormGroup({
      id : new FormControl("",[Validators.required]),
    })
  }

  cercaLibro() {
    this.datiservice.getLibro(this.form.get("id").value).subscribe(data => {
      this.libro = data
    })
  }

}
