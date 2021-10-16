import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  exercises: Exercise[];

  ngOnInit(): void {
    this.exerciseService.exercisesSubject.subscribe(
      (exercises) => (this.exercises = exercises)
    );
  }
}
