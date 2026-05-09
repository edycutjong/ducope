import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import { describe, it, expect } from "vitest";

describe("AboutPage", () => {
  it("renders the about page content", () => {
    render(<AboutPage />);
    
    expect(screen.getByText("Ducope")).toBeInTheDocument();
    expect(screen.getByText("Meme Token Launcher")).toBeInTheDocument();
    expect(screen.getByText("WHAT IT DOES")).toBeInTheDocument();
    expect(screen.getByText(/Turn your DeFi losses into viral meme tokens/)).toBeInTheDocument();
    expect(screen.getByText("TECH STACK")).toBeInTheDocument();
    expect(screen.getByText("Next.js 16")).toBeInTheDocument();
    expect(screen.getByText("HACKATHON")).toBeInTheDocument();
    expect(screen.getByText(/Colosseum Frontier Hackathon 2026/)).toBeInTheDocument();
    expect(screen.getByText(/Launch Dashboard/)).toBeInTheDocument();
  });
});
