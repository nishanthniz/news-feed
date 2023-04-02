import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeedsComponent } from './top-headlines/feeds/feeds.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TopHeadlinesComponent, HomeComponent, FeedsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
