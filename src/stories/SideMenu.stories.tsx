import SideMenu from "../components/SideMenu/SideMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/SideMenu",
  component: SideMenu,
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  render: () => <SideMenu />,
};
