import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,ValidationErrors  } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heat-index',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,ReactiveFormsModule,MatButtonModule,CommonModule],
  templateUrl: './heat-index.component.html',
  styleUrl: './heat-index.component.scss'
})
export class HeatIndexComponent {
  heatIndexForm: FormGroup | undefined
  htIndex:any;

  ngOnInit(): void {
  this.heatIndexForm = new FormGroup({
    temperature: new FormControl (null, Validators.required),
    temperatureUnit: new FormControl ('°C', Validators.required), // Prednastavená hodnota na °C
    relativeHumidity: new FormControl (null, [Validators.required, Validators.min(0), Validators.max(100)])
  }, { validators: this.temperatureValidator });
  }

  temperatureValidator(formGroup: FormGroup): ValidationErrors | null {
    const temperature = formGroup.get('temperature')?.value;
    const temperatureUnit = formGroup.get('temperatureUnit')?.value;
    if ((temperatureUnit === '°C' && temperature < 26.7) || (temperatureUnit === '°F' && temperature < 80)) {
      return { temperatureInvalid: true };
    }
    return null;
  }


 
  calculateHeatIndex(): void {
    if (this.heatIndexForm.valid) {
      const temperature = this.heatIndexForm.get('temperature')?.value;
      const relativeHumidity = this.heatIndexForm.get('relativeHumidity')?.value;

      let T: number;
      if (this.heatIndexForm.get('temperatureUnit')?.value === '°C') {
        // Prevedieme teplotu na stupne Fahrenheit, pretože vzorec očakáva teplotu vo °F
        T = (temperature * 9 / 5) + 32;
      } else {
        T = temperature;
      }

      // Vzorec pre výpočet indexu tepla
      const heatIndex = (-42.379 +
        2.04901523 * T +
        10.14333127 * relativeHumidity -
        0.22475541 * T * relativeHumidity -
        6.83783 * 0.001 * Math.pow(T, 2) -
        5.481717 * 0.01 * Math.pow(relativeHumidity, 2) +
        1.22874 * 0.001 * Math.pow(T, 2) * relativeHumidity +
        8.5282 * 0.0001 * T * Math.pow(relativeHumidity, 2) -
        1.99 * 0.000001 * Math.pow(T, 2) * Math.pow(relativeHumidity, 2)
      );
      this.htIndex = heatIndex.toFixed(2)

    }
  }


}