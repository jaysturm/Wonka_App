import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { HTTP } from '@ionic-native/http'; // use when going to native app
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GreenhousePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-greenhouse',
  templateUrl: 'greenhouse.html',
})
export class GreenhousePage {
  waterIp: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private http: Http) {
                this.waterIp = '192.168.1.19';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreenhousePage');
  }

  waterZone(zone: number) {
    this.showWatering(zone);
  }

  showWatering(zone: number) {
    let loader = this.loadingCtrl.create({
      content: `watering zone ${zone}...`
    });

    loader.present();

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(`http://${this.waterIp}:5555/water`, {}, options)
      .subscribe((response: Response) => {
        loader.dismiss();
      });
  }

}