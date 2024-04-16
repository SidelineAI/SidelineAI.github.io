import React, { useState } from 'react';
import { Button, Divider, Input, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export const Hero = () => {
   const [email, setEmail] = useState('');

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
   };

   const handleJoinWaitlist = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //event.preventDefault(); // Prevent the form from refreshing the page
        // Basic email validation
        if (email.match(/^\S+@\S+\.\S+$/)) {
            try {
                // Adding the email to Firestore collection
                const docRef = await addDoc(collection(db, "waitlist"), {
                    email: email
                });
                console.log("Document written with ID: ", docRef.id);
                alert('Thanks for joining the waitlist!');
            } catch (error) {
                console.error("Error adding document: ", error);
                alert(error);
            }
        } else {
            alert('Please enter a valid email address.');
        }
    };

   return (
      <>
         <Flex
            css={{
               gap: '$3',
               px: '$6',
               flexDirection: 'column',
               alignContent: 'center',
               justifyContent: 'center',
               alignItems: 'center',
               width: '100%',
               marginBottom: '100px', // Added marginBottom here
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                        fontSize: '90px',
                     }}
                  >  
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
                  All-in-one search platform for sports scouting and coaching.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="Enter your email address" size="lg" value={email} onChange={handleInputChange} />
                  <Button css={{ backgroundColor: '#C9082A', color: 'white' }} onClick={handleJoinWaitlist}>
                     Join Waitlist
                  </Button>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="sideline.png" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
