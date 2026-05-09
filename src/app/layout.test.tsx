import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "mock-inter" }),
  JetBrains_Mono: () => ({ variable: "mock-jetbrains-mono" }),
}));

describe("RootLayout", () => {
  it("renders children within html and body tags", () => {
    const originalConsoleError = console.error;
    console.error = vi.fn();

    render(
      <RootLayout>
        <div data-testid="child-element">Test Child</div>
      </RootLayout>
    );
    
    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    
    console.error = originalConsoleError;
  });

  it("exports correct metadata", () => {
    expect(metadata.title).toBe("Ducope | Dum.fun");
    expect(metadata.description).toBe("When your swap fails, we mint a meme token for you.");
  });
});
