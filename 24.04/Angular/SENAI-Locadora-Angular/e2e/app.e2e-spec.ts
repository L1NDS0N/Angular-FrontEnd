import { SENAILocadoraAngularPage } from './app.po';

describe('senai-locadora-angular App', () => {
  let page: SENAILocadoraAngularPage;

  beforeEach(() => {
    page = new SENAILocadoraAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
