import type { Meta, StoryObj } from "@storybook/svelte";

import Button from './Button.svelte'

const meta = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large']
        // }
    }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button'
    }
}
