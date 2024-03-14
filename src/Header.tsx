import React from 'react';
import { Header as AppHeader, HeaderName, HeaderNavigation, HeaderMenuItem, Theme, SkipToContent, HeaderMenuButton, HeaderMenu } from '@carbon/react';
import { Switcher } from '@carbon/icons-react';
export const Header = () => (
  <AppHeader aria-label="IBM Platform Name">
    <SkipToContent />
    <HeaderMenuButton aria-label={'Open menu'} />
    <HeaderName href="#" prefix="Milliman">
        Design System
    </HeaderName>
    <HeaderNavigation aria-label="IBM [Platform]">
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu isActive aria-label="Link 4" menuLinkName="Link 4">
        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
  </AppHeader>
);
