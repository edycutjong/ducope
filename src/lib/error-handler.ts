export class ErrorHandler {
  static sanitize(errorMessage: string): string {
    // Basic sanitization: strip local file paths, IPs, and stack traces
    let clean = errorMessage;
    
    // Remove stack traces (e.g., "at Object.<anonymous> (/Users/...")
    clean = clean.split('\n').filter(line => !line.trim().startsWith('at ')).join('\n');
    
    // Remove local file paths
    clean = clean.replace(/(\/Users\/|\/var\/|\/opt\/|C:\\)[^\s]+/gi, '[REDACTED_PATH]');
    
    // Truncate overly long error messages
    if (clean.length > 200) {
      clean = clean.substring(0, 200) + '...';
    }
    
    return clean.trim();
  }

  static handle(error: Error | string): { message: string, reason: string } {
    console.error("[ErrorHandler] Caught error:", error);
    const rawMessage = typeof error === 'string' ? error : error.message;
    const errorMessage = this.sanitize(rawMessage);
    
    // Extract reason for cope token deployment
    let reason = "unknown";
    if (errorMessage.toLowerCase().includes("slippage")) {
      reason = "slippage_exceeded";
    } else if (errorMessage.toLowerCase().includes("funds")) {
      reason = "insufficient_funds";
    }
    
    return { message: errorMessage, reason };
  }
}
