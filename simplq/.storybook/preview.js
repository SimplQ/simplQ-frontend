import reduxDecorator from '__mocks__/reduxDecorator';
import auth0Decorator from '__mocks__/auth0';

export const decorators = [reduxDecorator, auth0Decorator];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
