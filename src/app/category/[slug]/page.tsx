import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import ProductItem from "@/components/ui/product-item";
import { computerProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICON } from "@/app/constants/category-icon";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  // const products = await prismaClient.product.findMany({
  //   where: {
  //     category: {
  //       slug: params.slug,
  //     },
  //   },
  // });

  if (!category) {
    return null;
  }
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit  gap-3 border-2 border-primary p-2 pl-6 pr-6 text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="mt-10 grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computerProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
