import {Component, OnInit} from '@angular/core';

// Import ng2-simple-timer as SimpleTimer
import {SimpleTimer} from 'ng2-simple-timer';

@Component({
	'selector': 'app-component',
	'template': `
		<h3>{{title}}</h3>
		<div><button (click)="subscribeTimer0()">{{timer0button}}  1 sec timer</button>{{counter0}}</div>
		<div><button (click)="subscribeTimer1()">{{timer1button}}  5 sec timer</button>{{counter1}}</div>
		<div><button (click)="subscribeTimer2()">{{timer2button}} 10 sec timer</button>{{counter2}}</div>`,
	// Add SimpleTimer into providers
	'providers': [SimpleTimer]
})
export class AppComponent implements OnInit {
	title = 'Angular2 Simple Timer Service Example';

	counter0 = 0;
	timer0Id: string;
	timer0button = 'Subscribe';

	counter1 = 0;
	timer1Id: string;
	timer1button = 'Subscribe';

	counter2 = 0;
	timer2Id: string;
	timer2button = 'Subscribe';

	// Define SimpleTimer as 'st'
	constructor(private st: SimpleTimer) { }

	ngOnInit() {
		this.subscribeTimer0();
		this.subscribeTimer1();
		this.subscribeTimer2();
	}

	subscribeTimer0() {
		if (this.timer0Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer0Id);
			this.timer0Id = undefined;
			this.timer0button = 'Subscribe';
			console.log('timer 0 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer0Id = this.st.subscribe('1sec', 1, e => this.timer0callback());
			this.timer0button = 'Unsubscribe';
			console.log('timer 0 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer1() {
		if (this.timer1Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer1Id);
			this.timer1Id = undefined;
			this.timer1button = 'Subscribe';
			console.log('timer 1 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer1Id = this.st.subscribe('5sec', 5, e => this.timer1callback());
			this.timer1button = 'Unsubscribe';
			console.log('timer 1 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer2() {
		if (this.timer2Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer2Id);
			this.timer2Id = undefined;
			this.timer2button = 'Subscribe';
			console.log('timer 2 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer2Id = this.st.subscribe('10sec', 10, e => this.timer2callback());
			this.timer2button = 'Unsubscribe';
			console.log('timer 2 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	timer0callback() {
		this.counter0++;
	}

	timer1callback() {
		this.counter1++;
	}

	timer2callback() {
		this.counter2++;
	}
}
