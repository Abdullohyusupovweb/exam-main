import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Center,
  FlexboxGrid,
  Panel,
  Stack,
  Tag,
  Tooltip,
  Whisper,
} from "rsuite";
import { useProducts } from "../../context/ProductsContext.jsx";

function Products() {
  const { products } = useProducts();

  if (!products.length) {
    return (
      <Center w={"100%"} h={"100%"} className="page-container">
        <Panel bordered shaded className="empty-state-card">
          <Stack direction="column" alignItems="center" spacing={12}>
            <span role="img" aria-label="empty">
              🛒
            </span>
            <h3>Hali mahsulot qo&apos;shilmagan</h3>
            <p style={{ margin: 0, textAlign: "center" }}>
              Birinchi mahsulotingizni yaratish uchun quyidagi tugmadan
              foydalaning.
            </p>
            <Button appearance="primary" as={Link} to="/create-products">
              Mahsulot qo&apos;shish
            </Button>
          </Stack>
        </Panel>
      </Center>
    );
  }

  return (
    <div className="page-container">
      <Stack
        justifyContent="space-between"
        alignItems="center"
        className="products-header"
      >
        <Stack spacing={8} alignItems="center">
          <h3 style={{ margin: 0 }}>Mahsulotlar</h3>
          <Tag size="sm" color="cyan">
            Jami: {products.length}
          </Tag>
        </Stack>
        <Button appearance="primary" as={Link} to="/create-products">
          Yangi mahsulot
        </Button>
      </Stack>

      <FlexboxGrid justify="flex-start" gutter={16} className="products-grid">
        {products.map((product) => (
          <FlexboxGrid.Item
            as="article"
            key={product.id}
            colspan={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Panel bordered shaded bodyFill className="product-card">
              <div className="product-card-body">
                <Stack justifyContent="space-between" alignItems="flex-start">
                  <div>
                    <Whisper
                      trigger="hover"
                      placement="top"
                      speaker={<Tooltip>{product.title}</Tooltip>}
                    >
                      <h4 className="product-title">{product.title}</h4>
                    </Whisper>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <Badge content="Yangi" className="product-badge" />
                </Stack>
              </div>
              <div className="product-card-footer">
                <span className="product-price">
                  {Number(product.price).toLocaleString("uz-UZ")} so&apos;m
                </span>
              </div>
            </Panel>
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </div>
  );
}

export default Products;

