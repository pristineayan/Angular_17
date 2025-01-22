import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptDecryptService } from '../../Services/encrypt-decrypt.service';
import { HomeComponent } from '../../home/home.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  providers:[HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public homeCom =inject(HomeComponent)
  constructor(private activateRoute: ActivatedRoute,
              private EncryDecry: EncryptDecryptService,
              private spinner : NgxSpinnerService
              // private homeCom: HomeComponent
  ){}
  ngOnInit(): void {

    // let data: any
    // data = this.EncryDecry.decrypt(this.activateRoute.snapshot.paramMap.get('id'))
    // console.log(data)

    // when receive with the encrypt and decrypt

    // let data1 = JSON.parse(this.EncryDecry.decrypt(this.activateRoute.snapshot.paramMap.get('id')))
    // console.log('data',data1)

    // when receive id directly
    // let data1 = this.activateRoute.snapshot.paramMap.get('id')
    // console.log('data1',data1)

    // let data = this.activateRoute.snapshot.queryParams
    // console.log(data)
    // this.activateRoute.params.subscribe({
    //   next: (data)=>{
    //     console.log(data)
    //   },
    //   error : (e)=>{
    //     console.log(e)
    //   }
    // })

  }

  view()
  {
    // this.homeCom.check();
  }

}
