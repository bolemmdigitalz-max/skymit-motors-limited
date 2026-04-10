import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2347042783726?text=Hello%20Skymit%20Motors%2C%20I%27m%20interested%20in%20your%20vehicles."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)]" />
  </a>
);

export default WhatsAppButton;
