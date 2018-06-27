import { NavHeaderModule } from './nav-header.module';

describe('NavHeaderModule', () => {
  let navHeaderModule: NavHeaderModule;

  beforeEach(() => {
    navHeaderModule = new NavHeaderModule();
  });

  it('should create an instance', () => {
    expect(navHeaderModule).toBeTruthy();
  });
});
