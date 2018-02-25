import { Observable, Subject } from 'rxjs/Rx';
import { Socket } from './../../models';
import { HttpService } from './../';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
    socketIp: string;

    constructor(private http: HttpService) {
        this.socketIp = '73.229.243.193';
    }

    getSocketData(): Observable<Socket[]> {
        let subject = new Subject<Socket[]>();

        this.http.get(`http://${this.socketIp}:5555/sockets`)
            .subscribe(resp => {
                subject.next(resp.json());
                subject.complete();
            });

        return subject.asObservable();
    }

    /**@function togglePower
     * - toggle power on or off for a specified power strip socket
     * @param {number} socket number of socket to toggle
     * @param {boolean} on on or off, true or false
     * @returns {Observable<Socket[]>}
     * - observable of Socket array
     * - Socket array conatains all current sockets and their metadata
     */
    togglePower(socket: number, on: boolean): Observable<Socket[]> {
        let subject = new Subject<Socket[]>();

        console.log(`toggle power => socket ${socket}, power ${on}`);

        this.http.post(`http://${this.socketIp}:5555/sockets`, {
            powerOn: on,
            socket: socket
        }).subscribe(resp => {
            console.log(`toggle power response => ${resp}`);

            subject.next(resp.json());
            subject.complete();
        });

        return subject.asObservable();
    }

    changeSocketName(socket: number, name: string): Observable<Socket[]> {
        let subject = new Subject<Socket[]>();

        console.log(`changing name for socket ${socket} to ${name}`);

        this.http.post(`http://${this.socketIp}:5555/sockets/name`, {
            name: name,
            socket: socket
        }).subscribe(resp => {
            console.log(`socket name change response => ${resp}`);

            subject.next(resp.json());
            subject.complete();
        });

        return subject.asObservable();
    }
}