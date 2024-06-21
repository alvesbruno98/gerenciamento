import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  item: any = { name: '', description: '' };
  itemId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.itemId = +this.route.snapshot.paramMap.get('id');
    if (this.itemId !== 0) {
      this.item = this.dataService.getItem(this.itemId);
    }
  }

  saveItem() {
    if (this.itemId === 0) {
      this.dataService.addItem(this.item);
    } else {
      this.dataService.updateItem(this.item);
    }
    this.router.navigate(['/tabs/tab1']);
  }
}
