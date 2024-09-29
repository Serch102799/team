import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonIcon, IonButtons, IonButton, IonAvatar, IonTabs, IonTabButton, IonTabBar, IonItem, IonLabel, IonItemDivider, IonItemGroup, IonList, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonItem, IonTabs, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonIcon, IonAvatar, IonTabs, IonTabButton, IonTabBar, IonLabel, IonItemDivider, IonItemGroup, IonList],
})
export class HomePage {
  constructor() {}
}
