import { Component } from '@angular/core';

export interface PeriodicElement {
          name: string;
          position: number;
          weight: number;
          symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
          { position: 1, name: 'Thiago', weight: 78, symbol: '1,76' },
];

@Component({
          selector: 'app-table-rotation',
          templateUrl: './table-rotation.component.html',
          styleUrls: ['./table-rotation.component.css']
})
export class TableRotationComponent {
          displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
          dataSource = ELEMENT_DATA;
}
