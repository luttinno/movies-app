import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {}

  searchResult: any = [];

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
    });
  }
}
