import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsServices: FaceSnapsService) {
    
  }

  ngOnInit(): void {

  }

  onToggleSnap() {
    if(!this.faceSnap.userSnapped) {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.faceSnap.btnContent = "Oops, un Snap!";
    }
    else {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.faceSnap.btnContent = "Oh Snaps !";
    }
    this.faceSnap.userSnapped = !this.faceSnap.userSnapped;
  }
}
