import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WeathersComponent } from './weathers/weathers.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: WeathersComponent
			}
		]
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
