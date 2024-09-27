import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { DataService } from '../data.service';

@Component({
  selector: 'app-offertable',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './offertable.component.html',
  styleUrl: './offertable.component.css',
})
export class OffertableComponent implements OnInit {
  rowData: any;
  constructor(private dataservice: DataService) {}
  columnDefs: ColDef[] = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'First Name', field: 'first_name' },
    { headerName: 'Last Name', field: 'last_name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'DOB', field: 'Birthday' },
  ];
  ngOnInit(): void {
    this.dataservice.getData().subscribe((data) => {
      debugger;
      this.rowData = data;
    });
  }
}
