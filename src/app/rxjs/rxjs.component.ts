import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {
  concatMap,
  debounce,
  filter,
  map,
  scan,
  switchMap,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  data: any[] = [
    {
      id: 1,
      name: 'abc',
      place: 'toronto',
    },
    {
      id: 2,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 3,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 4,
      name: 'def',
      place: 'alberta',
    },
  ];

  data1: any[] = [
    {
      id: 1,
      name: 'abc',
      place: 'toronto',
    },
    {
      id: 2,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 3,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 4,
      name: 'def',
      place: 'alberta',
    },
  ];

  promises: any[] = [
    {
      id: 1,
      name: 'abc',
      place: 'toronto',
    },
    {
      id: 2,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 3,
      name: 'def',
      place: 'alberta',
    },
    {
      id: 4,
      name: 'def',
      place: 'alberta',
    },
  ];

  dataArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  dataArray2: number[] = [];

  constructor(private httpClient: HttpClient) {}

  //from array of data, separate observable
  //of g
  ngOnInit(): void {
    // const dataFrom = of(this.data).subscribe((item) => {
    //   console.log('items', item);
    // });

    // const dataFrom1 = of(this.data1).subscribe((item) => {
    //   console.log('items', item);
    // });

    const dataFrom = from(this.dataArray2)
      .pipe(
        map((item: any) => {
          return item == item + 4;
        })
      )
      .subscribe((val) => {
        console.log('map values', val);
      });

    // of(this.data).subscribe((item) => {
    //   console.log('map2', item);
    // });

    from(this.data)
      .pipe(
        switchMap((item) => {
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('switch map', val);
      });

    from(this.data)
      .pipe(
        concatMap((item) => {
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Concat Map', val);
      });

    const observable = from([10, 20, 30]);
    const subscription = observable.subscribe((x) => console.log(x));
    // Later:
    subscription.unsubscribe();

    //execute();

    // of(this.data).subscribe((data) => {
    //   console.log(data);
    // });

    of(this.promises)
      .toPromise()
      .then((val: any) => {
        console.log('promises', val);
      });
  }

  // async function execute() {
  //   const source$ = interval(2000).pipe(take(10));
  //   const finalNumber = await lastValueFrom(source$);
  //   console.log(`The final number is ${finalNumber}`);
  // }

  subjects() {}

  switchMapFunction() {
    const switched = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      switchMap((x) => of(x, x * 2, x * 3))
    );
    switched.subscribe((x) => console.log('switch map function', x));
  }

  debounceTime(event: any) {
    fromEvent(event, 'click').pipe(scan((i) => ++i, 1)),
      debounce((i: any) => interval(200 * i));
  }
}
