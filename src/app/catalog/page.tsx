import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5 ">
      <Badge
        className="gap-3 border-2 border-primary p-2 pl-6 pr-6 text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={20} />
        <span>Catálogo</span>
      </Badge>

      <div className="mt-10 grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
