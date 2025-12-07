import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../service/sharedservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paperList: any[] = [];
  selectedFilter = '';
  uniqueSalevelone: any[] = [];
  filteredList: any[] = [];
  p: number = 1;
  page = 1;               // current page
  pageSize = 6;
  selectedSort = '';

  swiperConfig = {
  slidesPerView: 1,
  breakpoints: {
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 }
  }
};
  

  constructor(private service: SharedserviceService) { }
  ngOnInit(): void {
    this.getData();
  }


  // get paginatedPaperList() {
  //   const start = (this.page - 1) * this.pageSize;
  //   return this.paperList.slice(start, start + this.pageSize);
  // }

  getJournalImage(item: any) {
    const baseUrl = 'https://easydash.enago.jp';  // replace with your API base
  
    if (item?.journal?.journalimage?.url) {
      return baseUrl + item.journal.journalimage.url;
    }
  
    // fallback image
    return './assets/images/product.svg';
  }

  getData() {
    // debugger
    this.service.getData().subscribe({
      next: (res: any) => {

        this.paperList = res;
        this.filteredList = res;

        // Get unique publisher names
        this.uniqueSalevelone = [...new Set(
          res.map((x: any) => x?.publisher?.publishername)
        )];


        console.log(' Publisher:', this.uniqueSalevelone);
      },

      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  applyPublisher(event: any) {
    this.selectedFilter = event;

    if (this.selectedFilter) {
      this.filteredList = this.paperList.filter(
        (x) => x?.publisher?.publishername === this.selectedFilter
      );
    } else {
      this.filteredList = this.paperList;
    }


    this.page = 1; // reset pagination
  }


  sortByDate(item: any) {
    
    this.selectedSort = item;
  
    this.filteredList = this.filteredList.sort((a, b) => {
      const hasAImg = a.journal?.journalimage?.url ? 1 : 0;
      const hasBImg = b.journal?.journalimage?.url ? 1 : 0;
  
      // ⭐ First: items WITH images go first
      if (hasAImg !== hasBImg) {
        return hasBImg - hasAImg;
      }
  
      // ⭐ Then: sort by date
      const d1 = new Date(a.published_at).getTime();
      const d2 = new Date(b.published_at).getTime();
  
      return this.selectedSort === 'newest' ? d2 - d1 : d1 - d2;
    });
  
    this.page = 1;
  }
  

  // Pagination getter
  get paginatedFilteredList() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredList.slice(start, start + this.pageSize);
  }

}
