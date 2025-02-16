import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "inverse", "purple"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xl"],
    },
    roundness: {
      control: { type: "select" },
      options: ["square", "small", "base", "medium", "large", "xl", "2xl", "circular"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    variant: "purple",
    size: "large",
    roundness: "medium"
  },

  render: () => {
    const variants = ["primary", "success", "warning", "danger", "inverse", "purple"] as const;
    const sizes = ["small", "medium", "large", "xl"] as const;
    const roundnessOptions = ["square", "small", "base", "medium", "large", "xl", "2xl", "circular"] as const;

    return (
      <div className="space-y-8">
        {variants.map((variant) => (
          <div key={variant} className="space-y-4">
            <h2 className="text-xl font-bold capitalize">{variant} Variant</h2>
            <div className="space-y-6">
              {sizes.map((size) => (
                <div key={size} className="space-y-2">
                  <h3 className="text-lg font-semibold capitalize">{size} Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {roundnessOptions.map((roundness) => (
                      <Button
                        key={roundness}
                        variant={variant}
                        size={size}
                        roundness={roundness}
                        className="capitalize"
                      >
                        {roundness}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};