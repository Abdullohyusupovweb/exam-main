import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Input, InputNumber, Message, Panel, Stack, useToaster } from "rsuite";
import { useProducts } from "../../context/ProductsContext.jsx";

function CreateProduct() {
  const { addProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const navigate = useNavigate();
  const toaster = useToaster();

  const handleAddProduct = () => {
    // very simple required validation
    if (!title.trim() || !description.trim() || price == null || price === "") {
      toaster.push(
        <Message type="warning" closable showIcon>
          Iltimos, barcha maydonlarni to&apos;ldiring
        </Message>,
        { placement: "topCenter", duration: 3000 }
      );
      return;
    }

    const newProduct = {
      id: undefined,
      title: title.trim(),
      description: description.trim(),
      price: Number(price),
    };

    addProduct(newProduct);

    toaster.push(
      <Message type="success" closable showIcon>
        Mahsulot muvaffaqiyatli qo&apos;shildi
      </Message>,
      { placement: "topCenter", duration: 3000 }
    );

    setTitle("");
    setDescription("");
    setPrice(null);
    navigate("/products");
  };

  return (
    <Center w={"100%"} h={"100%"} className="page-container">
      <Panel
        bordered
        shaded
        className="product-form-card"
        header="Yangi mahsulot qo'shish"
      >
        <Stack direction="column" spacing={16}>
          <div>
            <label className="rs-form-control-label">Sarlavha</label>
            <Input
              placeholder="Mahsulot nomi"
              value={title}
              onChange={setTitle}
            />
          </div>

          <div>
            <label className="rs-form-control-label">Tavsif</label>
            <Input
              as="textarea"
              rows={4}
              placeholder="Mahsulot haqida batafsil ma&apos;lumot"
              value={description}
              onChange={setDescription}
            />
          </div>

          <div>
            <label className="rs-form-control-label">Narx</label>
            <InputNumber
              prefix="so'm"
              min={0}
              step={1000}
              style={{ width: "100%" }}
              value={price}
              onChange={setPrice}
            />
          </div>

          <Stack spacing={12} justifyContent="flex-end">
            <Button
              appearance="subtle"
              type="button"
              onClick={() => navigate("/products")}
            >
              Bekor qilish
            </Button>
            <Button appearance="primary" type="button" onClick={handleAddProduct}>
              Mahsulot qo&apos;shish
            </Button>
          </Stack>
        </Stack>
      </Panel>
    </Center>
  );
}

export default CreateProduct;

