import { MultiStepperVModule } from './multi-stepper-v.module';

describe('MultiStepperVModule', () => {
  let multiStepperVModule: MultiStepperVModule;

  beforeEach(() => {
    multiStepperVModule = new MultiStepperVModule();
  });

  it('should create an instance', () => {
    expect(multiStepperVModule).toBeTruthy();
  });
});
