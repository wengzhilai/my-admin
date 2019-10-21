import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { routedComponents,UserRoutingModule } from './user.routes';
import { UserProfilePage } from './user-profile/user-profile';
import { TranslateModule } from '../../Lib/ngx-translate/public_api';
import { PipesModule } from '../../pipes/pipes.module';
import { Ng2SmartTableModule } from '../../Lib/ng2-smart-table/public-api';


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
