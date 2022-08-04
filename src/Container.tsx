import React, { useMemo } from 'react';

import { useAddress } from './AddressProvider';
import { useAppSettings } from './AppSettingsProvider';
import GlobalCurrencySelector from './GlobalCurrencySelector';
import ThemeSelector from './ThemeSelector';
import PageBody from './PageBody';
import Footer from './Footer';

import { CurrencyConversionsProvider } from './CurrencyConversionsProvider';
import { EXTERNAL_LINKS, ROUTES } from './constants';
import Logo from './ui/Logo';
import Popover from './ui/Popover';
import Account from './Account';

interface ThemeWrapperProps {
  theme: 'light' | 'dark';
  children: ReactNode;
}
function ThemeWrapper({ theme, children }: ThemeWrapperProps) {
  return (
    <div id="theme-wrapper" className={classNames(theme, 'h-full')}>
      <div className="max-w-full bg-canvas-light h-full">{children}</div>
    </div>
  );
}

function Container() {
  const { addresses } = useAddress();

  return (
    <CurrencyConversionsProvider>
      <div className="h-full lg:container mx-auto pb-4 p-4  flex flex-col items-stretch">
        <div className="w-full py-4 mb-1 md:mb-8 flex justify-between items-center">
          <a href={ROUTES.HOME}>
            <Logo />
          </a>
          <div className="flex justify-end gap-1 md:gap-2">
            <ThemeSelector />
            {addresses.length > 0 && <GlobalCurrencySelector />}
            <Account />
          </div>
        </div>
        <div className="w-full h-full">
          <Popover
            title="Help Grow Seedle"
            description="Join over 2000+ contributers who have donated towards building Seedle."
            href={EXTERNAL_LINKS.GITCOIN}
          />
          <PageBody />
        </div>
        <Footer />
      </div>
    </CurrencyConversionsProvider>
  );
}

export default Container;
