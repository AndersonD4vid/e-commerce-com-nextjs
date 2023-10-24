import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="">
      <div className="p-5">
        <Image
          src="/banner-home.png"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
          alt="Até 55% de desconto esse mês!"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </div>

      <div className="mb-10">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
