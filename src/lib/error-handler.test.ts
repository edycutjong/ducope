import { describe, it, expect, vi } from 'vitest';
import { ErrorHandler } from './error-handler';

describe('ErrorHandler', () => {
  it('should extract errorMessage from a string', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = ErrorHandler.handle('A random error occurred');
    
    expect(consoleSpy).toHaveBeenCalled();
    expect(result).toEqual({ message: 'A random error occurred', reason: 'unknown' });
    
    consoleSpy.mockRestore();
  });

  it('should extract errorMessage from an Error object', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const error = new Error('Test error message');
    const result = ErrorHandler.handle(error);
    
    expect(result).toEqual({ message: 'Test error message', reason: 'unknown' });
    
    consoleSpy.mockRestore();
  });

  it('should identify slippage reason', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = ErrorHandler.handle('Swap failed: SLIPPAGE tolerance exceeded');
    
    expect(result.reason).toBe('slippage_exceeded');
    
    consoleSpy.mockRestore();
  });

  it('should identify insufficient funds reason', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = ErrorHandler.handle(new Error('insufficient FUNDS available'));
    
    expect(result.reason).toBe('insufficient_funds');
    
    consoleSpy.mockRestore();
  });
});
