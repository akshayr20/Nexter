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
import { StoriesComponent } from './stories/stories.component';
import { StoryPictureComponent } from './stories/story-picture/story-picture.component';
import { StoryContentComponent } from './stories/story-content/story-content.component';

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
    FooterComponent,
    StoriesComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
