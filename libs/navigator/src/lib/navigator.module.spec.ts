import { waitForAsync, TestBed } from '@angular/core/testing';
import { NavigatorModule } from './navigator.module';

describe('NavigatorModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NavigatorModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NavigatorModule).toBeDefined();
  });
});
