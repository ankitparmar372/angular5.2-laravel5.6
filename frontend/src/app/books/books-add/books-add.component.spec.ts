import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddComponent } from './books-add.component';

describe('BooksAddComponent', () => {
  let component: BooksAddComponent;
  let fixture: ComponentFixture<BooksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
