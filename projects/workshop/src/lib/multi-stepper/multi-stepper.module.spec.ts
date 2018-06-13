import { MultiStepperModule } from './multi-stepper.module';

describe('MultiStepperModule', () => {
  let multiStepperModule: MultiStepperModule;

  beforeEach(() => {
    multiStepperModule = new MultiStepperModule();
  });

  it('should create an instance', () => {
    expect(multiStepperModule).toBeTruthy();
  });
});
