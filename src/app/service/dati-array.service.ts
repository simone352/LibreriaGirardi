import { Injectable } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  url: string = 'http://localhost:9999/api/libri';


  

  constructor(public httpclient: HttpClient) { }

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

  addeditFormLibroVisibile$ : Subject<boolean> = new Subject<boolean>();

}
