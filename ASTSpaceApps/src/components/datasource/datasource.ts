import { Component } from '@angular/core';

/**
 * Generated class for the DatasourceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'datasource',
  templateUrl: 'datasource.html'
})
export class DatasourceComponent {

  text: string;

  constructor() {
    console.log('Hello DatasourceComponent Component');
    this.text = 'Hello World';
  }

}
