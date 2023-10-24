import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[90px] w-auto max-w-[85%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
      </div>

      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold ">
          {product.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
