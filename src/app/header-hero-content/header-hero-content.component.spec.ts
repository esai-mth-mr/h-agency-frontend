import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHeroContentComponent } from './header-hero-content.component';

describe('HeaderHeroContentComponent', () => {
  let component: HeaderHeroContentComponent;
  let fixture: ComponentFixture<HeaderHeroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderHeroContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
