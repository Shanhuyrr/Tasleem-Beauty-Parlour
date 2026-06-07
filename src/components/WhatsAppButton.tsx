/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/923220591711?text=Hi+Tasleem+Beauty+Parlour%2C+I+would+like+to+book+an+appointment.";

  return (
    <div className="fixed bottom-6 right-6 z-40-custom select-none">
      <a
        id="floating-whatsapp-bubble"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse"
        title="Live WhatsApp Support chat room"
      >
        {/* Subtle expanding indicator waves */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10-custom pointer-events-none"></span>

        <svg
          className="w-7 h-7 text-white fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.022-.004-.044-.008-.066-.012l-1.848-.925c-.29-.145-.632-.1-.869.117l-1.026.822c-1.25-.8-2.274-1.824-3.074-3.074l.822-1.026c.217-.237.262-.579.117-.869L10.662 7.55c-.066-.134-.202-.218-.352-.218-.046 0-.092.008-.137.024L8.324 8.28c-.4.162-.648.55-.612.983.315 3.75 3.324 6.76 7.074 7.074.433.036.82-.212.983-.612l.925-1.848c.074-.15.068-.328-.016-.472z" />
          <path d="M12.004 2c-5.514 0-10 4.486-10 10 0 1.944.562 3.758 1.533 5.303L2.012 22l4.823-1.48c1.517.893 3.284 1.417 5.169 1.417 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18c-1.634 0-3.17-.464-4.486-1.267l-.322-.196-2.853.875.888-2.813-.216-.346C4.195 15.01 3.714 13.565 3.714 12c0-4.568 3.718-8.286 8.29-8.286s8.29 3.718 8.29 8.286-3.718 8.286-8.29 8.286z" />
        </svg>

        {/* Sweet Tooltip helper */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-950 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-gold-300/35">
          Chat Room 📞 03220591711
        </div>
      </a>
    </div>
  );
}
