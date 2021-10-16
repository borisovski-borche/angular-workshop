import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit {
  exerciseForm: FormGroup;

  constructor(private exerciseService: ExerciseService) {}

  onFormSubmit() {
    if (this.exerciseForm.valid) {
      const newExercise: Exercise = {
        id: uuid(),
        ...this.exerciseForm.value,
      };
      this.exerciseService.addExercise(newExercise);
      this.exerciseForm.reset();
    }
  }

  initForm() {
    this.exerciseForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      progress: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(uuid());
    this.initForm();
  }
}
