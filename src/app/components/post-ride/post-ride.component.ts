import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-post-ride',
  templateUrl: './post-ride.component.html',
  styleUrls: ['./post-ride.component.css']
})
export class PostRideComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public agreeFbProfile: FormControl = new FormControl(false);
  public agreeTerms: FormControl = new FormControl(false);
  public disable1 = false;
  public disable2 = false;
  public disable3 = false;
  private ngDestroy$: Subject<void> = new Subject();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      willing: 3,
      price1: null,
      price2: null,
      price3: null,
    });
    this.form.get('willing').valueChanges.pipe(
      startWith(this.form.get('willing').value),
      takeUntil(this.ngDestroy$),
    ).subscribe((val: number) => {
      const disable = (d1: boolean, d2: boolean, d3: boolean) => {
        this.disable1 = d1;
        this.disable2 = d2;
        this.disable3 = d3;
      };
      switch (val) {
        case 0: {
          disable(true, true, true);
          break;
        }
        case 1: {
          disable(false, true, true);
          break;
        }
        case 2: {
          disable(false, false, true);
          break;
        }
        case 3: {
          disable(false, false, false);
          break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
