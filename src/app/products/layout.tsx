import ProductsAside from "@/components/products/ProductsAside";
import { ReactNode } from "react";

export default function ProductsLayout(props: { children: ReactNode }) {
  return (
    <div className="flex">
        <ProductsAside></ProductsAside>
      <main>{props.children}</main>
    </div>
  );
}
