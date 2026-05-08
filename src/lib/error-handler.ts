export class ErrorHandler {
  static handle(error: Error | string): { message: string, reason: string } {
    console.error("[ErrorHandler] Caught error:", error);
    const errorMessage = typeof error === 'string' ? error : error.message;
    
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
