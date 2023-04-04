import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@lmdc-ignite-ds-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Elemento box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
