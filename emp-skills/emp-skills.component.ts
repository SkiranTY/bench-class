import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emp-skills',
  templateUrl: './emp-skills.component.html',
  styleUrls: ['./emp-skills.component.css']
})
export class EmpSkillsComponent implements OnInit {

  empForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      empName : this.fb.control('',
        [
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.required
        ]),
      empAge : this.fb.control(''),
      empSkills: this.fb.array([
        this.skill()
      ])
    });
  }

  skill(): FormGroup {
    return this.fb.group({
      skill: this.fb.control(''),
      proficiency: this.fb.control('')
    })
  }

  addSkill() {
    (this.empForm.get('empSkills') as FormArray).push(this.skill());
  }

  removeSkill(i: number) {
    (this.empForm.get('empSkills') as FormArray).removeAt(i);
  }

  printForm() {
    console.log(this.empForm.value);
    this.empForm.reset();
  }

}
