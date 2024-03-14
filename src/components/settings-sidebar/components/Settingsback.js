import React from 'react'

// Chakra imports
import { Icon, Flex, useColorModeValue, HStack } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Settingsback = () => {
      //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");
    return (
        <Flex align='center' direction='column'>
        <Link to='/admin/default'>
        <Icon
            mt='6px'
            as={ArrowBackIcon}
            // color={navbarIcon}
            w='18px'
            h='18px'
            me='10px'
          />
          Settings
          </Link>
        </Flex>
      );
}

export default Settingsback