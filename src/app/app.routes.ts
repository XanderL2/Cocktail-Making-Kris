import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import { MainComponent } from '@shared/layouts/main/main.component';

import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { DrinkHomePageComponent } from './features/cocktails/pages/drink-home-page/drink-home-page.component';
import { CreateDrinkComponent } from './features/cocktails/pages/create-drink/create-drink.component';

export const routes: Routes = [
    
    {
        path: '',
        component: AuthLayoutComponent, 
        children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: 'drinks',
        component: MainComponent,
        children: [
            { 
                path: '', 
                component: DrinkHomePageComponent,
                data: { layoutType: 'secondary'}
            },
            { 
                path: 'create', 
                component: CreateDrinkComponent,
                data: { layoutType: 'secondary'}
            }

        ]
    },

    { path: '**', redirectTo: '' }
];
