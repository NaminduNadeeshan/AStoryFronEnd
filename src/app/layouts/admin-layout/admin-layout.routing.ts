import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CreateStoryComponent } from '../../pages/create-story/create-story.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CreateEpisodesComponent } from 'src/app/pages/create-episodes/create-episodes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'create-story',   component: CreateStoryComponent},
    { path: 'add-episode/:id/:storyName',  component: CreateEpisodesComponent},
    { path: 'add-episode',  component: CreateEpisodesComponent}
];
