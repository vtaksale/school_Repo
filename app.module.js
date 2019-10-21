import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRouting } from '..//app/home-page/AppRoutingModule';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentMarksComponent } from './student-info/student-marks/student-marks.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { TeacherSalaryComponent } from './teacher-info/teacher-salary/teacher-salary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentDetailsComponent } from './student-info/student-details/student-details.component';
import { TeacherDetailsComponent } from './teacher-info/teacher-details/teacher-details.component';
import { CreateStudentComponent } from './student-info/create-student/create-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseServiceService } from './database-service.service';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            StudentInfoComponent,
            StudentMarksComponent,
            TeacherInfoComponent,
            TeacherSalaryComponent,
            HomePageComponent,
            StudentDetailsComponent,
            TeacherDetailsComponent,
            CreateStudentComponent,
            PageNotFoundComponent,
            AsyncObservableComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            appRouting,
            HttpClientModule
        ],
        providers: [DatabaseServiceService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map