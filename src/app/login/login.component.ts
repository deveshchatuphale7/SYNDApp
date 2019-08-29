import { Component, OnInit } from '@angular/core';
// import { SpeechRecognition } from 'nativescript-speech-recognition';
// import { SpeechRecognition } from '../../../node_modules/nativescript-speech-recognition/speech-recognition.android';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // private speechRecognition = new SpeechRecognition();
  
  // public checkAvailability(): void {
  //   this.speechRecognition.available().then(
  //     (available: boolean) => console.log(available ? "YES!" : "NO"),
  //     (err: string) => console.log(err)
  //   );
  // }

  constructor() {

    // this.checkAvailability();
// 
    // this.speechRecognition.requestPermission().then((granted: boolean) => {
      // console.log("Granted? " + granted);
    // });


   }

  ngOnInit() {
  }

}
