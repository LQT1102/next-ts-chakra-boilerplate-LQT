import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function SiteLayout({}: Props) {
    return (
        <Box as={"main"} w={"full"} minH={"100vh"}>
            <Flex direction={"column"}>
                {/* Header */}
                <Box></Box>
                {/* Main content */}
                <Flex direction={"row"}></Flex>
            </Flex>
        </Box>
    );
}
