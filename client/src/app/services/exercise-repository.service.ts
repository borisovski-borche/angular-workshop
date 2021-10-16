import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Exercise } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseRepositoryService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/exercises';

  fetchExercises() {
    return this.http
      .get(this.baseUrl)
      .pipe(map((exercises) => exercises as Exercise[]));
  }

  createExercise(exercise: Exercise) {
    return this.http
      .post(this.baseUrl, exercise)
      .pipe(map((exercise) => exercise as Exercise));
  }

  deleteExercise(exerciseId: string) {
    return this.http.delete(`${this.baseUrl}/${exerciseId}`);
  }

  updateExercise(exerciseId: string, newProgress: number) {
    return this.http
      .patch(`${this.baseUrl}/${exerciseId}`, {
        progress: newProgress,
      })
      .pipe(map((exercise) => exercise as Exercise));
  }
}
