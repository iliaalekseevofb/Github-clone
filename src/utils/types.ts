import React from 'react';

// Navigation
export type NavigationLinkItem = {
  path: string,
  text: string,
  disabled: boolean,
}

export type UserNavigationLinkItem = NavigationLinkItem & {
  icon: React.ReactNode
}
