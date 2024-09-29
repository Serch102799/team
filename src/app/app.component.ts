import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, camera, heart, chatbubbleEllipsesOutline, homeOutline, addCircleOutline, personCircleOutline, chatbubbleOutline, paperPlaneOutline, heartCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {

    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, camera, heart, chatbubbleEllipsesOutline, homeOutline, addCircleOutline, personCircleOutline, chatbubbleOutline, paperPlaneOutline, heartCircleOutline });
  }
}
