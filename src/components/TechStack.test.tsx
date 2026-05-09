import { render, screen } from "@testing-library/react";
import { TechStack } from "./TechStack";
import { describe, it, expect } from "vitest";

describe("TechStack", () => {
  it("renders all tech stack items", () => {
    render(<TechStack />);
    
    expect(screen.getByText("Next.js 16")).toBeInTheDocument();
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("Tailwind v4")).toBeInTheDocument();
    expect(screen.getByText("Solana")).toBeInTheDocument();
  });
});
