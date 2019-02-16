import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { FeaturesComponent } from './features/features.component';
import { HomesComponent } from './homes/homes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { StoryPictureComponent } from './story-picture/story-picture.component';
import { StoryContentComponent } from './story-content/story-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    RealtorsComponent,
    FeaturesComponent,
    StoryPictureComponent,
    StoryContentComponent,
    HomesComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
