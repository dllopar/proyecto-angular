import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number=0;
  @Output() conseguirAutor = new EventEmitter();

  public autor:any;

  constructor() {

    this.autor={
      nombre: "Damian Llopar",
      github: "https://github.com/dllopar",
      linkedin: "http://linkedin.com/in/damian-llopar"
    };

   }

  ngOnInit(): void {

   $("#logo").click(function(e:any){
    e.preventDefault();
    $("header").css("background", "green")
    .css("height", "50px");
  });

   $('.galeria').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: this.anchura
  });
 }

 lanzar(event:any){

  this.conseguirAutor.emit(this.autor);
 }

}
