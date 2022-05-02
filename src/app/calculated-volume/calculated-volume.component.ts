import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-calculated-volume',
  templateUrl: './calculated-volume.component.html',
  styleUrls: ['./calculated-volume.component.scss']
})
export class CalculatedVolumeComponent implements OnInit {

  idade: number = 0;
  peso: number = 0;

  constructor(private title: Title,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        // @ts-ignore
        this.idade = +params.get('idade');
        // @ts-ignore
        this.peso = +params?.get('peso');
        // console.log(`idade: ${idade}, peso: ${peso}`);
      });
  }

  ngOnInit(): void {
    this.title.setTitle("Volume calculado");
  }

  backToEditor() {
    const url = `/patientData/idade/${this.idade}/peso/${this.peso}`;

    // console.log('Indo para: ' + url);

    this.router.navigate([url]);
  }

}
