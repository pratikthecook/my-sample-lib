import { MySampleLibDemoPage } from './app.po';

describe('my-sample-lib-demo App', () => {
  let page: MySampleLibDemoPage;

  beforeEach(() => {
    page = new MySampleLibDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
