import { NgModule } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CardComponent],
  exports: [UserComponent]
})
export class UserModule {}
