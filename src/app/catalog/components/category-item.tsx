import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        {/* Image */}
        <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={90}
            height={90}
            sizes="100vw"
            className="max-w-auto-[80%] h-auto max-h-[70%]"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Título */}
        <div className="rounded-bl-lg rounded-br-lg bg-accent py-2 ">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
