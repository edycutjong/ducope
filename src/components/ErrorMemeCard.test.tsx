import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorMemeCard } from "./ErrorMemeCard";
import { describe, it, expect, vi } from "vitest";

describe("ErrorMemeCard", () => {
  const mockTokenInfo = {
    ticker: "COPE",
    address: "DumfunAddress123456789",
  };

  it("renders the meme card with token info", () => {
    render(<ErrorMemeCard tokenInfo={mockTokenInfo} onClose={() => {}} />);
    
    expect(screen.getByText("Swap failed? Let's cope.")).toBeInTheDocument();
    expect(screen.getByText("COPE")).toBeInTheDocument();
    expect(screen.getByText(/DumfunAddress123456789/)).toBeInTheDocument();
    expect(screen.getByText("View on Dum.fun")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const handleClose = vi.fn();
    render(<ErrorMemeCard tokenInfo={mockTokenInfo} onClose={handleClose} />);
    
    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
