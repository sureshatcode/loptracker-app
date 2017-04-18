import { LoptrackerAppPage } from './app.po';

describe('loptracker-app App', () => {
  let page: LoptrackerAppPage;

  beforeEach(() => {
    page = new LoptrackerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
