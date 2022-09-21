import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { Post } from '../types/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  chosenPost?: Post;

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  choosePost(post: Post): void {
    console.log(post);
    this.chosenPost = post;
  }

  getPosts(): void {
    this.placeholderService.getPosts() // this line returns an observable - observable could be nothing or something. We have to check
      .subscribe(data => { // we subscribe to an observable to see if it got info
        console.log(data);
        this.posts = data;
      });
  }
}
