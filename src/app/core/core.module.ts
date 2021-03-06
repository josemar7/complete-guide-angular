import { NgModule } from 'node_modules/@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingMoule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingMoule
  ],
  exports: [
    AppRoutingMoule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService, RecipeService, DataStorageService, AuthService
  ]
})
export class CoreModule {

}
