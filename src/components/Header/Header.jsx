import { useLocation } from "react-router-dom";
import { Heading, Navbar, VStack } from "rsuite";

function Header() {
  const { pathname } = useLocation();

  const title =
    pathname == "/"
      ? "Topshiriqlar"
      : pathname == "/products"
      ? "Mahsulotlar"
      : pathname == "/create-products"
      ? "Mahsulot qo'shish"
      : "Vaqt";

  return (
    <Navbar w={"100%"} py={24}>
      <VStack>
        <Heading level={1}>{title}</Heading>
      </VStack>
    </Navbar>
  );
}

export default Header;
