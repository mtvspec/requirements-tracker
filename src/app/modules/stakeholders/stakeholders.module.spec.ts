import { StakeholdersModule } from './stakeholders.module';

describe('StakeholdersModule', () => {
  let stakeholdersModule: StakeholdersModule;

  beforeEach(() => {
    stakeholdersModule = new StakeholdersModule();
  });

  it('should create an instance', () => {
    expect(stakeholdersModule).toBeTruthy();
  });
});
