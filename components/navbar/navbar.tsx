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
                '& .nextui-navbar-container': {
                    background: '$background',
                    borderBottom: 'none',
                },
            }}
        >
            <Navbar.Brand>
               <div style={{ marginRight: '10px' }}>
                  <AcmeLogo />
               </div>
                <Text b color="inherit" hideIn="xs">
                    Sideline
                </Text>
            </Navbar.Brand>

            <Navbar.Content >
                <Switch
                     color="error"
                     checked={isDark}
                     onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                     
                />
            </Navbar.Content>
        </Navbar>
    );
};
