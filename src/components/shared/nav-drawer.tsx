"use client";

import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTelegramStore } from "@/store/user-store";
import { useInitTelegram } from "@/hooks/api-hooks/useInitTelegram";
import { UserAvatar } from ".";
import { CartDrawerList } from "../cart-drawer-list";
import { ButtonSpinner } from "../ui/button-spinner";
import { useAppLoading } from "@/hooks/useApiLoading";

export function NavDrawer() {
  useInitTelegram();

  const user = useTelegramStore((state) => state.user);
  const isLoading = useAppLoading();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="lg">
          <ShoppingBag className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>
            <div className="flex items-center gap-4 h-[72px] border-b border-b-gray-200 px-4">
              <UserAvatar />
              {user ? <p>Пользователь: {user.first_name}</p> : <p>Гость</p>}
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* КОРЗИНА С ТОВАРАМИ*/}
        <CartDrawerList userId={2} />

        <SheetFooter className="flex-shrink-0 px-4 pb-4">
          <SheetClose asChild>
            <div>
              <Button className="w-full mt-4" disabled={isLoading}>
                {isLoading ? <ButtonSpinner /> : "Оформить заказ"}
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
