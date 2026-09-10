/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from 'react';

interface PaddleContextType {
  isReady: boolean;
  paddleInstance: any;
}

const PaddleContext = createContext<PaddleContextType>({
  isReady: true,
  paddleInstance: null,
});

export function usePaddle() {
  return useContext(PaddleContext);
}

interface PaddleProviderProps {
  children: React.ReactNode;
}

export function PaddleProvider({ children }: PaddleProviderProps) {
  return (
    <PaddleContext.Provider value={{ isReady: true, paddleInstance: null }}>
      {children}
    </PaddleContext.Provider>
  );
}
