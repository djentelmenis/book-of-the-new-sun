import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import ExampleComponent, { Props } from './ExampleComponent'

export default {
  title: 'Molecules/ExampleComponent',
  component: ExampleComponent
} as Meta

const Template: Story<Props> = (args) => <ExampleComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Example component text'
}
