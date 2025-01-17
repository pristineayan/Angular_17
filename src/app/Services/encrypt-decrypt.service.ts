import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() { }

  encrypt(value:any)
  {
    return btoa(value)
  }

  decrypt(value:any) {
    return atob(value)
  }

  CheckFalse: boolean = false;
  CheckTrue : boolean = true;

 

}
