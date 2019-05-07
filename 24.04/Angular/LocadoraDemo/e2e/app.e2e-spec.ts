import { MEUPROJETOPage } from './app.po';

describe('meuprojeto App', () => {
  let page: MEUPROJETOPage;

  beforeEach(() => {
    page = new MEUPROJETOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
