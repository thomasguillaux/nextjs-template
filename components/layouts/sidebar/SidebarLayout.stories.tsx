import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'layouts/SideBarLayout',
  component: SideBarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideBarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideBarLayout> = (args) => (
  <SideBarLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
