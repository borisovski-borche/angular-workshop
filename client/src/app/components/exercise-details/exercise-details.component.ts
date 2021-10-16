import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss'],
})
export class ExerciseDetailsComponent implements OnInit {
  @Input() exercise: Exercise;
  isOpen = false;
  isEditing = false;

  newProgress: string;

  constructor(private exerciseService: ExerciseService) {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onExerciseDelete() {
    this.exerciseService.deleteExercise(this.exercise.id);
  }

  onProgressUpdate() {}

  handleUpdate() {
    if (this.isEditing && +this.newProgress > 0) {
      this.exerciseService.updateExerciseProgress(
        this.exercise.id,
        +this.newProgress
      );
      this.isEditing = !this.isEditing;
    }
    this.isEditing = !this.isEditing;
  }

  ngOnInit(): void {}
}
