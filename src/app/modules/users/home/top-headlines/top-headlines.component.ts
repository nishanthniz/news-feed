import { Component, HostListener, OnInit } from '@angular/core';
import { ListingAPIRequest, TopHeadlinesData } from 'src/app/core/interfaces';
import { UsersService } from 'src/app/core/services';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss'],
})
export class TopHeadlinesComponent implements OnInit {
  apiReqDtls: ListingAPIRequest = {
    page: 1,
    limit: 30,
    search: '',
  };
  totalHeadlinesCnt: number = 0;
  headlinesListData: TopHeadlinesData[] = [];
  loading: boolean = false;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getTopHeadlinesData();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMoreHeadlines();
    }
  }

  loadMoreHeadlines() {
    if (this.totalHeadlinesCnt > this.headlinesListData.length) {
      this.apiReqDtls.page++;
      this.getTopHeadlinesData();
    }
  }

  getTopHeadlinesData() {
    this.loading = true;
    this.usersService
      .getTopHeadlines(this.apiReqDtls)
      .subscribe((headlinesResp: any) => {
        this.loading = false;
        this.totalHeadlinesCnt = headlinesResp?.totalResults || 0;
        this.headlinesListData = [
          ...this.headlinesListData,
          ...(headlinesResp?.articles || []),
        ];
      });
  }
}
