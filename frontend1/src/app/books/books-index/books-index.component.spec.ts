import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIndexComponent } from './books-index.component';

describe('BooksIndexComponent', () => {
  let component: BooksIndexComponent;
  let fixture: ComponentFixture<BooksIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
