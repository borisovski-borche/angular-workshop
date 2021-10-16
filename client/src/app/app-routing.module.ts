import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { ExercisePanelComponent } from './components/exercise-panel/exercise-panel.component';

const routes: Routes = [
  { path: 'new-exercise', component: AddExerciseComponent },
  { path: 'all-exercises', component: ExercisePanelComponent },
  { path: '', redirectTo: '/all-exercises', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
