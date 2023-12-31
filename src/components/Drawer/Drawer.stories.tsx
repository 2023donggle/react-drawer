import { Meta, StoryObj } from '@storybook/react';
import Drawer, { Anchor } from './Drawer';
import { Fragment, useState } from 'react';

const meta = {
  title: 'Drawer',
  component: Drawer,
  args: { open: false, onClose: () => {} },
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => {
      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
      <div style={{ flexDirection: 'column' }}>
        <button onClick={() => toggleDrawer(anchor, false)}>Woowacourse</button>
        <button onClick={() => toggleDrawer(anchor, false)}>Missions</button>
        <button onClick={() => toggleDrawer(anchor, false)}>Settings</button>
      </div>
    );

    return (
      <>
        {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
          <Fragment key={anchor}>
            <button onClick={() => toggleDrawer(anchor, true)}>{anchor}</button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={() => toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </>
    );
  },
};
