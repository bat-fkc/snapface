import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  ngOnInit(): void {

  }

  onToggleSnap() {
    if(!this.faceSnap.userSnapped) {
      this.faceSnap.snaps++;
      this.faceSnap.btnContent = "Oops, un Snap!";
    }
    else {
      this.faceSnap.snaps--;
      this.faceSnap.btnContent = "Oh Snaps !";
    }
    this.faceSnap.userSnapped = !this.faceSnap.userSnapped;
  }
}
