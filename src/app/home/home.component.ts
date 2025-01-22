import { Component, Inject, OnInit ,inject} from '@angular/core';
import { RouterModule,Router,provideRouter } from '@angular/router';
import { EncryptDecryptService } from '../Services/encrypt-decrypt.service';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { ApiHitService } from '../Services/api-hit.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,MatButtonModule,NgxSpinnerModule,FormsModule,FormsModule],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  listData:any=[]
  constructor(private router: Router,
              private EncryDecry:EncryptDecryptService,
              private spinner: NgxSpinnerService,
              private ApiSer: ApiHitService){
                  this.ApiSer.getData().subscribe(res=>{
                    this.listData=res
                    // console.warn(this.listData,'listData')
                  })
              }

  Sortdata(event:any)
  {
    // console.log(event.target.value,'value')
    let value = event.target.value
    if(value === 'Name')
    {
      console.log(value)
      this.listData.sort((a:any,b:any)=>a.name.localeCompare(b.name))
    }
    else if(value == 'Id')
    {
      this.listData.sort((a:any,b:any)=>a.id - b.id)
    }

  }

  ngOnInit()
  {

  }

  counting:number=2
  start:boolean=false

  RouteAbout()
  {
      // this.router.navigate(['/about',{id:this.EncryDecry.encrypt(JSON.stringify(2))}])
      this.router.navigate(['/about',{id:this.EncryDecry.encrypt(JSON.stringify(1))}])
  }

  navigateAbout()
  {
    this.router.navigate(['/about',{'id':'1'}]);
  }

  check()
  {
    this.spinner.show()
  }


  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submission prevented!');
    // Handle custom logic here
    console.log(event)
  }


  onParentClick(): void {
    console.log('Parent clicked');
  }

  onChildClick(event: Event): void {
    event.stopPropagation(); // Stop the click event from propagating to the parent
    console.log('Child clicked');
  }

  Password=''
  CheckPassword()
  {
    console.log(this.Password,'Password')
    let PanValidation = /^[A-Z]{5}\d{4}[A-Z]{1}$/
    // let result = PanValidation.test(this.Password)
    // alert(result)
    // return
    // let passValid = /[A-Z][a-z][0-9]/.test(this.Password)
    // let passValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(this.Password)
    // let passValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])/.test(this.Password)
    // let pEN = /^(?=.*[A-Z]{5})(?=.*[0-9]{4})(?=.*[A-Z]{1})/.test(this.Password)
    let confirm = /^]!@#$%^&*()_-=+]{}\/;:'".>,<?|/.test(this.Password)
    alert(confirm)
    // return
    // let isCapital = /[A-Z]/.test(this.Password)
    // let isSmall = /[a-z]/.test(this.Password)
    // let isNumber = /\d/.test(this.Password)
    // let isSpecial = /[!@#$%^&*()?{}":\|<>\-+=_/]/.test(this.Password) // working
    // let IsLength = this.Password.length > 7 && this.Password.length <30
    // let password =!/password/i.test(this.Password)

    // console.log(isCapital , isSmall , isNumber , isSpecial, IsLength ,password)
    console.log(PanValidation)

    // if(isCapital && isSmall && isNumber && isSpecial && IsLength && password)
    if(PanValidation)
    {
      alert('PanValidation is Correct')
      this.Password = ''
    }
    else
    {
      alert('PanValidation is Incorrect')
      this.Password = ''
    }

    let check = /^[A-Z]{5}\d{4}[A-Z]$/.test(this.Password)
    alert(check)
  }


  checkValid()
  {
    let isCapital = /[A-Z]/.test(this.Password)
    let isSmall = /[a-z]/.test(this.Password)
    let isNumber = /\d/.test(this.Password)
    let isSpecial = /[!@#$[%^&/]*()-_=+{\|;:'",<.>?}]/.test(this.Password)
    let isLength = this.Password.length > 7 && this.Password.length < 30
    let password = !/password/.test(this.Password)

    if(isCapital && isSmall && isNumber && isSpecial && isLength && password)
    {
      alert('Password is Correct')
    }
    else
    {
      alert('Password is Incorrect')
    }
  }


}
