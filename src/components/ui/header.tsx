"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  const { data, status } = useSession();

  const handlerLogin = async () => {
    await signIn();
  };

  const handlerLogOut = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.8rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <SheetHeader className="mb-10 mt-5 flex-row gap-5 text-left text-lg font-semibold ">
            {status === "authenticated" && data?.user && (
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && (
                  <AvatarImage
                    src={data.user.image}
                    className="h-[55px] w-[55px] rounded-full"
                    alt="foto de perfil"
                  />
                )}
              </Avatar>
            )}
            {data && (
              <span className="text-1xl text-[#333]">
                Olá, {data?.user?.name}
              </span>
            )}
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            {status === "authenticated" ? (
              <Button
                onClick={handlerLogOut}
                className="w-full justify-start gap-5 bg-white text-[#333]"
                variant="ghost"
              >
                <LogOutIcon />
                Desconectar
              </Button>
            ) : (
              <Button
                onClick={handlerLogin}
                className="w-full justify-start gap-5 bg-white text-[#333]"
                variant="ghost"
              >
                <LogInIcon />
                Fazer login
              </Button>
            )}

            <a href="/">
              <Button
                className="w-full justify-start gap-5 bg-white text-[#333]"
                variant="ghost"
              >
                <HomeIcon />
                Início
              </Button>
            </a>

            <Button
              className="w-full justify-start gap-5 bg-white text-[#333]"
              variant="ghost"
            >
              <PercentIcon />
              Ofertas
            </Button>

            <a href="/catalog">
              <Button
                className="w-full justify-start gap-5 bg-white text-[#333]"
                variant="ghost"
              >
                <ListOrderedIcon />
                Catálogo
              </Button>
            </a>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">E-commerce</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
