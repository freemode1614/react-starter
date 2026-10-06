import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { createRoutesStub } from "react-router";
import { expect, test } from "vitest";

import { ErrorBoundary } from "../root";

// Always throws — a throwing function satisfies any return type, so the
// component type-checks while still crashing on render.
function Boom(): ReactElement {
  throw new Error("Kaboom!");
}

test("root ErrorBoundary catches a thrown route error", () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: Boom,
      ErrorBoundary,
    },
  ]);

  render(<Stub initialEntries={["/"]} />);

  // In dev mode the error message and a "back to home" recovery link render.
  expect(screen.getByText("Kaboom!")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute(
    "href",
    "/",
  );
});
