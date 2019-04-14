import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  public saving = false;
  private ngDestroy$: Subject<void> = new Subject();
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      willing: 2,
      price1: 25.00,
      price2: 20.00,
      price3: 15.00,
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

  postRide(): void {
    if (this.agreeFbProfile.value && this.agreeTerms.value) {
      this.saving = true;
      setTimeout(() => {
        this.saving = false;
        this.router.navigate(['/joined/ride']);
      }, 1000);
    }
  }
}
