import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {
  concatAll,
  concatMap,
  exhaustMap,
  first,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  scan,
  switchMap,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit, AfterViewInit {
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

  clonedData: any[] = [
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
  @ViewChild('inputText') inputText!: ElementRef<HTMLInputElement>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private httpClient: HttpClient
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  eventListener() {
    //document.addEventListener('click', () => console.log('Clicked!'));
    fromEvent(document, 'click').subscribe(
      () => (this.inputText.nativeElement.value = 'Clicked')
    );
  }

  buttonClick() {
    fromEvent(document, 'click')
      .pipe(scan((count) => count + 1, 0))
      .subscribe((count) => console.log(`Clicked ${count} times`));
  }

  filter() {
    this.data.filter((item) => item.id == 3);
    of(this.data).subscribe((item) => {
      item ? this.inputText.nativeElement.value : '';
    });
    this.changeDetectorRef.detectChanges();
    console.log(this.inputText.nativeElement.value);
  }

  first() {
    // this.inputText.nativeElement.value = '';
    of(1, 2, 3)
      .pipe(first())
      .subscribe((v) => (this.inputText.nativeElement.value = `value: ${v}`));
    this.changeDetectorRef.detectChanges();
  }

  concatAll() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(4))));
    const firstOrder = higherOrder.pipe(concatAll());
    firstOrder.subscribe((x) => console.log(x));
  }

  mapFunction() {
    this.data = [...this.clonedData];
    console.log('data', this.data);

    from(this.data)
      .pipe(
        map((item) => {
          return (item.id = 5);
        })
      )
      .subscribe((val) => {
        console.log('map', val);
      });

    //changed map
    of(this.data).subscribe((item) => {
      console.log('Changed', item);
    });

    from(this.data)
      .pipe(
        map((item) => {
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Map', val);
      });
  }

  mergeMapFunction() {
    this.data = [...this.clonedData];
    from(this.data)
      .pipe(
        mergeMap((item) => {
          console.log('merge map item id', item.id);
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Merge Map', val);
      });
  }

  switchMapFunction() {
    this.data = [...this.clonedData];
    from(this.data)
      .pipe(
        switchMap((item) => {
          console.log('switch map item id', item.id);
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Switch Map', val);
      });
  }

  concatMapFunction() {
    this.data = [...this.clonedData];
    from(this.data)
      .pipe(
        concatMap((item) => {
          console.log('concat map item id', item.id);
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Concat Map', val);
      });
  }

  exhaustMapFunction() {
    this.data = [...this.clonedData];
    from(this.data)
      .pipe(
        exhaustMap((item) => {
          console.log('exhaust map item id', item.id);
          return this.httpClient.get(
            `https://api.github.com/users?per_page=${item.id}`
          );
        })
      )
      .subscribe((val) => {
        console.log('Exhaust Map', val);
      });
  }

  mapToFunction() {
    this.data = [...this.clonedData];
    const a = [1, 2, 3, 4];
    from(a)
      .pipe(mapTo('a'))
      .subscribe((item) => {
        console.log('map to ', item);
      });
    console.log(a);
  }

  switchToFunction() {
    this.data = [...this.clonedData];
  }

  concatToFunction() {
    this.data = [...this.clonedData];
  }

  exhaustToFunction() {
    this.data = [...this.clonedData];
  }

  mergeAllFunction() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(10))));
    const firstOrder = higherOrder.pipe(mergeAll(2));

    firstOrder.subscribe((x) => console.log(x));
  }

  concatAllFunction() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(4))));
    const firstOrder = higherOrder.pipe(concatAll());
    firstOrder.subscribe((x) => console.log(x));
  }
}
