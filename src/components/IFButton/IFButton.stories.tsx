import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import IFButton, { IFButtonProps } from './IFButton'

export default {
  title: 'Atoms/IFButton',
  component: IFButton
} as Meta

const Template: Story<IFButtonProps> = (args) => <IFButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'If button test text - primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'If button test text - secondary'
}
