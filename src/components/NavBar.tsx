import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/rg-logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Link to="/">
        <Image
          src={logo}
          boxSize={"60px"}
          objectFit="contain"
          borderRadius={5}
        />
      </Link>
      <Box width="100%">
        <SearchInput />
      </Box>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
