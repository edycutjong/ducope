import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./page";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock framer-motion since it's used in HeroLanding
vi.mock("framer-motion", () => {
  const actual = vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, className, onClick }: React.HTMLAttributes<HTMLDivElement>) => <div className={className} onClick={onClick}>{children}</div>,
      h1: ({ children, className, onClick }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className={className} onClick={onClick}>{children}</h1>,
      p: ({ children, className, onClick }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={className} onClick={onClick}>{children}</p>,
      button: ({ children, className, onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button className={className} onClick={onClick}>{children}</button>,
    },
  };
});

// Mock the dumfunSDK
vi.mock("@/lib/dumfun-sdk", () => {
  return {
    dumFunSDK: {
      createToken: vi.fn().mockResolvedValue({
        ticker: "$TEST_TOKEN",
        address: "TestAddress123"
      })
    }
  };
});

// Mock the ErrorHandler
vi.mock("@/lib/error-handler", () => {
  return {
    ErrorHandler: {
      handle: vi.fn().mockReturnValue({
        message: "Slippage tolerance exceeded",
        reason: "slippage"
      })
    }
  };
});

describe("Home Page", () => {
  beforeEach(() => {
    // Mock scrollIntoView for HeroLanding
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the initial state", () => {
    render(<Home />);
    
    // Check Status Bar
    expect(screen.getByText("SYSTEM ONLINE")).toBeInTheDocument();
    
    // Check Hero Landing
    expect(screen.getByText(/Failed Swap\?/)).toBeInTheDocument();
    
    // Check Demo Section
    expect(screen.getByText("See It In Action")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Swap" })).toBeInTheDocument();
    
    // Check Footer
    expect(screen.getByText(/Ducope — Meme Token Launcher/)).toBeInTheDocument();
  });

  it("handles the swap simulation and displays the meme card", async () => {
    render(<Home />);
    
    const swapButton = screen.getByRole("button", { name: "Swap" });
    
    // Click swap
    fireEvent.click(swapButton);
    
    // Button should show "Swapping..."
    expect(screen.getByText("Swapping...")).toBeInTheDocument();
    
    // Check if error message is displayed (wait for the 1.5s timeout)
    await waitFor(() => {
      expect(screen.getByText("Slippage tolerance exceeded")).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Check if meme card is displayed
    expect(screen.getByText("Swap failed? Let's cope.")).toBeInTheDocument();
    expect(screen.getByText("$TEST_TOKEN")).toBeInTheDocument();
    expect(screen.getByText(/TestAddress123/)).toBeInTheDocument();
    
    // Close the meme card
    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);
    
    expect(screen.queryByText("Swap failed? Let's cope.")).not.toBeInTheDocument();
  });

  it("handles the swap simulation and displays default error if no message", async () => {
    const { ErrorHandler } = await import("@/lib/error-handler");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ErrorHandler.handle as any).mockReturnValueOnce({
      message: "",
      reason: "unknown"
    });

    render(<Home />);
    
    const swapButton = screen.getByRole("button", { name: "Swap" });
    
    // Click swap
    fireEvent.click(swapButton);
    
    // Check if default error message "Swap Failed" is displayed
    await waitFor(() => {
      expect(screen.getByText("Swap Failed")).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
