import { Component } from '@angular/core';

@Component({
  selector: 'app-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css'],
})
export class CardProfilComponent {
  name = 'makhloufi';
  firstname = 'achref';
  job = 'teacher';
  path = 'rotating_card_profile.png';
}
