import { KnowMoreComponent } from './../know-more/know-more.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  responsiveOptions: any;
  constructor(public dialog: MatDialog) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  images = [
    { path: '../../assets/images/banner-5.jpg' },
    { path: '../../assets/images/banner-3.jpg' },
  ]
  services: any = [
    {
      title: "Institutional Training Facilities",
      titleColor: "#673AB7",
      description: "In the fight against COVID-19, our doctors are our first and last line of defense.",
      details: "Details will be shown over here",
      footer: "Footer of the services will come over here",
      buttonLabel: "Know more"
    },
    {
      title: "Institutional Training Facilities",
      titleColor: "#673AB7",
      description: "In the fight against COVID-19, our doctors are our first and last line of defense.",
      details: "Details will be shown over here",
      footer: "Footer of the services will come over here",
      buttonLabel: "Know more"
    },
    {
      title: "Title 2",
      titleColor: "#673AB7",
      description: "In the fight against COVID-19, our doctors are our first and last line of defense.",
      details: "Details will be shown over here",
      footer: "Footer of the services will come over here",
      buttonLabel: "Know more"
    },
    {
      title: "Title 3",
      titleColor: "#673AB7",
      description: "In the fight against COVID-19, our doctors are our first and last line of defense.",
      details: "Details will be shown over here",
      footer: "Footer of the services will come over here",
      buttonLabel: "Know more"
    },
  ];
  ngOnInit(): void {
  }

  openDialog(obj: any) {
    console.log("OBJ", obj)
    const dialogRef = this.dialog.open(KnowMoreComponent, {
      width: "50%",
      data: { obj }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
