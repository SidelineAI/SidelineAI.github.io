import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
   return (
     <Flex
       as="footer"
       css={{
         mt: 'auto', // Ensures the footer is pushed to the bottom
         width: '100%',
         py: '$20', // Padding top and bottom
         px: '$6', // Padding left and right
         backgroundColor: '#f8f9fa' // Example background color
       }}
     >
       <Box
         css={{
           px: '$10', // Padding left and right for mobile
           '@md': {
             px: '$56', // Increased padding on medium and larger devices
           },
           width: '100%',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         }}
       >
         <Flex
           align="center"
           wrap="wrap"
           css={{
             gap: '$10',
             justifyContent: 'space-between', // Space between elements on wider screens
             width: '100%',
           }}
         >
           <a href="mailto:sidelinebasketball.ai@gmail.com">
             <Text span css={{ color: '$accents8' }}>
               Contact Us
             </Text>
           </a>
           <Text span css={{ color: '$accents8' }}>
             © Copyright 2024 Sideline
           </Text>
         </Flex>
       </Box>
     </Flex>
   );
 };