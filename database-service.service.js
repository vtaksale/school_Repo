import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
let DatabaseServiceService = class DatabaseServiceService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.BaseURL = "http://localhost:54981/api/";
    }
    GetStudents() {
        debugger;
        this.url = this.BaseURL + 'Students';
        return this._httpClient.get(this.url)
            .pipe(map(response => response));
    }
    GetStudentDetails(id) {
        this.url = this.BaseURL + 'Student/Update/' + id;
        return this._httpClient.get(this.url).pipe(map(response => response));
    }
    CreateStudent(student) {
        this.url = this.BaseURL + 'Student/Create';
        this._httpClient.post(this.url, student).toPromise().then((data) => {
            console.log(data);
            debugger;
        });
    }
    updateStudent(student) {
        debugger;
        this.url = this.BaseURL + 'Student/Update';
        return this._httpClient.put(this.url, student, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    DeleteStudent(id) {
        this.url = this.BaseURL + 'Student/Delete';
        return this._httpClient.delete(this.url + "/" + id).subscribe(response => { console.log(response); });
    }
};
DatabaseServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DatabaseServiceService);
export { DatabaseServiceService };
//# sourceMappingURL=database-service.service.js.map