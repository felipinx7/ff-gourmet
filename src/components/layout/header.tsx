'use client';

import IconBarsOpen from '@/src/assets/icons/icon-bars-open';
import { IconClosed } from '@/src/assets/icons/icon-closed';
import IconWhatsApp from '@/src/assets/icons/icon-whatsapp';
import { logoHorizontal } from '@/src/assets/images';
import { TextsLinksHeader } from '@/src/constants/texts-header';
import { handleStateValue } from '@/src/utils/handle-valor-estado';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex h-auto w-full items-center justify-between rounded-full bg-red-900 p-150 shadow-2xl max-md:p-200">
      <a href="">
        <img
          src={logoHorizontal.src}
          className="w-[150px] max-md:w-[120px]"
          alt="logo ff-gourmet"
        />
      </a>

      {/* links de navegação do desktop  */}
      <nav className="flex items-center justify-center gap-200 max-md:hidden">
        {TextsLinksHeader.map(link => (
          <nav key={link.id} className="group relative w-full">
            <a href="" className="text-white-900 relative cursor-pointer font-semibold">
              {link.name}
            </a>
            <div className="absolute inset-0 mt-2 rounded-lg border-white transition-all duration-1000 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"></div>
          </nav>
        ))}
      </nav>

      {/* botão de fazer pedido do desktop */}
      <button className="alfabeto group hover:bg-gray/100 bg-white-900 flex cursor-pointer items-center justify-center gap-100 rounded-full px-400 py-150 font-bold transition-all duration-[0.5s] ease-in-out hover:scale-105 hover:shadow-2xl max-md:hidden">
        <IconWhatsApp className="w-5 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-z-12 group-hover:text-green-400" />
        Fazer Pedido
      </button>

      {/* container de abertura e fechamento do menu lateral mobile */}
      <article className="hidden max-md:flex">
        <button onClick={() => handleStateValue(setOpenMenu)}>
          {openMenu ? (
            <IconClosed className="text-white-900 size-8" />
          ) : (
            <IconBarsOpen className="text-white-900 size-8 transition-all duration-[0.5s] ease-in-out" />
          )}
        </button>
      </article>

      {/* container do menu lateral mobile  */}
      <article
        className={`${openMenu ? 'opacity-100' : 'pointer-events-none opacity-0'} top-0 left-0 hidden h-screen w-full bg-black/70 transition-all duration-500 ease-in-out max-md:absolute max-md:block`}
      >
        <div className="full flex h-[100%] items-center justify-end overflow-hidden">
          <div
            className={`${openMenu ? 'w-0 translate-x-0' : 'translate-x-[100%]'} bg-white-900 flex h-[100%] flex-col gap-400 p-7 transition-all duration-500 ease-in-out max-md:w-[80%]`}
          >
            {/* container de fechamento do menu lateral mobile */}
            <div className="overflow-x-hidde flex w-full items-center justify-between">
              <p className="font-bold">Menu</p>
              <button onClick={() => handleStateValue(setOpenMenu)}>
                <IconClosed className="size-6 text-red-900" />
              </button>
            </div>

            {/* container dos links do menu lateral mobile  */}
            <nav className="flex w-full flex-col items-center justify-start gap-100 font-[300]">
              {TextsLinksHeader.map(link => (
                <button
                  className={`${link.id === 'inicio' ? 'bg-black-100 w-full rounded-2xl p-3 text-left' : 'w-full rounded-2xl p-3 text-left'} ease-in-outt hover:bg-black-100 font-semibold transition-all duration-500`}
                  key={link.id}
                >
                  <a href="">{link.name}</a>
                </button>
              ))}
            </nav>
            <hr className="border-black-200 border" />

            {/* container botão fazer pedido mobile */}
            <button className="alfabeto group hover:bg-gray/100 text-white-900 flex cursor-pointer items-center justify-center gap-100 rounded-2xl bg-red-900 px-400 py-150 font-bold transition-all duration-[0.5s] ease-in-out hover:scale-105 hover:shadow-2xl">
              <IconWhatsApp className="w-5 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-z-12 group-hover:text-green-400" />
              Fazer Pedido
            </button>
          </div>
        </div>
      </article>
    </header>
  );
}
