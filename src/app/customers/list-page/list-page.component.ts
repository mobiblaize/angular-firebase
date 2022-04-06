import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  customers!: any;

  constructor(private seo: SeoService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.seo.generateTags({
      title: "Customer's page",
      description: 'A list of all customers'
    });
    this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });
  }

}
