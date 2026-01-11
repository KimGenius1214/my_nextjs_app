import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/ui/shadcn/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/ui/figma/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    const projectRoot = path.resolve(__dirname, "..");
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@",
            replacement: projectRoot,
          },
        ],
      },
      optimizeDeps: {
        include: [
          "class-variance-authority",
          "clsx",
          "tailwind-merge",
          "lucide-react",
        ],
      },
    });
  },
};

export default config;

