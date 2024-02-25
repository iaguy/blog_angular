import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {data_fake} from '../../data_fake/data_fake';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  coverPhoto = '';
  @Input()
  titleDescription = '';
  @Input()
  titleCover = '';
  private id: string | null = '0';

  constructor( private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(value =>  this.id = value.get("id"));
    this.setValue(this.id);
  }

  setValue(id: string | null) {
    const result = data_fake.filter(
      value => value.id.toString() == id)[0]

      this.coverPhoto = result.coverPhoto;
      this. titleDescription = result.titleDescription;
      this.titleCover = result.titleCover;
  }

}
