import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../pages/navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithOpenMenu = Template.bind({});
WithOpenMenu.args = {
    isOpen: true,
};

export const WithDifferentLinks = Template.bind({});
WithDifferentLinks.args = {
    links: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
    ],
};
