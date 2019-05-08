import { ExemploFormularioPage } from './app.po';

describe('exemplo-formulario App', () => {
  let page: ExemploFormularioPage;

  beforeEach(() => {
    page = new ExemploFormularioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
