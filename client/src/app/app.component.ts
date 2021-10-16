import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getExercises();
  }
}
