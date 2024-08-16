import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two is four', () => {
    expect(2+2).toEqual(4);
  });

  it('Object values Returns false', () => {
    const data = { name: "Karanvir" }
    expect(data).toBe({name:"Karanvir"})
  });

  it('Object values Returns true', () => {
    const data = { name: "Karanvir" }
    expect(data).toEqual({name:"Karanvir"})
  });
  // https://chatgpt.com/share/77c0638c-3424-4fcf-8987-ab0fb5a1eab3
  // Use toBe when you need to assert that two variables are strictly equal,
  // which includes being the same object in memory.
  
  // Use toEqual when you need to assert that two variables have the same content, 
  //particularly useful for comparing objects and arrays.
  

});
