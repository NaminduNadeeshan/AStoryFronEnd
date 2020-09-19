import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CreateStoryComponent } from '../../pages/create-story/create-story.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderChartComponent } from 'src/app/components/header-chart/header-chart.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkEditorComponent } from 'src/app/components/ck-editor/ck-editor.component';
import { CreateEpisodesComponent } from 'src/app/pages/create-episodes/create-episodes.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TokenInterceptor } from 'src/app/Api/token.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoryTableComponent } from 'src/app/components/story-table/story-table.component';


@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    CKEditorModule,
    CommonModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    CreateStoryComponent,
    HeaderChartComponent,
    CkEditorComponent,
    CreateEpisodesComponent,
    StoryTableComponent
  ],
})

export class AdminLayoutModule {}
