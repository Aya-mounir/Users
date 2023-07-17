import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  [x: string]: any;
  allUsers!: UsersService[];
  statuses!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  constructor(private _UsersService: UsersService) {}
  ngOnInit(): void {
    this._UsersService.getAllUsers().subscribe((res: any) => {
      this.allUsers = res.users;
    });
  }
  filteration(e: any) {
    return e.target.value;
  }
  update(data: any) {
    console.log(data, 'updated');
  }
  delete(data: any) {
    console.log(data, 'deleted');
  }
}
