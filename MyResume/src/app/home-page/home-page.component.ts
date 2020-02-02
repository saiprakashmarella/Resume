import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  HomeSec: Boolean = true;
  contactSec: Boolean = false;
  projSec: Boolean = false;
  projects: any = [];
  projectName: string = "";
  Technologies: string = "";
  description: string = "";
  role: string = "";
  duration: string = "";
  i = 0;
  ngOnInit() {
    this.jqueryCode();
    this.projectsData();
    console.log(this.projects);
    console.log(this.projects.length)
  }
  projectsData() {
    this.projects.push({
      "Project": "Ecommerce Site", "Technologies_used": "Angular 8, SpringBoot,BootStrap,MySql,Hibernate",
      "Description": "Developing a ecommerce site that shows the products and get the order and ship it to customer",
      "Role": "Full Stack Developer", "Duration": "Jan-2019 to Mar-2019"
    });
    this.projects.push({
      "Project": "Car Service Station", "Technologies_used": "Angular 8, NodeJS,BootStrap,MongoDB",
      "Description": "Get the user request to provide the car service and deliver it to customer",
      "Role": "Full Stack Developer", "Duration": "Jan-2019 to Mar-2019"
    });
    this.projects.push({
      "Project": "StudentManagement", "Technologies_used": "Angular 8, SpringBoot,BootStrap,MySql,Hibernate",
      "Description": "Developing a site to manage the student data and attendance and marks for each semester",
      "Role": "Full Stack Developer", "Duration": "Jan-2019 to Mar-2019"
    });
    this.projectName = this.projects[this.i].Project;
    this.Technologies = this.projects[this.i].Technologies_used;
    this.description = this.projects[this.i].Description;
    this.role = this.projects[this.i].Role;
    this.duration = this.projects[this.i].Duration;
  }
  Home() {
    this.HomeSec = true;
    this.contactSec = false;
    this.projSec = false;
    $(document).ready(function () {
      $("#Home").css("background-color", "#00cc66");
      $("#Contact").css("background-color", "white");
      $("#Projects").css("background-color", "white");
      $("#footer").css("margin-top", "60px");
    })
  }
  Contact() {
    this.contactSec = true;
    this.HomeSec = false;
    this.projSec = false;
    $(document).ready(function () {
      $("#Home").css("background-color", "white");
      $("#Contact").css("background-color", "#00cc66");
      $("#Projects").css("background-color", "white");
      $("#footer").css("margin-top", "100px");
    })
  }
  Project() {
    this.projSec = true;
    this.contactSec = false;
    this.HomeSec = false;
    $(document).ready(function () {
      $("#Home").css("background-color", "white");
      $("#Contactt").css("background-color", "white");
      $("#Projects").css("background-color", "#00cc66");
      $("#footer").css("margin-top", "40px");
    })
  }
  prev() {

    if (this.i > 0) {
      this.i--;
      console.log(this.i)
      this.projectName = this.projects[this.i].Project;
      this.Technologies = this.projects[this.i].Technologies_used;
      this.description = this.projects[this.i].Description;
      this.role = this.projects[this.i].Role;
      this.duration = this.projects[this.i].Duration;
    }
    else {

      alert("Total projects completed");
    }
  }
  next() {
    if (this.i < this.projects.length - 1) {
      this.i++;
      console.log(this.i);
      this.projectName = this.projects[this.i].Project;
      this.Technologies = this.projects[this.i].Technologies_used;
      this.description = this.projects[this.i].Description;
      this.role = this.projects[this.i].Role;
      this.duration = this.projects[this.i].Duration;
    }
    else {
      alert("Total projects completed");
    }
  }
  jqueryCode() {
    $(document).ready(function () {
      $("#Home").css("background-color", "#00cc66");
    })
  }
}
