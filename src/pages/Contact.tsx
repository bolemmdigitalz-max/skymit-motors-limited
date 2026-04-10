import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-14">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-2">Get In Touch</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">Contact Us</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-secondary border-border"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-secondary border-border"
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-secondary border-border"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-secondary border-border"
              />
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Visit Our Showroom</h2>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: MapPin, label: "Address", value: "32 Mobolaji Bank Anthony Way, Opebi, Ikeja 101233, Lagos" },
                { icon: Phone, label: "Phone", value: "+234 704 278 3726" },
                { icon: Mail, label: "Email", value: "info@royalautos.ng" },
                { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM · Sat: 10AM-4PM" },
              ].map((i) => (
                <div key={i.label} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <i.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">{i.label}</p>
                    <p className="text-foreground text-sm mt-0.5">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2347042783726?text=Hello%20Royal%20Autos%2C%20I%27d%20like%20to%20inquire%20about%20your%20vehicles."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)]">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </Button>
            </a>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.35!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="Royal Autos Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
