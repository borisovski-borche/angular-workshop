import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../interfaces/exercise';
import { ExerciseRepositoryService } from './exercise-repository.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(
    private exerciseRepository: ExerciseRepositoryService,
    private router: Router
  ) {}

  exercisesSubject = new BehaviorSubject<Exercise[]>([]);

  getExercises() {
    this.exerciseRepository
      .fetchExercises()
      .subscribe((exercises) => this.exercisesSubject.next(exercises));
  }

  addExercise(exercise: Exercise) {
    this.exerciseRepository.createExercise(exercise).subscribe((exercise) => {
      this.exercisesSubject.next([
        ...this.exercisesSubject.getValue(),
        exercise,
      ]);
      this.router.navigate(['all-exercises']);
    });
  }

  deleteExercise(exerciseId: string) {
    this.exerciseRepository.deleteExercise(exerciseId).subscribe((response) => {
      this.exercisesSubject.next(
        this.exercisesSubject
          .getValue()
          .filter((exercise) => exercise.id !== exerciseId)
      );
    });
  }

  updateExerciseProgress(exerciseId: string, newProgress: number) {
    this.exerciseRepository
      .updateExercise(exerciseId, newProgress)
      .subscribe((exercise) =>
        this.exercisesSubject.next(
          this.exercisesSubject
            .getValue()
            .map((mapExercise) =>
              mapExercise.id === exercise.id ? exercise : mapExercise
            )
        )
      );
  }
}
