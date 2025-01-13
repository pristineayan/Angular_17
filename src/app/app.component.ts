import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  fileOpener() {
    var input_element: any = document.createElement('input');
    input_element.setAttribute('type', 'file');
    input_element.setAttribute('accept', '.csv,.xlsx,.xls,');
    input_element.click();
    input_element.addEventListener('change', (event:any) => {
      this.incomingfile(event)
    });
}
arrayBuffer: any;
file: File | any;
uploadedData:any=[]
async incomingfile(event:any) {
  this.file = event.target.files[0];
  if (this.file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || this.file.type == 'application/vnd.ms-excel' || this.file.type=='text/csv') {
      var subscriberOfobservable = new Observable(observable => {
          try {
              let fileReader = new FileReader();
              try {
                  fileReader.onload = (e) => {
                      this.arrayBuffer = fileReader.result;
                      var data = new Uint8Array(this.arrayBuffer);
                      var arr = new Array();
                      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                      var bstr = arr.join("");
                      var workbook = XLSX.read(bstr, {type: "binary", raw: true, cellText: true, cellStyles: true});
                      var first_sheet_name = workbook.SheetNames[0];
                      var worksheet = workbook.Sheets[first_sheet_name];
                      this.uploadedData = XLSX.utils.sheet_to_json(worksheet, {raw: true});
                      console.log(this.uploadedData)
                  }
              }catch (e) {
              }

              fileReader.readAsArrayBuffer(this.file);
          } catch (error) {
              console.log(error);
          }
      });
      subscriberOfobservable.subscribe((result: any) => {
          console.log("result", result);
      });
  } else {
  }
}
}
