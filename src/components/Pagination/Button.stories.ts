import type { Meta, StoryObj } from "@storybook/svelte";
import Button from './Button.svelte'

const meta = {
    title: 'Pagination/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: { type: 'number', min: 1 } },
        selected: { control: 'boolean' }
    }
} satisfies Meta<Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        selected: true,
        label: "1"
    }
}