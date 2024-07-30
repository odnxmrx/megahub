import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesPageComponent } from './titles-page.component';

describe('TitlesPageComponent', () => {
  let component: TitlesPageComponent;
  let fixture: ComponentFixture<TitlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
