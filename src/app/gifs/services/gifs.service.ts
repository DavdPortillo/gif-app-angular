import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];

  private apiKey: string = 'y8GK28S2XgQflil3ZNe71MJtOkqdAT0g';
  private search: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    this.searchTag(this._tagsHistory[0]);
  }

  get tagsHistory() {
    return this._tagsHistory;
  }

  addToHistory(tag: string) {
    tag = tag.toLowerCase();

    this._tagsHistory = [tag, ...this._tagsHistory.filter((item) => item !== tag)];

    if (this._tagsHistory.length > 10) {
      this._tagsHistory.pop();
    }
    this.saveLocalStorage();
  }


  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  searchTag(tag: string): void {
    if (tag.length == 0) return;

    this.addToHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchReponse>(`${this.search}/search?`, { params })
      .subscribe((resp) => this.gifsList = resp.data);
  }

}
