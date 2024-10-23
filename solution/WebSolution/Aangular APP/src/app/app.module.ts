import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 


import { RouterModule,Routes }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { routes}                  from './route';
 


import {EnvironmentService} from './services/environmentService';
import {TaskService} from './services/taskService';
import {TankService} from './services/tankService';
import {GreenhouseService} from './services/greenhouseservice';
import {StoreService} from './services/storeService';
import {DiseaseService} from './services/diseaseService';
import {CropService} from './services/cropService';
import {PestService} from './services/pestService';
import {PesticideService} from './services/pesticideService';
import {TankScheduleService } from './services/tankScheduleService';
import {IngredientService} from './services/ingredientService';
import {NutritionService} from'./services/nutritionService';
import {FertilizerService} from'./services/fertilizerService';
import {YieldService} from './services/yieldService';
import {RequiredClimateService} from './services/requiredClimateService';
import {IrrigationService} from './services/irrigationService';
import {SolutionService} from './services/solutionService';
 

import {AppComponent } from './app.component';
import {HomeComponent}            from './root/HomeComponent';
import {MainComponent}            from './root/products/MainComponent';
import {ProductsComponent}        from './root/ProductsComponent';
import {InterestComponent}        from './root/products/InterestComponent';
import {FlowerComponent}          from './root/products/FlowerComponent';
import {ByIdComponent}            from './root/products/ByIdComponent';
import {ProductListComponent } from './product-list/product-list.component';
import {ProductItemComponent } from './product-item/product-item.component';
import {CustomerNewComponent } from './customer-new/customer-new.component';
import {CustomerValidateComponent } from './customer-validate/customer-validate.component';
import {GreenhouseEnvironmentComponent } from './greenhouse-environment/greenhouse-environment.component';

import {TaskNewComponent } from './task-new/task-new.component';
import {TaskUpdateComponent } from './task-update/task-update.component';
import {TaskListComponent } from './task-list/task-list.component';
import {PesticideListComponent} from './pesticides-list/pesticides-list.component';
import {PesticideAddComponent} from './pesticide-add/pesticide-add.component';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {IngredientAddComponent} from './ingredient-add/ingredient-add.component';
import {IngredientUpdateComponent} from './ingredient-update/ingredient-update.component';
import {PesticideDetailsComponent}  from './pesticide-details/pesticide-detail.component';
import {PesticideUpdateComponent} from './pesticide-update/pesticide-update.component';
import {TaskDetailsComponent } from './task-details/task-details.component';
import {GreenhouseListComponent } from './greenhouse-list/greenhouse-list.component';
import {GreenhouseDetailsComponent } from './greenhouse-details/greenhouse-details.component';
import {GreenhouseFertigationComponent } from './greenhouse-fertigation/greenhouse-fertigation.component';
import {GreenhouseIrrigationComponent } from './greenhouse-irrigation/greenhouse-irrigation.component';
import {GreenhouseClimateComponent } from './greenhouse-climate/greenhouse-climate.component';
import {GreenhouseCropComponent } from './greenhouse-crop/greenhouse-crop.component';
import {PestListComponent } from './pest-list/pest-list.component';
import {PestDetailsComponent } from './pest-details/pest-details.component';
import {PestUpdateComponent } from './pest-update/pest-update.component';
import {PestNewComponent } from './pest-new/pest-new.component';
import {PesticideDeleteComponent } from './pesticide-delete/pesticide-delete.component';
import { SolutionNewComponent } from './solution-new/solution-new.component';
import { SolutionListComponent } from './solution-list/solution-list.component';
import { SolutionUpdateComponent } from './solution-update/solution-update.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { SolutionDeleteComponent } from './solution-delete/solution-delete.component';
import {DiseaseListComponent } from './disease-list/disease-list.component';
import {DiseaseDetailsComponent } from './disease-details/disease-details.component';
import {DiseaseUpdateComponent } from './disease-update/disease-update.component';
import {DiseaseNewComponent } from './disease-new/disease-new.component';
import {GreenhouseCalendarComponent } from './greenhouse-calendar/greenhouse-calendar.component';
import {IrrigationListComponent} from './irrigation-list/irrigation-list.component';
import {IrrigationDetailsComponent} from './irrigation-details/irrigation-details.component';
import {IrrigationNewComponent} from './irrigation-new/irrigation-new.component';
import {IrrigationDeleteComponent} from './irrigation-delete/irrigation-delete.component';
import {IrrigationUpdateComponent} from './irrigation-update/irrigation-update.component';
import {FertigationListComponent } from './fertigation-list/fertigation-list.component';
import {FertigationDetailsComponent } from './fertigation-details/fertigation-details.component';
import {FertigationUpdateComponent } from './fertigation-update/fertigation-update.component';
import {FertigationNewComponent } from './fertigation-new/fertigation-new.component';
import {NutritionDeficiencyListComponent } from './nutrition-deficiency-list/nutrition-deficiency-list.component';
import {NutritionDeficiencyDetailsComponent } from './nutrition-deficiency-details/nutrition-deficiency-details.component';
import {NutritionDeficiencyUpdateComponent } from './nutrition-deficiency-update/nutrition-deficiency-update.component';
import {NutritionDeficiencyNewComponent } from './nutrition-deficiency-new/nutrition-deficiency-new.component';
import {SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import {SMEDashboardComponent } from './sme-dashboard/sme-dashboard.component';
import {ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import {StakeholderDashboardComponent } from './stakeholder-dashboard/stakeholder-dashboard.component';
import {VisitorDashboardComponent } from './visitor-dashboard/visitor-dashboard.component';
import {GraphComponent } from './graph/graph.component';
import {FertilizerListComponent } from './fertilizer-list/fertilizer-list.component';
import {FertilizerNewComponent } from './fertilizer-new/fertilizer-new.component';
import {FertilizerUpdateComponent } from './fertilizer-update/fertilizer-update.component';
import {FertilizerDetailComponent } from './fertilizer-detail/fertilizer-detail.component';
import {HarvestingComponent } from './harvesting/harvesting.component';
import {ControlPanelComponent } from './control-panel/control-panel.component';
import {ClimateMonitoringComponent } from './climate-monitoring/climate-monitoring.component';
import {IngredientDetailsComponent} from './ingredient-details/ingredient-detail.component';
import {GreenhouseCropDetailComponent } from './greenhouse-crop-detail/greenhouse-crop-detail.component';
import {GreenhouseCropUpdateComponent } from './greenhouse-crop-update/greenhouse-crop-update.component';
import {GreenhouseCropInsertComponent } from './greenhouse-crop-insert/greenhouse-crop-insert.component';
import {TankScheduleListComponent } from './tankSchedule-list/tankSchedule-list.component';
import {TankScheduleDetailsComponent } from './tankSchedule-details/tankSchedule-details.component';
import {TankScheduleAddComponent } from './tankSchedule-add/tankSchedule-add.component';
import {TankScheduleUpdateComponent } from './tankSchedule-update/tankSchedule-update.component';
import {StoreInventoryComponent} from './store-inventory/store-inventory.component';
import {StoreInventoryUpdateComponent} from './store-inventory-update/store-inventory-update.component';
import {StoreInventoryNewComponent} from './store-inventory-new/store-inventory-new.component';
import {StoreInventoryDetailsComponent} from './store-inventory-details/store-inventory-details.component';
 
import {RequiredClimateComponent} from './requiredClimate-List/requiredClimate.component';
import {RequiredClimateDetailsComponent} from './requiredClimate-Detail/requiredClimate-details.component';
import {RequiredClimateInsertComponent} from './requiredClimate-Insert/requiredClimate-Insert.component';
import {RequiredClimateUpdateComponent} from './requiredClimate-Update/requiredClimate-Update.component'; 
import {UserService } from './services/user.service';
import {DiseaseDeleteComponent } from './disease-delete/disease-delete.component';
import {NutritionDeficiencyDeleteComponent } from './nutrition-deficiency-delete/nutrition-deficiency-delete.component';
import { GreenhouseCropDeleteComponent } from './greenhouse-crop-delete/greenhouse-crop-delete.component';
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { EnvironmentNewComponent } from './environment-new/environment-new.component';
import { EnvironmentUpdateComponent } from './environment-update/environment-update.component';
import { EnvironmentDeleteComponent } from './environment-delete/environment-delete.component';
import { IngredientDeleteComponent } from './ingredient-delete/ingredient-delete.component';
import { YieldAddComponent } from './yield-add/yield-add.component';
import { YieldListComponent } from './yield-list/yield-list.component';
import { YieldUpdateComponent } from './yield-update/yield-update.component';
import { YieldDetailComponent } from './yield-detail/yield-detail.component';
import { YieldDeleteComponent } from './yield-delete/yield-delete.component';
import { TankScheduleDeleteComponent } from './tank-schedule-delete/tank-schedule-delete.component';
import { TankNewComponent } from './tank-new/tank-new.component';
import { TankUpdateComponent } from './tank-update/tank-update.component';
import { TankDetailComponent } from './tank-detail/tank-detail.component';
import { TankDeleteComponent } from './tank-delete/tank-delete.component';
import { TankListComponent } from './tank-list/tank-list.component';
import { PestDeleteComponent } from './pest-delete/pest-delete.component';
import { StoreInventoryDeleteComponent } from './store-inventory-delete/store-inventory-delete.component';
 
import { TaskDeleteComponent } from './task-delete/task-delete.component';

 
@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent, ProductListComponent,FertilizerListComponent,FertilizerNewComponent,
    CustomerNewComponent,FertilizerUpdateComponent,FertilizerDetailComponent,StoreInventoryUpdateComponent,
    CustomerValidateComponent, StoreInventoryNewComponent,PestDeleteComponent,StoreInventoryDeleteComponent,
    GreenhouseListComponent,GreenhouseDetailsComponent,  GreenhouseFertigationComponent,TaskDeleteComponent,
    GreenhouseIrrigationComponent,GreenhouseCalendarComponent, GreenhouseClimateComponent,RequiredClimateUpdateComponent,
    GreenhouseCropComponent, GreenhouseEnvironmentComponent,EnvironmentListComponent,RequiredClimateDetailsComponent,
    PestListComponent, PestDetailsComponent,PestUpdateComponent,PestNewComponent,RequiredClimateComponent,
    SolutionListComponent, SolutionDetailsComponent, SolutionUpdateComponent,SolutionNewComponent,RequiredClimateInsertComponent,
    DiseaseListComponent, DiseaseDetailsComponent, DiseaseUpdateComponent, DiseaseNewComponent,SolutionDeleteComponent,
    TaskNewComponent, TaskUpdateComponent, TaskListComponent, TaskDetailsComponent,PesticideAddComponent,
    TankScheduleListComponent,TankScheduleDetailsComponent,TankScheduleAddComponent,TankScheduleUpdateComponent,
    IrrigationListComponent,NutritionDeficiencyListComponent,NutritionDeficiencyDetailsComponent,
    FertigationListComponent, FertigationDetailsComponent,  FertigationUpdateComponent, FertigationNewComponent,
    NutritionDeficiencyListComponent, NutritionDeficiencyDetailsComponent, NutritionDeficiencyUpdateComponent, NutritionDeficiencyNewComponent,
    SupervisorDashboardComponent, SMEDashboardComponent, ManagerDashboardComponent,StakeholderDashboardComponent, VisitorDashboardComponent,
    GraphComponent,PesticideListComponent,PesticideDetailsComponent,IngredientListComponent,IngredientDetailsComponent,
    IrrigationDetailsComponent,IrrigationNewComponent,IrrigationUpdateComponent,
    HomeComponent, ProductsComponent,MainComponent, InterestComponent, FlowerComponent,ByIdComponent, StoreInventoryComponent,
    HarvestingComponent, ControlPanelComponent, ClimateMonitoringComponent,IrrigationDeleteComponent,
    StoreInventoryDetailsComponent,PesticideUpdateComponent,IngredientAddComponent,IngredientUpdateComponent,
    GreenhouseCropDetailComponent, GreenhouseCropUpdateComponent, GreenhouseCropInsertComponent, DiseaseDeleteComponent, NutritionDeficiencyDeleteComponent, PesticideDeleteComponent, GreenhouseCropDeleteComponent, EnvironmentDetailComponent, EnvironmentNewComponent, EnvironmentUpdateComponent, EnvironmentDeleteComponent, IngredientDeleteComponent, YieldAddComponent, YieldListComponent, YieldUpdateComponent, YieldDetailComponent, YieldDeleteComponent, TankScheduleDeleteComponent, TankNewComponent, TankUpdateComponent, TankDetailComponent, TankDeleteComponent, TankListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
      
  ],
  providers: [
              EnvironmentService,
              TaskService,
              GreenhouseService,
              StoreService,
              PesticideService,
              PestService,
              IngredientService,
              DiseaseService,
              TankScheduleService,
              NutritionService,
              CropService,
              TankService,
              SolutionService,
              YieldService,
              FertilizerService,
              IrrigationService,
              RequiredClimateService, 
              UserService,
              {provide:APP_BASE_HREF,useValue:'/'},
              {provide:LocationStrategy,useClass:HashLocationStrategy} 
             ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
