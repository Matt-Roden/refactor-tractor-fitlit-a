import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration';

describe.only('Hydration', function () {
  let hydration, id;

  beforeEach(() => {
    id = 1;
    hydration = new Hydration(hydrationData, id);
  });

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydrate', function () {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to hold hydration data', () => {
    expect(hydration.hydrationData).to.deep.equal(hydrationData);
  });

  it("should be able to store a single user's hydration data", () => {
    console.log(hydration.userHydrationData);
    expect(hydration.userHydrationData).to.deep.equal();
  });
});
