import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { expect, test } from "vitest";

import About from "../routes/about";

// Route components rely on router context (Link, useParams, …), so wrap them
// in a stub router instead of rendering them bare.
const Stub = createRoutesStub([{ path: "/", Component: About }]);

test("renders the About page", () => {
  render(<Stub initialEntries={["/"]} />);
  expect(
    screen.getByRole("heading", { level: 1, name: "About" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute(
    "href",
    "/",
  );
});
