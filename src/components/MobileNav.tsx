import Link from "next/link";
import { SyntheticEvent } from "react";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (isOpen: boolean) => void;
}) {
  return (
    open && (
      <div className="w-full fixed top-0 bottom-0 right-0 left-0 z-10">
        <div className="flex flex-col px-4 bg-yellow justify-center items-center h-screen">
          <div>
            <nav>
              <div>
                <div
                  className="text-5xl text-brown"
                  onClick={() => onClose(false)}
                >
                  <Link href="/about">About</Link>
                </div>
                <div className="text-5xl text-brown">
                  <Link href="/needlefelting">Needlefelting</Link>
                </div>
                <div className="text-5xl text-brown">
                  <Link href="/clay">Clay</Link>
                </div>
                <div className="text-5xl text-brown">
                  <Link href="/illustrations">Illustrations</Link>
                </div>
                <div className="text-5xl text-brown">
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="text-5xl text-brown">
                  <Link href="/shop">Shop</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  );
}
