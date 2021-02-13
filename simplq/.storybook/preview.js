import reduxDecorator from '__mocks__/reduxDecorator';

export const decorators = [reduxDecorator];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
