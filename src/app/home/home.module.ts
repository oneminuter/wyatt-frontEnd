import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TopRightMenuComponent } from './top-right-menu/top-right-menu.component';
import { CommentComponent } from './comment/comment.component';
import { ShareMenuComponent } from './share-menu/share-menu.component';
import { GiftRangkingListComponent } from './gift-rangking-list/gift-rangking-list.component';
import { FollowComponent } from './follow/follow.component';
import { HotRangkingListComponent } from './hot-rangking-list/hot-rangking-list.component';
import { UserComponent } from './user/user.component';
import { StoryComponent } from './story/story.component';
import { LikeComponent } from './like/like.component';
import { MyFollowComponent } from './my-follow/my-follow.component';
import { MessageComponent } from './message/message.component';
import { DraftComponent } from './draft/draft.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditStoryContentComponent } from './edit-story-content/edit-story-content.component';
import { RechargeComponent } from './recharge/recharge.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    IndexComponent,
    LoginComponent,
    TopRightMenuComponent,
    CommentComponent,
    ShareMenuComponent,
    GiftRangkingListComponent,
    FollowComponent,
    HotRangkingListComponent,
    UserComponent,
    StoryComponent,
    LikeComponent,
    MyFollowComponent,
    MessageComponent,
    DraftComponent,
    AddStoryComponent,
    AddRoleComponent,
    EditStoryComponent,
    EditRoleComponent,
    EditStoryContentComponent,
    RechargeComponent,
    SearchComponent,
    SearchResultComponent
  ]
})
export class HomeModule { }
