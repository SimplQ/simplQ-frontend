import React from 'react';

// import { queue } from '__mocks__/data';
import AdminHeaderSection from './AdminHeaderSection';
import styles from './admin.module.scss';

export default {
  component: AdminHeaderSection,
  title: 'AdminHeaderSection',
  args: {
    queueId: 'xxx-xxx',
    queueName: 'Queue Name',
    description: 'Some Description',
  },
};

const Template = (args) => (
  // TODO: Redesign css so the component does not depend on parent.
  <div className={styles['admin-content']}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <AdminHeaderSection {...args} />
  </div>
);

export const Default = Template.bind({});
