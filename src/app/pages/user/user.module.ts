import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

import { routedComponents,UserRoutingModule } from './user.routes';
import { UserProfilePage } from './user-profile/user-profile';
import { TranslateModule } from '../../Lib/ngx-translate/public_api';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  imports: [
    ThemeModule,
    TranslateModule,
    PipesModule,
    Ng2SmartTableModule,
    UserRoutingModule,
  ],
  declarations: [
    routedComponents,
    UserProfilePage,
  ],
  entryComponents: [
  ],
  exports: [

  ],
})
export class UserModule {
}
