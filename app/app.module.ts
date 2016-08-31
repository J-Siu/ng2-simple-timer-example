import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		SimpleTimer
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
