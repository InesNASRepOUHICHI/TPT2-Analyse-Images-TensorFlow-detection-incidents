import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import { User } from '@app/_models';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {UserService} from  '@app/_services';

@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      createdDate: ['', Validators.required]
    });
    this.userService.getById(userId.toString())
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.userService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          }else {
            alert(data);
          }
        },
        error => {
          alert(error);
        });
  }

}
