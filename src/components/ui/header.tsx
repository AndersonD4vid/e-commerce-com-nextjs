import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Header = () => {
    return ( 
       <Card className="flex p-[1.8rem] justify-between items-center">
        <Sheet>
            <SheetTrigger asChild>
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetFooter className="text-left text-lg font-semibold">
                    Menu
                </SheetFooter>

                <div className="mt-2 flex flex-col gap-2">
                    <Button className="w-full justify-start gap-5" variant="outline">
                        <LogInIcon />
                        Fazer login
                    </Button>

                    <Button className="w-full justify-start gap-5" variant="outline">
                        <HomeIcon />
                       Início
                    </Button>
                   
                    <Button className="w-full justify-start gap-5" variant="outline">
                        <PercentIcon />
                       Ofertas
                    </Button>

                    <Button className="w-full justify-start gap-5" variant="outline">
                        <ListOrderedIcon />
                       Catálogo
                    </Button>
                </div>
            </SheetContent>
        </Sheet>

        
        <h1 className="font-semibold text-lg"><span className="text-primary">FWS</span> Store</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon />
        </Button>
       </Card>
    );
}
 
export default Header;