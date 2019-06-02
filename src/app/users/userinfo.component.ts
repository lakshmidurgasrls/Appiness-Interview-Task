
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserInfoComponent implements OnInit {
 userDetails:any  ;
  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getUserDetails().subscribe(
      (data:any )=> {
        this.userDetails=data.userInfo;
        console.log("user data :: ",data.userInfo);
      }
    );
   
  }

  delete(id: number){
    let result=confirm("Do you want to Delete ?");
    if(result){
      this.userDetails=this.userDetails.filter(data =>{
        return data.id !== id;
      });
    }
    // this.userDetails=this.userDetails.fil
  }

}
