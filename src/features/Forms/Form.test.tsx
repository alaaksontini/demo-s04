import { render } from "@testing-library/react";
import Form from "./Form";
import { describe, expect, it } from "vitest";
import axe from "axe-core";

describe("test form accessibility", () => {
  it("should have no axe violations", async () => {
    const { container } = render(<Form />);
    const results = await axe.run(container);
    console.log(results.violations);
    expect(results.violations).toHaveLength(0);
  });
});
