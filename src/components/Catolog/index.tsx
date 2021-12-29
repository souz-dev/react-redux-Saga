import { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";
import { CatalogItem } from "../CatalogItem";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((res) => setCatalog(res.data));
  }, []);
  return (
    <>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem {...{ product }} key={product.id} />
      ))}
    </>
  );
};
