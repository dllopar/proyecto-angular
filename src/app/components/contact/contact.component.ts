import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: any=null;
  public anchuraToSlider: any=null;
  public autor: any=null;

  constructor() {
      //this.widthSlider = 1;
   }

  ngOnInit(): void {
   
  }

  cargarSlider(){
    this.anchuraToSlider = null;

    setTimeout(() => {
       this.anchuraToSlider = this.widthSlider;
    }, 1);
  }

  getAutor(event:any){
    this.autor = event;
  }

}
