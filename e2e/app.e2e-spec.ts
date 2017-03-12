import { ProjetoAngularCliPage } from './app.po';

describe('projeto-angular-cli App', () => {
  let page: ProjetoAngularCliPage;

  beforeEach(() => {
    page = new ProjetoAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
