import { RouterModule,Routes } from '@angular/router';

import {HomeComponent}          from './root/HomeComponent';
import {GraphComponent}          from './graph/graph.component';
import {GreenhouseListComponent}  from './greenhouse-list/greenhouse-list.component';
import {GreenhouseDetailsComponent}  from './greenhouse-details/greenhouse-details.component';
import {DiseaseDetailsComponent} from './disease-details/disease-details.component';
import {DiseaseUpdateComponent} from './disease-update/disease-update.component';
import {DiseaseNewComponent} from './disease-new/disease-new.component';
import {DiseaseDeleteComponent} from './disease-delete/disease-delete.component';
import {DiseaseListComponent} from './disease-list/disease-list.component';
import {GreenhouseEnvironmentComponent}  from './greenhouse-environment/greenhouse-environment.component';
import {FertigationListComponent} from './fertigation-list/fertigation-list.component';
import {FertigationDetailsComponent} from './fertigation-details/fertigation-details.component';
import {FertigationUpdateComponent} from './fertigation-update/fertigation-update.component';
import {FertigationNewComponent} from './fertigation-new/fertigation-new.component';
import {FertilizerListComponent} from './fertilizer-list/fertilizer-list.component';
import {FertilizerNewComponent} from './fertilizer-new/fertilizer-new.component';
import {FertilizerUpdateComponent} from './fertilizer-update/fertilizer-update.component';
import {FertilizerDetailComponent} from './fertilizer-detail/fertilizer-detail.component';
import {PestListComponent} from './pest-list/pest-list.component';
import {PestDetailsComponent} from './pest-details/pest-details.component';
import {PestUpdateComponent} from './pest-update/pest-update.component';
import {PestNewComponent} from './pest-new/pest-new.component';
import {PestDeleteComponent } from './pest-delete/pest-delete.component';
import {HarvestingComponent} from './harvesting/harvesting.component';
import {GreenhouseCropComponent} from './greenhouse-crop/greenhouse-crop.component';
import {GreenhouseCropDetailComponent} from './greenhouse-crop-detail/greenhouse-crop-detail.component';
import {GreenhouseCropInsertComponent} from './greenhouse-crop-insert/greenhouse-crop-insert.component';
import {GreenhouseCropUpdateComponent} from './greenhouse-crop-update/greenhouse-crop-update.component';
import {GreenhouseCropDeleteComponent } from './greenhouse-crop-delete/greenhouse-crop-delete.component';
import {ControlPanelComponent} from './control-panel/control-panel.component';
import {ClimateMonitoringComponent} from './climate-monitoring/climate-monitoring.component';
import {PesticideAddComponent} from './pesticide-add/pesticide-add.component';
import {PesticideUpdateComponent} from './pesticide-update/pesticide-update.component';
import {PesticideDeleteComponent } from './pesticide-delete/pesticide-delete.component';
import {StoreInventoryComponent} from './store-inventory/store-inventory.component';
import {StoreInventoryUpdateComponent} from './store-inventory-update/store-inventory-update.component';
import {StoreInventoryNewComponent} from './store-inventory-new/store-inventory-new.component';
import {StoreInventoryDetailsComponent} from './store-inventory-details/store-inventory-details.component';
import {StoreInventoryDeleteComponent } from './store-inventory-delete/store-inventory-delete.component';
import {PesticideListComponent} from './pesticides-list/pesticides-list.component';
import {PesticideDetailsComponent}  from './pesticide-details/pesticide-detail.component';
import {IngredientListComponent}  from './ingredient-list/ingredient-list.component';
import {IngredientDetailsComponent} from './ingredient-details/ingredient-detail.component';
import {IngredientAddComponent} from './ingredient-add/ingredient-add.component';
import {IngredientUpdateComponent} from './ingredient-update/ingredient-update.component';
import {IngredientDeleteComponent } from './ingredient-delete/ingredient-delete.component';
import {routes as childRoutes, ProductsComponent} from './root/ProductsComponent';
import {TankScheduleListComponent} from './tankSchedule-list/tankSchedule-list.component';
import {TankScheduleDetailsComponent} from './tankSchedule-details/tankSchedule-details.component';
import {TankScheduleAddComponent} from './tankSchedule-add/tankSchedule-add.component';
import {TankScheduleUpdateComponent} from './tankSchedule-update/tankSchedule-update.component';
import {TankScheduleDeleteComponent } from './tank-schedule-delete/tank-schedule-delete.component';
import {NutritionDeficiencyListComponent} from './nutrition-deficiency-list/nutrition-deficiency-list.component';
import {NutritionDeficiencyDetailsComponent} from './nutrition-deficiency-details/nutrition-deficiency-details.component';
import {NutritionDeficiencyUpdateComponent} from './nutrition-deficiency-update/nutrition-deficiency-update.component';
import {NutritionDeficiencyNewComponent} from './nutrition-deficiency-new/nutrition-deficiency-new.component';
 
import {RequiredClimateComponent} from './requiredClimate-List/requiredClimate.component';
import {RequiredClimateDetailsComponent} from './requiredClimate-Detail/requiredClimate-details.component';
import {RequiredClimateInsertComponent} from './requiredClimate-Insert/requiredClimate-Insert.component';
import {RequiredClimateUpdateComponent} from './requiredClimate-Update/requiredClimate-Update.component'; 
import {IrrigationListComponent} from './irrigation-list/irrigation-list.component';
import {IrrigationDetailsComponent} from './irrigation-details/irrigation-details.component';
import {IrrigationNewComponent} from './irrigation-new/irrigation-new.component';
import {IrrigationUpdateComponent} from './irrigation-update/irrigation-update.component';
import {IrrigationDeleteComponent} from './irrigation-delete/irrigation-delete.component';
import {NutritionDeficiencyDeleteComponent} from './nutrition-deficiency-delete/nutrition-deficiency-delete.component'
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { EnvironmentNewComponent } from './environment-new/environment-new.component';
import { EnvironmentUpdateComponent } from './environment-update/environment-update.component';
import { EnvironmentDeleteComponent } from './environment-delete/environment-delete.component';
import { YieldAddComponent } from './yield-add/yield-add.component';
import { YieldListComponent } from './yield-list/yield-list.component';
import { YieldUpdateComponent } from './yield-update/yield-update.component';
import { YieldDetailComponent } from './yield-detail/yield-detail.component';
import { YieldDeleteComponent } from './yield-delete/yield-delete.component';
import { TankNewComponent } from './tank-new/tank-new.component';
import { TankUpdateComponent } from './tank-update/tank-update.component';
import { TankDetailComponent } from './tank-detail/tank-detail.component';
import { TankDeleteComponent } from './tank-delete/tank-delete.component';
import { TankListComponent } from './tank-list/tank-list.component';

import { SolutionNewComponent } from './solution-new/solution-new.component';
import { SolutionListComponent } from './solution-list/solution-list.component';
import { SolutionUpdateComponent } from './solution-update/solution-update.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { SolutionDeleteComponent } from './solution-delete/solution-delete.component';



import { TaskNewComponent } from './task-new/task-new.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';


export const routes: Routes = [
    

    { path: 'solution',component:SolutionListComponent},
    { path: 'solutiondetail/:solutionId',component:SolutionDetailsComponent},
    { path: 'solutionupdate/:solutionId',component:SolutionUpdateComponent},
    { path: 'solutiondelete/:solutionId',component:SolutionDeleteComponent},
    { path: 'solutionadd',component:SolutionNewComponent},


    { path: '', redirectTo: 'greenhouse', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'greenhouse', component: GreenhouseListComponent },
    { path: 'greenhousedetails/:greenhouseId', component: GreenhouseDetailsComponent },
    { path: 'yieldlist',component:YieldListComponent},
    { path: 'yielddetails/:yieldId',component:YieldDetailComponent},
    { path: 'yieldupdate/:yieldId',component:YieldUpdateComponent},
    { path: 'yielddelete/:yieldId',component:YieldDeleteComponent},
    { path: 'yieldadd',component:YieldAddComponent},
    { path: 'products', component: ProductsComponent, children: childRoutes },
    { path: 'climate', component: GreenhouseEnvironmentComponent },
    { path: 'climatemonitoring', component: ClimateMonitoringComponent },
    { path: 'pesticides',component:PesticideListComponent},
    { path: 'ingredients',component:IngredientListComponent},
    { path: 'ingredientdetail/:ingredientsID',component:IngredientDetailsComponent},
    { path: 'ingredientnew',component:IngredientAddComponent},
    { path: 'ingredientupdate/:ingredientsID',component:IngredientUpdateComponent},
    { path: 'ingredientdelete/:ingredientsID',component:IngredientDeleteComponent},
    { path: 'fertigation', component: FertigationListComponent },
    { path: 'harvesting', component: HarvestingComponent },
    { path: 'inventory', component: StoreInventoryComponent},
    { path: 'iteminsert', component: StoreInventoryNewComponent },
    { path: 'itemupdate/:itemId', component: StoreInventoryUpdateComponent },
    { path: 'itemdetails/:itemId', component: StoreInventoryDetailsComponent },
    { path: 'itemdelete/:itemId', component: StoreInventoryDeleteComponent },
    { path: 'croplist',component: GreenhouseCropComponent},
    { path: 'cropdetail/:cropId',component: GreenhouseCropDetailComponent},
    { path: 'cropinsert',component: GreenhouseCropInsertComponent},
    { path: 'cropupdate/:cropId', component: GreenhouseCropUpdateComponent},
    { path: 'cropdelete/:cropId',component:GreenhouseCropDeleteComponent},
    { path: 'diseaselist',component: DiseaseListComponent},
    { path: 'deletedisease/:diseaseId',component: DiseaseDeleteComponent},
    { path: 'updatedisease/:diseaseId', component: DiseaseUpdateComponent},
    { path: 'diseasedetail/:diseaseId', component: DiseaseDetailsComponent },
    { path: 'newdisease', component: DiseaseNewComponent},
    { path: 'control', component: ControlPanelComponent },
    { path: 'pesticideadd',component:PesticideAddComponent},
    { path: 'pesticideupdate/:pesticideID',component:PesticideUpdateComponent},
    { path: 'pesticidedetail/:pesticideID',component:PesticideDetailsComponent},
    { path: 'pesticidedelete/:pesticideID',component:PesticideDeleteComponent},
 
    { path: 'tankSchedule',component:TankScheduleListComponent},
    { path: 'tankScheduledetail/:tankscheduleId',component:TankScheduleDetailsComponent},
    { path: 'tankScheduleadd',component:TankScheduleAddComponent},
    { path: 'tankScheduleupdate/:tankscheduleId',component:TankScheduleUpdateComponent},
    { path: 'tankScheduledelete/:tankscheduleId',component:TankScheduleDeleteComponent},
    { path: 'nutritiondeficiencylist', component: NutritionDeficiencyListComponent},
    { path: 'nutritiondetail/:nutritionId', component: NutritionDeficiencyDetailsComponent },
    { path: 'nutritiondelete/:nutritionId', component: NutritionDeficiencyDeleteComponent },
    { path: 'nutritionupdate/:nutritionId', component: NutritionDeficiencyUpdateComponent},
    { path: 'nutritioninsert', component: NutritionDeficiencyNewComponent},
    { path: 'fertilizerlist', component: FertilizerListComponent},
    { path: 'fertilizerdetail/:FertilizerId', component: FertilizerDetailComponent},
    { path: 'fertilizerupdate/:FertilizerId', component: FertilizerUpdateComponent},
    { path: 'fertilizernew', component: FertilizerNewComponent},
    { path: 'pestdetail/:pestId', component: PestDetailsComponent },
    { path: 'pestupdate/:pestId', component: PestUpdateComponent },
    { path: 'pestdelete/:pestId', component: PestDeleteComponent },
    { path: 'newpest', component: PestNewComponent },
    { path: 'pests', component: PestListComponent },
 
    { path: 'requiredClimate/:id',component:RequiredClimateDetailsComponent},
    { path: 'requiredClimateInsert',component:RequiredClimateInsertComponent},
    { path: 'requiredClimateUpdate',component:RequiredClimateUpdateComponent},
    { path: 'requiredClimate',component:RequiredClimateComponent},
    { path: 'irrigation', component: IrrigationListComponent },
    { path: 'irrigationdetail/:id', component: IrrigationDetailsComponent },
    { path: 'irrigationnew', component: IrrigationNewComponent },
    { path: 'irrigationupdate', component: IrrigationUpdateComponent },
    { path: 'environment', component: EnvironmentListComponent },
    { path: 'environmentdetail/:climateId', component: EnvironmentDetailComponent },
    { path: 'environmentupdate/:climateId', component: EnvironmentUpdateComponent },
    { path: 'environmentdelete/:climateId', component: EnvironmentDeleteComponent },
    { path: 'environmentnew', component: EnvironmentNewComponent },
    { path: 'irrigation', component: IrrigationListComponent },
    { path: 'irrigationdetail/:climateId', component: IrrigationDetailsComponent },
    { path: 'irrigationupdate/:climateId', component: IrrigationUpdateComponent },
    { path: 'irrigationdelete/:climateId', component: IrrigationDeleteComponent },
    { path: 'irrigationnew', component: EnvironmentNewComponent },
    { path: 'tank', component: TankListComponent },
    { path: 'tankdetail/:tankId', component: TankDetailComponent },
    { path: 'tankupdate/:tankId', component: TankUpdateComponent },
    { path: 'tankdelete/:tankId', component: TankDeleteComponent },
    { path: 'tankadd', component: TankNewComponent },
    
    { path: 'task',component:TaskListComponent},
    { path: 'taskdetail/:taskId',component:TaskDetailsComponent},
    { path: 'taskupdate/:taskId',component:TaskUpdateComponent},
    { path: 'taskdelete/:taskId',component:TaskDeleteComponent},
    { path: 'taskadd',component:TaskNewComponent}
    
     
];
