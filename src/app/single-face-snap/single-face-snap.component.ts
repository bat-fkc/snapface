import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  
  onToggleSnap() {
    if(!this.faceSnap.userSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.faceSnap.btnContent = "Oops, un Snap!";
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.faceSnap.btnContent = "Oh Snaps !";
    }
    this.faceSnap.userSnapped = !this.faceSnap.userSnapped;
  }
}
