import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration';
import singleUserHydrationTestData from '../src/data/single-user-hydration-data';

describe('Hydration', () => {
  let hydration, id;

  beforeEach(() => {
    id = 1;
    hydration = new Hydration(hydrationData, id);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydrate', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to hold hydration data', () => {
    expect(hydration.hydrationData).to.deep.equal(hydrationData);
  });

  it("should be able to store a single user's hydration data", () => {
    expect(hydration.userHydrationData).to.deep.equal(
      singleUserHydrationTestData
    );
  });

  it("should be able to return a single user's hydration for any week", () => {
    expect(hydration.getUserOzByWeek('2019/09/07')).to.deep.equal({
      date: [
        '2019/09/01',
        '2019/09/02',
        '2019/09/03',
        '2019/09/04',
        '2019/09/05',
        '2019/09/06',
        '2019/09/07',
      ],
      ounces: [46, 64, 28, 69, 63, 93, 47],
    });
  });
});
