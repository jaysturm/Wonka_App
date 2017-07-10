import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GreenhousePage } from './../greenhouse/greenhouse';
import { PowerStripPage } from './../power-strip/power-strip';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GreenhousePage;
  tab3Root = PowerStripPage;

  constructor() {

  }
}
