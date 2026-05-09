import { render, screen, fireEvent } from "@testing-library/react";
import { HeroLanding } from "./HeroLanding";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock framer-motion to avoid animation complexities in tests
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

describe("HeroLanding", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("renders the hero content", () => {
    render(<HeroLanding />);
    
    expect(screen.getByText("The Ultimate Error-State Minter")).toBeInTheDocument();
    expect(screen.getByText(/Failed Swap\?/)).toBeInTheDocument();
    expect(screen.getByText("You're Now a Founder.")).toBeInTheDocument();
    expect(screen.getByText(/Don't let slippage ruin your day/)).toBeInTheDocument();
    expect(screen.getByText("Try the Demo")).toBeInTheDocument();
  });

  it("scrolls to demo section when button is clicked", () => {
    // We need to create the element because document.getElementById is used
    const demoSection = document.createElement("div");
    demoSection.id = "demo-section";
    document.body.appendChild(demoSection);

    const scrollIntoViewMock = vi.fn();
    demoSection.scrollIntoView = scrollIntoViewMock;

    render(<HeroLanding />);
    
    const button = screen.getByText("Try the Demo").closest("button");
    fireEvent.click(button!);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    // Cleanup
    document.body.removeChild(demoSection);
  });
});
