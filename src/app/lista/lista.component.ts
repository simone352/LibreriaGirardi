import { Component, OnInit } from '@angular/core';
import { DatiService } from '../service/dati.service';
import { Observable } from 'rxjs';
import { Libro } from '../domain/Libro';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  libri$ : Observable<Libro[]>

  libro: Libro = { id: 0, tipo: '', titolo: '', autore: '' };
  id: number = 0;
  
  formCustum : FormGroup

  visibile : boolean = false;

  constructor(public datiservice : DatiService){}
  ngOnInit() {

    this.libri$ = this.datiservice.getLibri()

    this.formCustum = new FormGroup({
      id : new FormControl("",[Validators.required]),
      titolo : new FormControl("",[Validators.required]),
      autore : new FormControl("",[Validators.required]),
      tipo : new FormControl("",[Validators.required])
    })

  }

  customLibro(){
    let libro : Libro = {id : this.formCustum.get("id").value,
      titolo : this.formCustum.get("titolo").value,
      autore : this.formCustum.get("autore").value,
      tipo : this.formCustum.get("tipo").value}
    this.datiservice.addeditLibro(libro).subscribe(data => {
      this.visalFormLibro()
    })
  }

  visalFormLibro(){
    this.visibile =! this.visibile;
  }

  caricaLibro(libro : Libro){
    this.formCustum.get("id").setValue(libro.id)
    this.formCustum.get("titolo").setValue(libro.titolo)
    this.formCustum.get("autore").setValue(libro.autore)
    this.formCustum.get("tipo").setValue(libro.tipo)
    this.visalFormLibro()
  }

  delete(id: number) {
    this.datiservice.deleteLibro(id).subscribe(
      () => {
        this.libri$ = this.datiservice.getLibri();
      }
    );
  }


}
