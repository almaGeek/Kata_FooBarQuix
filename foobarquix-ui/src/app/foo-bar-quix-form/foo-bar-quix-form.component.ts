import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {

  fooBarForm: FormGroup;

  @Output()
  submitNumberOutput = new EventEmitter<number>();


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.fooBarForm = this.fb.group({
      numberToConvert: [null]
    })
  }

  submitNumber(): void {
    if(this.fooBarForm.value) {
      this.submitNumberOutput.emit(this.fooBarForm.value.numberToConvert);
    }
  }

}
