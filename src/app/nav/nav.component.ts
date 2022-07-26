import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model :any = {}

  constructor(public accountService : AccountService, private router: Router,
  private toastr: ToastrService) { }

  ngOnInit(): void {}

  login(){
    this.accountService.login(this.model).subscribe(
      (respone)=>{
        this.router.navigateByUrl('/members');
        console.log(respone);
      },
      (error)=>{
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
