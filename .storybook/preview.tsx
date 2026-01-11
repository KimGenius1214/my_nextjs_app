import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import { StorybookProviders } from "./StorybookProviders";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <React.StrictMode>
        <StorybookProviders>
          <Story />
        </StorybookProviders>
      </React.StrictMode>
    ),
  ],
};

export default preview;

