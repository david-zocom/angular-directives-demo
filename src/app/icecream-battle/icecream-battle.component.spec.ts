import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamBattleComponent } from './icecream-battle.component';

describe('IcecreamBattleComponent', () => {
  let component: IcecreamBattleComponent;
  let fixture: ComponentFixture<IcecreamBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecreamBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
