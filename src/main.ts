import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,appConfig,


).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes), // Provide the router
//     provideAnimations(), // Required for ngx-spinner animations
//     { provide: NgxSpinnerModule }, // Provide the spinner module
//   ],
// }).catch((err) => console.error(err));
