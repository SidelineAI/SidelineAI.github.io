import React, { useState, useEffect, useRef } from 'react';
import { Button, FormElement, Input, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const Hero: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);


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
        
    
        const email = emailRef.current?.value; // Get the value directly from the input field
    
        if (email && email.match(/^\S+@\S+\.\S+$/)) {
            try {
                const docRef = await addDoc(collection(db, "waitlist"), {
                    email: email
                });
                console.log("Document written with ID: ", docRef.id);
                alert('Thanks for joining the waitlist!');
                if (emailRef.current) emailRef.current.value = ''; // Clear input after submission
            } catch (error) {
                console.error("Error adding document: ", error);
                alert('Failed to join the waitlist. Please try again.');
            }
        } else {
            alert('Please enter a valid email address.');
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const DesktopLayout = () => (
        <Flex
            css={{
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                gap: '$0',
                px: '$6',
                position: 'relative',
            }}
        >
            <Box css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Text h1 css={{
                    fontSize: '200px',
                    textAlign: 'center',
                    lineHeight: '0.8',
                    margin: '0',
                    marginBottom: '40px',
                    
                    
                }}>
                    Side<span style={{ color: '#C9082A' }}>l</span>ine
                </Text>
                <Text
                    css={{
                        color: '$accents8',
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0',
                        marginBottom: '20px' // Reduced margin for better layout
                    }}
                    size={'$lg'}
                >
                    An AI-powered central hub for sports recruiting, scouting, and coaching.
                </Text>
            </Box>
            <Button
                onClick={scrollToBottom}
                css={{
                    
                    backgroundColor: 'transparent',
                    color: '#C9082A',
                    border: '2px solid #C9082A', // Red border
                    height: '35px',
                    '&:hover': {
                        backgroundColor: 'white', // Invert colors on hover
                        color: '#C9082A',
                        borderColor: '#C9082A'
                    },
                    marginBottom: '70px' // Space between the button and the form
                }}
            >
                Watch Demo Video
            </Button>
                <Flex css={{
                    gap: '$8',
                    pt: '$4',
                
                }}
                wrap={'wrap'}
                >
                    <Input
                        placeholder="Email Address"
                        ref={emailRef}
                        css={{ 
                            width: '350px', 
                            textAlign: 'center',
                            marginBottom: '20px' // Add space below the input field
                        }}
                    />
                    <Button
                
                        type="submit"
                        css={{
                            backgroundColor: '#C9082A', // Red background
                            color: 'white', // White text color
                            border: '2px solid #C9082A',
                            height: '35px',
                            '&:hover': {
                                backgroundColor: '#d91e40',
                                color: 'white'
                            }
                        }}
                        onClick={handleJoinWaitlist}
                    >
                        Join Waitlist
                    </Button>
                </Flex>
        
        </Flex>
    );
    

    const MobileLayout = () => (
        <Flex
            css={{
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '$2',
                padding: '$6', // Added more padding for smaller screens
            }}
        >
            <Box css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Text h1 css={{
                    fontSize: '48px', // Smaller font size for mobile
                    textAlign: 'center',
                    lineHeight: '1.1', // Adjusted line height for mobile readability
                    margin: '0',
                    marginBottom: '20px', // Adjusted margin
                }}>
                    Side<span style={{ color: '#C9082A' }}>l</span>ine
                </Text>
                <Text
                    css={{
                        color: '$accents8',
                        textAlign: 'center',
                        maxWidth: '90%', // Use percentage for better responsiveness
                        margin: '0',
                        marginBottom: '15px' // Adjusted margin for better layout
                    }}
                    size={'$lg'}
                >
                    An AI-powered central hub for sports recruiting, scouting, and coaching.
                </Text>
            </Box>
            <Button
                onClick={scrollToBottom}
                css={{
                    backgroundColor: 'transparent',
                    color: '#C9082A',
                    border: '2px solid #C9082A', // Maintain consistency with the desktop version
                    height: '40px', // Slightly larger button for easier touch interaction
                    '&:hover': {
                        backgroundColor: 'white', // Invert colors on hover
                        color: '#C9082A',
                        borderColor: '#C9082A'
                    },
                    width: '80%', // Wider button for easier access
                    marginBottom: '20px' // Adjusted spacing
                }}
            >
                Watch Demo Video
            </Button>
            <Flex
                css={{
                    flexDirection: 'column', // Stack elements vertically due to space constraints
                    alignItems: 'center',
                    gap: '$2',
                    width: '100%' // Use full width for form elements
                }}
            >
                <Input
                    placeholder="Email Address"
                    css={{ 
                        width: '80%', // Use percentage for better responsiveness
                        textAlign: 'center',
                        marginBottom: '10px' // Adjusted space below the input field
                    }}
                />
                <Button
                    type="submit"
                    css={{
                        backgroundColor: '#C9082A', // Red background
                        color: 'white', // White text color
                        border: '2px solid #C9082A',
                        height: '40px', // Slightly larger button for easier touch interaction
                        '&:hover': {
                            backgroundColor: '#d91e40', // Adjust hover color
                            color: 'white'
                        },
                        width: '80%', // Wider button for easier access
                    }}
                    onClick={handleJoinWaitlist}
                >
                    Join Waitlist
                </Button>
            </Flex>
        </Flex>
    );
    
    return (
        <>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
            {/* Optionally include further content that the button would scroll to */}
        </>
    );
};
