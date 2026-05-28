import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { toast } from "sonner";
import { Button } from "./button";
import { Toaster } from "./sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toast",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => <Button onClick={() => toast("This is a toast message")}>Show Toast</Button>,
};

export const Success: Story = {
  render: () => <Button onClick={() => toast.success("Saved successfully!")}>Success Toast</Button>,
};

export const Error: Story = {
  render: () => (
    <Button variant="destructive" onClick={() => toast.error("Something went wrong!")}>
      Error Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Event created", {
          description: "Monday, January 1st at 9:00 AM",
        })
      }
    >
      Toast with Description
    </Button>
  ),
};
