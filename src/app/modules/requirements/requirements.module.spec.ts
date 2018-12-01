import { RequirementsModule } from './requirements.module';

describe('RequirementsModule', () => {
  let requirementsModule: RequirementsModule;

  beforeEach(() => {
    requirementsModule = new RequirementsModule();
  });

  it('should create an instance', () => {
    expect(requirementsModule).toBeTruthy();
  });
});
