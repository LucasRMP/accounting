import { Layout } from './layout'

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  decorators: [
    Story => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
}
