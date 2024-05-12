import React, { useState, useEffect } from 'react';
import { Button, Divider, FormElement, Input, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const Hero: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInputChange = (event: React.ChangeEvent<FormElement>): void => {
        setEmail(event.target.value);
    };

    const handleJoinWaitlist = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (email.match(/^\S+@\S+\.\S+$/)) {
            try {
                const docRef = await addDoc(collection(db, "waitlist"), {
                    email: email
                });
                console.log("Document written with ID: ", docRef.id);
                alert('Thanks for joining the waitlist!');
                setEmail(''); // Clear input after submission
            } catch (error) {
                console.error("Error adding document: ", error);
                alert('Failed to join the waitlist. Please try again.');
            }
        } else {
            alert('Please enter a valid email address.');
        }
    };

    const DesktopLayout = () => (
        <Flex
            css={{
                gap: '$3',
                px: '$6',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: '50px', // Added top spacing
                marginBottom: '50px' // Added bottom spacing
            }}
        >
            <Box
                css={{
                    pt: '$13',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '$5'
                }}
            >
                <Box css={{ maxWidth: '600px' }}>
                    <Text h1 css={{ fontSize: '90px' }}>
                        Side<span style={{ color: '#C9082A' }}>l</span>ine
                    </Text>
                </Box>
                <Text
                    css={{
                        color: '$accents8',
                        maxWidth: '400px',
                    }}
                    size={'$lg'}
                    span
                >
                    An all-in-one search platform for sports recruiting.
                </Text>
                <form onSubmit={handleJoinWaitlist}>
                    <Flex css={{
                        flexDirection: 'row',
                        gap: '$2'
                    }}>
                        <Input placeholder="Enter your email address" size="lg" value={email} onChange={handleInputChange} />
                        <Button type="submit" css={{ backgroundColor: '#C9082A', color: 'white' }}>
                            Join Waitlist
                        </Button>
                    </Flex>
                </form>
            </Box>
            <Box css={{ '& img': { width: '775px', objectFit: 'contain' } }}>
                <img src="sideline.png" alt="Sideline promotional image" />
            </Box>
        </Flex>
    );

    const MobileLayout = () => (
        <Flex
            css={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: '$5',
                px: '$6',
                paddingBottom: '20px' // Added bottom padding to the mobile layout
            }}
        >
            <Box css={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginBottom: '$10', // Increased spacing
                paddingTop: '$10' // Added more spacing on the top
            }}>
                <Text h1 css={{ fontSize: '48px' }}>
                    Side<span style={{ color: '#C9082A' }}>l</span>ine
                </Text>
                <Text css={{ color: '$accents8' }} size={'$lg'}>
                    An all-in-one search platform for sports recruiting.
                </Text>
            </Box>

            <img src="sideline.png" alt="Sideline promotional image" style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '$10' }}/>

            <form onSubmit={handleJoinWaitlist}>
                <Flex css={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    gap: '$2'
                }}>
                    <Input placeholder="Enter your email address" size="lg" value={email} onChange={handleInputChange} />
                    <Button type="submit" css={{ backgroundColor: '#C9082A', color: 'white', display: 'none' }}>
                        Join Waitlist
                    </Button>
                </Flex>
            </form>
        </Flex>
    );

    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
            {/* <Divider css={{ position: 'absolute', inset: '0', left: '0', mt: '$10' }} /> */}
        </>
    );
};
