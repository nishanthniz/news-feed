import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TopHeadlinesData } from 'src/app/core/interfaces';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent {
  @Input() feedDetails = {} as TopHeadlinesData;
  shortDesc: string = '';
  isShowMoreDesc: boolean = false;
  placeholderImg: string = "https://via.placeholder.com/600x300.png?text=Image+Not+Found";

  getDescValue(){
    if (this.feedDetails.description && this.feedDetails.description?.length > 100) {
      this.shortDesc = this.feedDetails.description.substring(0, 50);
    }
    return this.shortDesc ? this.shortDesc : this.feedDetails.description;
  }

  getNewsAge(createdDate: string | Date): string {
    createdDate = new Date(createdDate);
    const now: Date = new Date();
    const ageInSeconds = Math.round((now.getTime() - createdDate.getTime()) / 1000);
    if (ageInSeconds < 60) {
      return "Just now";
    } else if (ageInSeconds < 3600) {
      const minutes = Math.round(ageInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (ageInSeconds < 86400) {
      const hours = Math.round(ageInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const options: any = { day: 'numeric', month: 'long' };
      return createdDate.toLocaleDateString('en-US', options);
    }
  }
}
