import { TodoAppChrisPage } from './app.po';

describe('todo-app-chris App', function() {
  let page: TodoAppChrisPage;

  beforeEach(() => {
    page = new TodoAppChrisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
