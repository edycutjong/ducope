import { render, screen } from "@testing-library/react";
import { StatusBar } from "./StatusBar";
import { describe, it, expect } from "vitest";

describe("StatusBar", () => {
  it("renders status information", () => {
    render(<StatusBar />);
    
    expect(screen.getByText("SYSTEM ONLINE")).toBeInTheDocument();
    expect(screen.getByText("v1.0.0")).toBeInTheDocument();
    expect(screen.getByText(/LATENCY:/)).toBeInTheDocument();
    expect(screen.getByText("12ms")).toBeInTheDocument();
    expect(screen.getByText(/UPTIME:/)).toBeInTheDocument();
    expect(screen.getByText("99.9%")).toBeInTheDocument();
  });
});
