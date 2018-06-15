import { CardGridModule } from './card-grid.module';

describe('CardGridModule', () => {
  let cardGridModule: CardGridModule;

  beforeEach(() => {
    cardGridModule = new CardGridModule();
  });

  it('should create an instance', () => {
    expect(cardGridModule).toBeTruthy();
  });
});
