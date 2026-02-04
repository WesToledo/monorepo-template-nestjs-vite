import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#eef3ff" },
          100: { value: "#dce6ff" },
          200: { value: "#bdcfff" },
          300: { value: "#8fabff" },
          400: { value: "#5a7cff" },
          500: { value: "#1152d4" },
          600: { value: "#0e41a9" },
          700: { value: "#0c3280" },
          800: { value: "#092359" },
          900: { value: "#061638" },
        },
      },
      fonts: {
        heading: { value: "Inter, system-ui, sans-serif" },
        body: { value: "Inter, system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        "bg.canvas": {
          value: { base: "#f6f6f8", _dark: "#101622" },
        },
        "bg.surface": {
          value: { base: "{colors.white}", _dark: "#1a202c" },
        },
        "text.primary": {
          value: { base: "#111318", _dark: "{colors.white}" },
        },
        "text.secondary": {
          value: { base: "#616f89", _dark: "{colors.gray.400}" },
        },
        brand: {
          value: {
            base: "{colors.primary.500}",
            _dark: "{colors.primary.400}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
