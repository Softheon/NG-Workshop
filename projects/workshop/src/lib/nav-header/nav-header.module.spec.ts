import { HeaderModule } from './nav-header.module';

describe('NavHeaderModule', () => {
  let headerModule: HeaderModule;

  beforeEach(() => {
    headerModule = new HeaderModule();
  });

  it('should create an instance', () => {
    expect(headerModule).toBeTruthy();
  });
});
