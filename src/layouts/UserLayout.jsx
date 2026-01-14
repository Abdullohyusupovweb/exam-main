import { Outlet } from "react-router-dom";
import { HStack, Stack, VStack } from "rsuite";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function UserLayout() {
  return (
    <HStack alignItems={"stretch"}>
      <Sidebar />
      <VStack grow={1}>
        <Header />
        <Stack w={"100%"} grow={1}>
          <Outlet />
        </Stack>
      </VStack>
    </HStack>
  );
}

export default UserLayout;
