'use client';

import React, { useState } from 'react';
import createCache, { Options } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import componentsOverrides from '../../material/overrides';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import { themeMaterial } from '../../material/styles';

interface MuiConfigRegistryProps {
  children?: React.ReactNode;
  options: Options;
}

export const MuiConfigRegistry = (props: MuiConfigRegistryProps) => {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  themeMaterial.components = componentsOverrides(themeMaterial);

  console.log("themeMaterial", themeMaterial);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themeMaterial}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={Number(process.env.NEXT_PUBLIC_NOTIFY_STACK || 2)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={Number(process.env.NEXT_PUBLIC_NOTIFY_DURATION || 2000)}
          preventDuplicate
          style={{ padding: 0 }}
        >
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
