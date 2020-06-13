import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from '../services/repo.service';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user
  repos
  copyRepos

  getRepoloader = false

  totalRepos:number
  repoPerPage:number
  currentPage:number

  //private repoUpdated = new Subject()

  constructor(
    private acivatedRoute: ActivatedRoute,
    private router:Router,
    private repoService: RepoService) { }

  ngOnInit() {
    this.acivatedRoute.paramMap
    .subscribe((params => {
      console.log(params, 'params');

      let getUserName = params.get('userName')
      console.log(getUserName, 'getUserName');

      this.getUser(getUserName)
    }),
    (error) => {
      console.log(error.message)
    })
  }

  getUser(getUserName){
    this.repoService.getUser(getUserName)
        .subscribe((user)=> {
          console.log(user, 'user');
          this.user = user;

          this.repoService.getAllRepo(this.user.login)
            .subscribe(repos => {
              this.repos = repos;
              console.log(repos, 'repos....');
              //this.repoUpdated.next({repos:[...this.repos]})
            });
        })
  }

  showRepo(){
    this.getRepoloader = true
    setTimeout(() => {
      this.copyRepos = [...this.repos]
      this.getRepoloader = false
    },1000)
  }

  onPageChange(pageData: PageEvent){
    this.currentPage = pageData.pageIndex + 1
    this.repoPerPage = pageData.pageSize
    this.repoService.getAllRepo(this.user.login, this.currentPage, this.repoPerPage)
      .subscribe((repos) => {
        this.copyRepos = repos
      })
    console.log(this.user.login, this.currentPage, this.repoPerPage);

  }

/*   getRepoUpdated() {
    return this.repoUpdated.asObservable()
  } */

/*   goRepo(){
    this.router.navigate(["/getRepo", this.repos])
  } */

}
