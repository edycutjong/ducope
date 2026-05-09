import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
  it("renders the footer text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Ducope — Meme Token Launcher • Built for Colosseum Frontier Hackathon 2026/i)
    ).toBeInTheDocument();
  });
});
