import type { Meta, StoryObj } from '@storybook/svelte';
import Pagination from './Pagination.svelte';

const meta = {
    title: 'Pagination/Pagination',
    component: Pagination,
    tags: ['autodocs']
} satisfies Meta<Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {

}