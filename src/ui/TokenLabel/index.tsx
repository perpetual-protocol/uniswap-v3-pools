import React, { useMemo } from 'react';

export interface TokenProps {
  name?: string | undefined;
  symbol?: string | undefined;
  wrapped?: boolean;
}

function TokenLabel({ name, symbol, wrapped }: TokenProps) {
  const label = useMemo(() => {
    const symbolOrName = symbol || name;
    if (!symbolOrName) {
      return '';
    }

    if (symbolOrName.startsWith('WETH') && !wrapped) {
      return 'ETH';
    }
    if (symbolOrName.startsWith('WMATIC') && !wrapped) {
      return 'MATIC';
    }
    return symbolOrName;
  }, [name, symbol, wrapped]);

  return (
    <span className="pr-1 font-medium text-high text-1" title={name}>
      {label}
    </span>
  );
}

export default TokenLabel;