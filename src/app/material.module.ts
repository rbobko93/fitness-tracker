import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule {}
