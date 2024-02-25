import { Injectable } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  libri:Libro[] = [
    {id:1, tipo:'guida', titolo:'Guida 1 ', autore:'Autore 1'},
    {id:2, tipo:'manuale', titolo:'Manuale utente 1', autore:'Sviluppatore 1'},
    {id:3, tipo:'guida', titolo:'Guida 2 ', autore:'Autore 2'},
    {id:4, tipo:'manuale', titolo:'Manuale utente 2', autore:'Sviluppatore 1'}
  ]

  url: string = 'http://localhost:9999/api/libri';

  constructor(public httpclient : HttpClient) { }

  getLibri(): Observable<Libro[]> {
    return this.httpclient.get<Libro[]>(this.url);
  }

  getLibro(id: number): Observable<Libro> {
    return this.httpclient.get<Libro>(this.url + '/' + id);
  }

  addeditLibro(libro: Libro): Observable<Libro> {
    // se si elimina l'id, il server dbms incrementa l'id automaticamente
    if (libro.id == -1)
      delete libro["id"];
    return this.httpclient.post<Libro>(this.url, libro);
  }

  deleteLibro(id: number): Observable<Libro> {
    console.log(id)
    return this.httpclient.delete<Libro>(this.url + '/' + id);
  }

  visibile$ : Subject<boolean> = new Subject<boolean>();

}
