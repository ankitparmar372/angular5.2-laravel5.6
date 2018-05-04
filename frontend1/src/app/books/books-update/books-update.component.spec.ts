import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksUpdateComponent } from './books-update.component';

describe('BooksUpdateComponent', () => {
  let component: BooksUpdateComponent;
  let fixture: ComponentFixture<BooksUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
