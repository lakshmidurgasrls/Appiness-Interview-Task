import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm : FormGroup;
  user_id: number=this.router.snapshot.params['id'];
  userDetails: any;

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private userService: UserService
             ) { }

  ngOnInit() {
    if(this.user_id){
      this.editUser(this.user_id);
    }
    this.userForm=this.fb.group({
      name          : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email         : ['',[Validators.required, Validators.email]],
      phone         : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      company_name  : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      company_url   : ['',Validators.required],
      description   : ['',Validators.required],
      company_level : ['defult',Validators.required],
      date : ['',Validators.required],
      time : ['',Validators.required],



    }); 
  }

submitForm(){
  console.log('', this.userForm.value);
}

editUser(id : number){

  this.userService.getUserDetails().subscribe(
    (data:any )=> {
      this.userDetails=data.userInfo;
      this.userDetails=this.userDetails.find(data =>{
        return data.id !== id;
      });
      console.log("single data:: ",this.userDetails);
      this.userForm.patchValue({
        name          : this.userDetails.name,
        email         : this.userDetails.email,
        phone         : this.userDetails.phone, 
        company_name  : this.userDetails.company_name, 
        company_url   : this.userDetails.company_url, 
        description   : this.userDetails.description, 
        company_level : this.userDetails.company_level, 
        date : this.userDetails.date,
        time : this.userDetails.time,
  
  });
    }   
  );


}

}
