import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RegisterForm } from "./register-form";

const meta: Meta<typeof RegisterForm> = {
  title: "Shared/RegisterForm",
  component: RegisterForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
