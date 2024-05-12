import { Navbar, Text, Switch } from '@nextui-org/react';
import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { AcmeLogo } from './logo';

export const Nav = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    return (
        <Navbar
            isBordered
            css={{
                'overflow': 'hidden',
                'padding': '0 10px',  // Add padding to prevent content from touching the edges on small screens
                '& .nextui-navbar-container': {
                    background: '$background',
                    borderBottom: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',  // Distribute space between brand and content
                },
                '@media (max-width: 640px)': {  // Responsive adjustments for very small screens
                    '& .nextui-navbar-container': {
                        flexDirection: 'row',  // Keep horizontal layout on small screens
                    },
                },
            }}
        >
            <Navbar.Brand css={{
                display: 'flex',  // Ensure flex layout for proper alignment
                alignItems: 'center',  // Center logo and text vertically
            }}>
                <div style={{ marginRight: '10px' }}>
                    <AcmeLogo />
                </div>
             
            </Navbar.Brand>

            <Navbar.Content>
                <Switch
                    color="error"
                    checked={isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                />
            </Navbar.Content>
        </Navbar>
    );
};
