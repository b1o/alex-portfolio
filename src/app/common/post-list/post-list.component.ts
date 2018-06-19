import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: PostModel[] = [
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      title: 'example title',
      description: 'example desc',
      image:
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
