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

  manhaTotal: number = 0;
  manhaSro: number = 0;
  manhaOutros: number = 0;

  tardeSro: number = 0;
  tardeOutros: number = 0;
  tardeTotal: number = 0;

  noiteSro: number = 0;
  noiteOutros: number = 0;
  noiteTotal: number = 0;

  sroTotal: number = 0;
  outrosTotal: number = 0;

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

        this.calcularHidratacao();
      });
  }

  ngOnInit(): void {
    this.title.setTitle("Volume calculado");
  }

  backToEditor() {
    const url = `/patientData/peso/${this.peso}`;

    // console.log('Indo para: ' + url);

    this.router.navigate([url]);
  }

  calcularHidratacao() {
    const total: number = 60 * this.peso;

    this.manhaTotal = total * 0.5;
    this.manhaSro = 1 / 3 * this.manhaTotal;
    this.manhaOutros = this.manhaTotal - this.manhaSro;

    this.tardeTotal = total * 0.35;
    this.tardeSro = 1/3 * this.tardeTotal;
    this.tardeOutros = this.tardeTotal - this.tardeSro;

    this.noiteTotal = total * 0.15;
    this.noiteSro = 1/3 * this.noiteTotal;
    this.noiteOutros = this.noiteTotal - this.noiteSro;

    this.sroTotal = this.manhaSro + this.tardeSro + this.noiteSro;
    this.outrosTotal = this.manhaOutros + this.tardeOutros + this.noiteOutros;
  }

}
