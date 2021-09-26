import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  datas: any[] = [];
  data: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  data7: any;
  data8: any;
  subjects: WebSocketSubject<unknown>[] = [];
  counter = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

    // for (let index = 0; index < 1; index++) {
    //   this.subjects.push(subject);

    //   this.subjects[index].subscribe(
    //     (message) => {
    //       console.log(message);
          
    //       this.data[index] = message;
    //       this.changeDetectorRef.detectChanges();
    //     },
    //     (err) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    //     () => console.log('complete') // Called when connection is closed (for whatever reason).
    //   );
    // }


    const subject = webSocket('ws://localhost:8080');
    subject.subscribe(
      (message) => {
        this.counter++;
        if (this.counter % 1 === 0) {
          this.data = message;
          this.changeDetectorRef.detectChanges();
          
        }
        // console.log('message received: ' + message);
      }, // Called whenever there is a message from the server.
      (err) => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );

    const subject2 = webSocket('ws://localhost:8080');
    subject2.subscribe(
      (message) => {
        this.data2 = message;
        this.changeDetectorRef.detectChanges();
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
    const subject3 = webSocket('ws://localhost:8080');
    subject3.subscribe(
      (message) => {
        this.data3 = message;
        this.changeDetectorRef.detectChanges();
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
    const subject4 = webSocket('ws://localhost:8080');
    subject4.subscribe(
      (message) => {
        this.data4 = message;
        this.changeDetectorRef.detectChanges();
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
    // const subject5 = webSocket('ws://localhost:8080');
    // subject5.subscribe(
    //   (message) => {
    //     this.data5 = message;
    //     this.changeDetectorRef.detectChanges();
    //   },
    //   (err) => console.log(err),
    //   () => console.log('complete')
    // );
    // const subject6 = webSocket('ws://localhost:8080');
    // subject6.subscribe(
    //   (message) => {
    //     this.data6 = message;
    //     this.changeDetectorRef.detectChanges();
    //   },
    //   (err) => console.log(err),
    //   () => console.log('complete')
    // );
    // const subject7 = webSocket('ws://localhost:8080');
    // subject7.subscribe(
    //   (message) => {
    //     this.data7 = message;
    //     this.changeDetectorRef.detectChanges();
    //   },
    //   (err) => console.log(err),
    //   () => console.log('complete')
    // );
    // const subject8 = webSocket('ws://localhost:8080');
    // subject8.subscribe(
    //   (message) => {
    //     this.data8 = message;
    //     this.changeDetectorRef.detectChanges();
    //   },
    //   (err) => console.log(err),
    //   () => console.log('complete')
    // );



  }
  ngDoCheck(): void {
    // console.log('check');
    
  }
}
