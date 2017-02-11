import { Ng2routerPage } from './app.po';

describe('ng2router App', function() {
  let page: Ng2routerPage;

  beforeEach(() => {
    page = new Ng2routerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
