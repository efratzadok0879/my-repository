import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PackageService } from '../../shared/services/package.service';

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent implements OnInit {

  packageInput: FormControl = new FormControl();
  constructor(private packageService: PackageService) {

  }

  ngOnInit() {
  }
  callNaxt() {
    if (this.packageInput.value)
      this.packageService.NameSubject.next(this.packageInput.value);
  }
}
