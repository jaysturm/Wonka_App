import { SocketService } from './../../services';
import { Socket } from './../../models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PowerStripPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-power-strip',
  templateUrl: 'power-strip.html',
})
export class PowerStripPage {
  sockets: Socket[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private socketService: SocketService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PowerStripPage');
  }

  ionViewWillEnter(){
    this.socketService.getSocketData()
      .subscribe(sockets => this.sockets = sockets);
  }

  togglePower(socket: number, on: boolean) {
    let selected = this.sockets.filter(s => s.socket == socket)[0];
    this.socketService.togglePower(socket, selected.state);
  }

}
