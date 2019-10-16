import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TreeModule } from 'angular-tree-component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TranslateModule } from '../Lib/ngx-translate/public_api';
import { QRCodeModule } from '../Lib/angularx-qrcode/QRCodeModule';
import { PipesModule } from '../pipes/pipes.module';
import { ThemeModule } from '../@theme/theme.module';
import { QueryEditComponent } from './query-edit/query-edit.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { TableEditComponent } from './table-edit/table-edit.component';
import { LookModelComponent } from './look-model/look-model.component';
import { QueryFilterComponent } from './query-filter/query-filter.component';
import { EditModelComponent } from './edit-model/edit-model.component';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { FileUploadModule } from '../Lib/ng2-file-upload';


@NgModule({
  entryComponents: [EditModelComponent, QueryEditComponent, RoleEditComponent, TableEditComponent,LookModelComponent,QueryFilterComponent],
  declarations: [EditModelComponent, QueryEditComponent, RoleEditComponent, InputSelectComponent, TableEditComponent, LookModelComponent,QueryFilterComponent],
  imports: [
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PipesModule,
    ThemeModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    TreeModule,
    Ng2SmartTableModule,
    QRCodeModule,
    BsDatepickerModule.forRoot(),
    FileUploadModule,
  ],
  exports: [
    EditModelComponent,
    QueryEditComponent,
    RoleEditComponent,
    TableEditComponent,
    LookModelComponent,
    QueryFilterComponent,
  ]
})
export class ComponentsModule { }
