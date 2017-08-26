import { SocketService } from './../../services';
import { Observable } from 'rxjs/Rx';
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
  sockets_obsrv: Observable<Socket[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private socketService: SocketService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PowerStripPage');
  }

  ionViewWillEnter(){
    this.sockets_obsrv = this.socketService.getSocketData();
  }

  togglePower(socket: number, on: boolean) {
    this.socketService.togglePower(socket, on);
  }

  changeName(socket: number, name: string) {
    if (name === '')
      return;
    
    this.socketService.changeSocketName(socket, name);
  }
}
