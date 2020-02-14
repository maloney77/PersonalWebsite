import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-info-page',
  template: `
    <div class="info-page_page">
      <span class="info-page_welcome">Welcome!</span>
      <span class="info-page_description">
        Hello! My name is Kyle Maloney I am a Software Engineer currently located in St. Louis Missouri.
        My goal is to use this as my personal web scratchpad and a creative outlet for documentation of my hobbies.<br><br>
        Click below on any accordion tab to learn more about myself.
      </span>
      <!--<img class="info-page_picture" src="assets/professional-headshot.jpg"/>-->
      <mat-accordion class="info-page_accordion">
        <mat-expansion-panel class="info-page_professional-panel">
          <mat-expansion-panel-header class="info-page_professional-header">

            <mat-panel-title class="info-page_professional-title">
              Learn about me professionally!
            </mat-panel-title>
          </mat-expansion-panel-header>
          <p class="info-page_professional-desc">Professional me? Great choice let me walk you through my professional
            journey so far! (Choose a tab below)
          </p>
          <mat-tab-group>
            <mat-tab label="School" >
              <img class="professional_picture" src="assets/mst-picture.jpg"/>
              <p class="professional-info">
                I went to college at 
                <a href="https://www.mst.edu/" target="_blank">Missouri University of Science</a> and Technology for a bachelors degree in Computer
              Science, crazy right? Overall, the school was good and gave me a lot of good opportunities with very interesting
              classes such as: Java Gui and Visualizations, Intro to Machine Learning, Analysis of Algorithms, and
              Higher Level Database Operations. This degree did a great job of teaching me the value of programming
              fundamentals and gave me a solid background of many different topics. Along with a great education I also
              made a few life long friends that are extremely important to me.
              </p> 
            </mat-tab>
            <mat-tab label="Vizient">
              <img class="professional_picture" src="assets/vizient.png"/>
              <header class="professional_header">Intro</header>
              <p class="professional-info">
                My first job out of college was at <a href="https://www.vizientinc.com/what-we-do" target="_blank">Vizient Inc.</a> , 
                particularly in their Cape Girardeau Office. Vizient as a whole is a group purchasing organization, turned
                software company. They help connect hospitals and hospital chains with vendors that can sell all manner of 
                resources to them, be it object procurement or skill procurement. I only worked here for a short 10 months
                before moving to St. Louis to be with friends and family, but I learned incredible fundamentals that would 
                propel me into my future positions with confidence.
              </p>
              <header class="professional_header">What did I build?</header>
              <p class="professional-info">
                At Vizient I was an Associate Full Stack Developer working on a procurement web application to be used by 
                our members (hospitals). This website had an Angular(2) front end, Spring Boot (Java) back end, an MSSQL database,
                and used Dell Boomi as a middleware to help process EDI files between hospitals and vendors.
              </p>
              <header class="professional_header">What Skills Did I Learn?</header>
              <p class="professional-info">
                As this was my first professional job, you can imagine I learned a lot of new skills but here is a highlight
                of what I consider to be the most important. 
                <br><br>
                TDD: At my office we pair programmed every day and therefore it was much easier for us to implement Test
                Driven Development. The core idea of TDD, is writing comprehensive automated tests for your code to help
                drive your eventual implementation. Since your tests are based off of your requirements, they help to build a 
                foundation of what your code should do, as well as build a useful regression testing suite to, hopefully, catch 
                any breaking changes new code might introduce. I have really learned a lot about TDD beyond my time at Vizient
                but they did a great job of hammering this into me.
                <br><br>
                Spring: I learned a lot about the Spring Suite of technologies but mostly focused on Spring Boot.
                I think Spring is a fantastic comprehensive extension of J2EE and is a leader in back end server development.
                Most of what I learned was: how to build APIs, how to use additional technologies such as Lombok, JPA/Hibernate, Gradle,
                and Flyway Database Migration Scripts, as well as core Java programming skills.
                <br><br>
                Angular 2 (versions 5 and 6): Before this job, I did not do a lot of web development, so jumping into a 
                full stack job was really being thrown to the sharks, especially with front end development. I obviously learned
                the basics of HTML, CSS, and Javascript (typescript mostly), but I also learned how to use the Selenium/Karma
                testing framework as well as the Angular framework as a technology. Angular is ever changing and I hope to keep up
                with it as I build out this website.
                <br><br>
                Dell Boomi (Middleware technologies): OOOOOOOHHHH man Boomi. Boomi is a great middleware technology for large
                companies with a lot of separated systems. We; however, used it as an EDI processing platform. As much of a pain
                Boomi was to work with in it's EDI infancy, it was a fantastic tool to help me get into future Middleware and API development.
                
              </p>
            </mat-tab>
            <mat-tab label="Anheuser Busch-InBev"> Content 3 </mat-tab>
            <mat-tab label="Ameren Energy"> Content 3 </mat-tab>
          </mat-tab-group>  
        </mat-expansion-panel>
      </mat-accordion>
      <span class="info-page_about-me">
        
        
        <!--<a href="https://www.ameren.com/company/about-ameren" target="_blank">Ameren Energy.</a>-->
      </span>
    </div>
  `,
  styleUrls: ['./info-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
