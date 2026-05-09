import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { DumFunSDK } from './dumfun-sdk';

describe('DumFunSDK', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should initialize with NEXT_PUBLIC_RPC_URL if provided', () => {
    process.env.NEXT_PUBLIC_RPC_URL = 'https://custom-rpc.example.com';
    const sdk = new DumFunSDK();
    expect((sdk as unknown as { rpcUrl: string }).rpcUrl).toBe('https://custom-rpc.example.com');
  });

  it('should fallback to mainnet-beta if NEXT_PUBLIC_RPC_URL is not provided', () => {
    delete process.env.NEXT_PUBLIC_RPC_URL;
    const sdk = new DumFunSDK();
    expect((sdk as unknown as { rpcUrl: string }).rpcUrl).toBe('https://api.mainnet-beta.solana.com');
  });

  it('should create a token and return address and a valid ticker', async () => {
    const sdk = new DumFunSDK();
    
    // spy on Math.random to ensure deterministic behavior for coverage
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.5);
    // spy on console.log to suppress stdout
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = await sdk.createToken('slippage_exceeded');
    
    expect(result).toHaveProperty('address');
    expect(result).toHaveProperty('ticker');
    expect(result.address).toMatch(/^Ducope.*kL7p$/);
    
    spy.mockRestore();
    logSpy.mockRestore();
  });
});
