import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "shadcn/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <label htmlFor="textarea" className="text-sm font-medium">
        Message
      </label>
      <Textarea
        id="textarea"
        placeholder="Type your message here..."
        rows={5}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
    defaultValue: "This textarea is disabled",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "This is a pre-filled textarea with some content.",
    rows: 4,
  },
};

