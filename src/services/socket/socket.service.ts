import { Observable, Subject } from 'rxjs/Rx';
import { Socket } from './../../models';
import { HttpService } from './../';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
    socketIp: string;

    constructor(private http: HttpService) {
        this.socketIp = '192.168.1.21';
    }

    getSocketData(): Observable<Socket[]> {
        let subject = new Subject();

        this.http.get(`http://${this.socketIp}:5555/sockets`)
            .subscribe(resp => {
                subject.next(resp.json());
                subject.complete();
            });

        return subject;
    }

    togglePower(socket: number, on: boolean): Observable<Socket[]> {
        let subject = new Subject();

        console.log(`toggle power => socket ${socket}, power ${on}`);

        this.http.post(`http://${this.socketIp}:5555/sockets`, {
            powerOn: on,
            socket: socket
        }).subscribe(resp => {
            console.log(`toggle power respose => ${resp}`);

            subject.next(resp.json());
            subject.complete();
        });

        return subject;
    }
}