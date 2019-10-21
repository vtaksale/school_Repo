import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
let CreateStudentComponent = class CreateStudentComponent {
    constructor(_router, _formbuilder, _DatabaseServiceService) {
        this._router = _router;
        this._formbuilder = _formbuilder;
        this.Gender = ['Male', 'Female'];
        this.Division = ["A", "B", "C", "D", "E", "F"];
        this.Standard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.databaseServiceService = _DatabaseServiceService;
    }
    ngOnInit() {
        this.studentForm = this._formbuilder.group({
            Student_Fname: new FormControl('', [Validators.required]),
            Student_Lname: new FormControl('', [Validators.required]),
            Student_Gender: new FormControl('', [Validators.required]),
            Student_Standard: new FormControl('', [Validators.required]),
            Student_Division: new FormControl('', [Validators.required]),
            Student_Contact: new FormControl('', [Validators.required]),
            Student_Email: new FormControl('', [Validators.required]),
        });
        this.GetStudentList();
    }
    GetStudentList() {
        var data = this.databaseServiceService.GetStudents().subscribe(data => { data = this.studentsList; });
    }
    GoBack() {
        this._router.navigate(['/StudentInfo']);
    }
    AddStudent(studentForm) {
        if (this.studentForm.status == 'VALID') {
            this.students = this.studentForm.value;
            this.databaseServiceService.CreateStudent(this.students);
        }
    }
};
CreateStudentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create-student',
        templateUrl: './create-student.component.html',
        styleUrls: ['./create-student.component.css']
    })
], CreateStudentComponent);
export { CreateStudentComponent };
//# sourceMappingURL=create-student.component.js.map