import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: '', redirectTo:'students',pathMatch:'full'},
  {path: 'create-student', component: CreateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
