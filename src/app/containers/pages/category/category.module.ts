import {ModuleWithProviders, NgModule} from '@angular/core';

import {CategoryComponent} from './category.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ComponentsModule} from 'app/components/components.module';
import {CategoryService} from './category.service';
import {CategoryAddComponent,
        CategoryEditComponent} from './components';



@NgModule({
  imports: [
    Ng2SmartTableModule,
    ComponentsModule,
  ],
  declarations: [
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  entryComponents:[
    CategoryAddComponent,
    CategoryEditComponent
  ],
  providers:[
    CategoryService
  ]
})
export class CategoryModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CategoryModule,
      providers: [CategoryService]
    };
  }
}
