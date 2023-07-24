import type { Meta, StoryObj } from '@storybook/svelte';

import Arrows from './Arrows.svelte';

const meta = {
    title: 'Pagination/Arrows',
    component: Arrows,
    tags: ['autodocs'],
    argTypes: {
        variants: {
            options: ['left', 'right'],
            control: 'radio'
        }
    }
} satisfies Meta<Arrows>

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
    args: {
        variants: 'left'
    }
}