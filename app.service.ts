import { SubBankAccount } from './app/models/SubBankAccount';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { VirtualBankCard } from './app/models/VirtualBankCard';
import { BankAccount } from './app/models/BankAccount';
import { Configbank } from './app/models/Configbank';
import { Transaction } from './app/models/Transaction';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8084/";

  constructor(private http: HttpClient) { }

  // Add bankaccount - Create
  addbankaccount(bankaccount: BankAccount) {
    return this.http.post<BankAccount>(`${this.url}bankaccount/addbankaccount`, bankaccount)
}

getNumberOfBankAccounts(){

  return this.http.get<any>(this.url + 'bankaccount/count')

}


// Get bankaccount - Read
getbankaccount(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(this.url + 'bankaccount/allbankaccount')
}


// Get bankaccount by Id - Read
getbankaccountbyrib(rib: number): Observable<BankAccount>{
  return this.http.get<BankAccount>(`${this.url}bankaccount/${rib}`)
}

// Update bankaccount - Update
updatebankaccount(rib?: number, bankaccount?: any): Observable<any> {
    return this.http.put<any>(`${this.url}bankaccount/update/${rib}`, bankaccount)
}

// Delete bankaccount - Delete
deletebankaccount(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}bankaccount/delete/${id}`)
}


getNumberOfSubBankAccounts(b: number): Observable<number> {
  return this.http.get<number>(`${this.url}bankaccount/b/${b}`);
}

getNumberOfVirtualBankCards(c: number): Observable<number> {
  return this.http.get<number>(`${this.url}bankaccount/c/${c}`);
}


simulateur(a:number,b:number,c:number,d:number):Observable<number> {
  return this.http.get<number>(`${this.url}subbankaccount/simulateur/${a}/${b}/${c}/${d}`);
}





// Get bankaccount by Id - Read
getbankcardbyid(id: number): Observable<VirtualBankCard>{
  return this.http.get<VirtualBankCard>(`${this.url}virtualbankcard/${id}`)
}


//get last configbank
getlastconfig(): Observable<Configbank>{
  return this.http.get<Configbank>(`${this.url}config/getlastconfig`)
}


// Get bankaccount - Read
getbankcardbyrib(id: number): Observable<VirtualBankCard[]> {
  return this.http.get<VirtualBankCard[]>(`${this.url}virtualbankcard/v/${id}`)
}

//add bankcard
addbankcard(rib:number,virtualBankCard: VirtualBankCard) {
  return this.http.post<VirtualBankCard>(`${this.url}virtualbankcard/addvirtualbankcard/${rib}`, virtualBankCard)
}


maketransaction(numcard:number,password:number,cvv:number,t: Transaction) {
  return this.http.post<Transaction>(`${this.url}transaction/addtransaction/${numcard}/${password}/${cvv}`, t)
}
 
Confirmtransaction(numcard:number,password:number,copassword:number,cvv:number,t: Transaction) {
  return this.http.post<Transaction>(`${this.url}transaction/addtransaction/${numcard}/${password}/${copassword}/${cvv}`, t)
}


gettransactionbybankaccount(id: number): Observable<Transaction[]> {
  return this.http.get<Transaction[]>(`${this.url}transaction/transactionbyaccount/${id}`)
}


gettransaction(): Observable<Transaction[]> {
  return this.http.get<Transaction[]>(this.url + 'transaction/alltransaction')
}

 
addsubbankaccount(rib:number,subBankAccount: SubBankAccount) {
  return this.http.post<SubBankAccount>(`${this.url}subbankaccount/addsubbankaccount/${rib}`, subBankAccount)
}


getsubaccount(): Observable<SubBankAccount[]> {
  return this.http.get<SubBankAccount[]>(this.url + 'subbankaccount/allsubbankaccount')
}



getsubaccountbybankaccount(id: number): Observable<SubBankAccount[]> {
  return this.http.get<SubBankAccount[]>(`${this.url}subbankaccount/s/${id}`)
}




getbankcard(): Observable<VirtualBankCard[]> {
  return this.http.get<VirtualBankCard[]>(this.url + 'virtualbankcard/allvirtualbankcard')
}

getconfig(): Observable<Configbank[]> {
  return this.http.get<Configbank[]>(this.url + 'config/allconfigbank')
}









}