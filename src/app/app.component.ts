import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Deconnexion', url: '/deconnexion'},
    { title: 'Authentication', url: '/Authentification' },
    { title: 'Profile', url: '/profile'},
    { title: 'Inscription', url: '/inscription' },
    { title: 'DetailContact', url: '/detail-contact'},
    { title: 'ListeContacts', url: '/liste-contacts'},
    { title: 'Ajouter Contact', url: '/ajouter-contact'},

  ];
  constructor() {}
}
