import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule,Router,provideRouter } from '@angular/router';
import { EncryptDecryptService } from '../Services/encrypt-decrypt.service';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,MatButtonModule,NgxSpinnerModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  // injecting dependencies like we inject in the constructor same work here
  // private router = Inject(Router);
  // private datePipe = Inject(DatePipe)

  constructor(private router: Router,
              private EncryDecry:EncryptDecryptService,
              private spinner: NgxSpinnerService){}

  //

  ngOnInit()
  {}
counting:number=2
start:boolean=false
  RouteAbout()
  {
      this.router.navigate(['about',{id:this.EncryDecry.encrypt(JSON.stringify(2))}])
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

}
