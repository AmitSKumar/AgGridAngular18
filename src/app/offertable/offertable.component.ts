import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, ValueGetterParams } from 'ag-grid-community'; // Column Definition Type Interface
import { DataService } from '../data.service';
import moment_ from 'moment';
const moment = moment_;
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
    {
      headerName: 'Id',
      field: 'id',
      cellRenderer: (p: any) => +p.data.id + 1000,
    },
    {
      headerName: 'Full Name',
      cellRenderer: (p: any) => p.data.first_name + ' ' + p.data.last_name,
    },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' },
    {
      headerName: 'DOB',
      field: 'Birthday',
      cellRenderer: (data: any) => {
        return moment(data.value).format('DD MMM YYYY');
      },
    },
  ];
  ngOnInit(): void {
    this.dataservice.getData().subscribe((data) => {
      debugger;
      this.rowData = data;
    });
  }
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
}
