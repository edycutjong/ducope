import { GET } from "./route";
import { describe, it, expect } from "vitest";

describe("Health API Route", () => {
  it("returns status ok and system info", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe("ok");
    expect(data).toHaveProperty("timestamp");
    expect(data).toHaveProperty("uptime");
    expect(data).toHaveProperty("environment");
  });
});
