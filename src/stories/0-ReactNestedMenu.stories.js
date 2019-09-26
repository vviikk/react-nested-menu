import React from 'react';
import { action } from '@storybook/addon-actions';
import NestedMenu from '..';
import menuData from '../__mocks__/menu.mocks.js'

export default {
  title: 'Nested Menu',
}
export const DefaultNestedMenu = () => (
  <NestedMenu menuData={menuData} />
);

