import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../baseComponent';

@Component({
  selector: 'cselect',
  templateUrl: './c-select.component.html',
  styleUrls: ['./c-select.component.scss']
})
export class CSelectComponent extends BaseComponent implements OnInit {
  @Input() fieldName: string = '';
  @Input() label: string = '';
  @Input() items: any[] = [];
  @Input() formGroup: FormGroup;
  ngOnInit(): void {
    this.setConfig(this.fieldName, this.label, this.formGroup);
  }

}
