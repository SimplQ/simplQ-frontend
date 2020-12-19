import React from 'react';
import Nav from './Burger';

export default {
  component: Nav,
  title: 'Nav',
};

export const HomeNav = () => <Nav page="home" />;
export const AdminNav = () => <Nav page="admin" />;
