import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailspageService {

  private username: string;
  private clientid = '97ad8e14c7e6a33245c6';
  private clientsecret = '375f816175ae38c0b1fed8c03a6de70aa36ad2d1';

  constructor(private http: HttpClient) {
      this.username = 'jamesandere';
 }
 getprofileInfo(username) {
   console.log(this.username);
   
   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

 }
 getprofileRepos() {

return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


   }

 updateprofile(username: string) {
   this.username = username;
 }

}
