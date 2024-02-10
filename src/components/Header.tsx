"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { makeItOpen, makeItClose, selectMobileMenuOpen } from "@/features/mobilemenu/mobileMenuSlice";

const Header = () => {
  const pathname = usePathname();
  const mobileMenuOpen = useSelector(selectMobileMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(makeItClose())
  }, [pathname])

  return (
    <header className="drop-shadow-sm bg-white h-20 pt-1 lg:h-[5.5rem] lg:pt-0 font-sans">
      <nav
        className="mx-auto flex max-w-7xl item-center justify-between p-6 lg:p-8"
        aria-label="Global"
      >
        <div className="flex space-x-10 ">
          <div className="tracking-tighter">
            <Link href="/"></Link>
            <span className=" text-xl font-semibold cursor-pointer">
              <Link href="/">Study Sphere</Link>
            </span>
          </div>
          <div className="hidden md:block lg:block">
            <Button
              className="text-lg  font-normal relative bottom-2 "
              variant="ghost"
              asChild
            >
              <Link href="/aboutus">About Us</Link>
            </Button>
          </div>
        </div>

        <div className="space-x-10 hidden md:block lg:block">
          <Button className="text-lg font-normal" variant="ghost" asChild>
            <Link href="/faqs">FAQs</Link>
          </Button>

          <Button className="tracking-wider w-20 font-semibold drop-shadow-lg">
            <a href="/login">Sign in</a>
          </Button>
        </div>

        <div className="flex lg:hidden md:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-full p-2.5 text-white hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => dispatch(makeItOpen())}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden md:hidden"
        open={mobileMenuOpen}
        onClose={() => dispatch(makeItClose())}
      >
        <div className="fixed inset-0 z-10 tracking-tight" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 drop-shadow-lg">
          <div className="flex items-center justify-between">
            <span className="tracking-wide font-semibold">Study Sphere</span>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-black hover:bg-gray-100 rounded-full"
              onClick={() => dispatch(makeItClose())}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 tracking-normal">
                <Link
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-black hover:bg-gray-100 transition-all ease-in-out tracking-wide"
                >
                  About Us
                </Link>
                <Link
                  href="/faqs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-black hover:bg-gray-100 transition-all ease-in-out tracking-wide"
                >
                  FAQs
                </Link>
              </div>

              <Button className="tracking-wider w-20 font-semibold drop-shadow-lg">
                <a href="/login">Sign in</a>
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
