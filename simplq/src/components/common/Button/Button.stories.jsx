import React from 'react';
import StandardButton, { ForkOnGithubButton, RefreshButton } from './Button';

export default {
  component: StandardButton,
  title: 'Button',
};

export const Normal = () => <StandardButton>Click me</StandardButton>;
export const GithubFork = ForkOnGithubButton;
export const Refresh = RefreshButton;
