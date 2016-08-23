import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SimpleTimerModule } from 'ng2-simple-timer';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		SimpleTimerModule.forRoot()
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
