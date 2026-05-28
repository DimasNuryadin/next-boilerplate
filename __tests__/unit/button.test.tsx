import { Button } from "@/components/ui/button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });

  it("renders with variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
