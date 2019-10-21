import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { TranslateModule } from '../../Lib/ngx-translate/public_api';
import { ComponentsModule } from '../../components/components.module';
import { QuartzTaskRoutingModule, routedComponents } from './quartz-task.routes';
import { EditModelComponent } from '../../components/edit-model/edit-model.component';
import {
  NbCardModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from '../../Lib/ng2-smart-table/public-api';

@NgModule({
  entryComponents: [
    EditModelComponent
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    QuartzTaskRoutingModule,
    TranslateModule,
    ComponentsModule,

    NbCardModule,

  ],
  declarations: [
    routedComponents
  ],

  exports: [
  ],
})
export class QuartzTaskModule {
}
