import { ConstruhogarAdminPage } from './app.po';

describe('construhogar-admin App', () => {
  let page: ConstruhogarAdminPage;

  beforeEach(() => {
    page = new ConstruhogarAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
