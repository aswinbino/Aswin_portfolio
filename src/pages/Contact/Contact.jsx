import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/aswinbino1234@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        throw new Error("FormSubmit failed");
      }
    } catch (error) {
      // Fallback: Open mailto client pre-populated with subject and body
      window.location.href = `mailto:aswinbino1234@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent("Name: " + formState.name + "\nEmail: " + formState.email + "\n\nMessage:\n" + formState.message)}`;
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5 text-sky-400" />, 
      label: "Email", 
      value: "aswinbino1234@gmail.com",
      href: "mailto:aswinbino1234@gmail.com"
    },
    { 
      icon: <Phone className="w-5 h-5 text-yellow-500" />, 
      label: "Phone", 
      value: "+91 9843540186",
      href: "tel:+919843540186"
    },
    { 
      icon: <MapPin className="w-5 h-5 text-rose-500" />, 
      label: "Location", 
      value: "Kerala, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            LET'S TALK
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Have an idea? Let's build something amazing together.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Info list */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Get In Touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                I'm open to freelance projects, remote job offers, and collaborative web platforms. Fill out the form or reach out directly.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full border border-border/60 bg-muted/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                      {info.label}
                    </span>
                    <a
                      href={info.href}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors mt-0.5"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 w-full flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/40 focus:border-primary/80 focus:bg-muted/20 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/40 focus:border-primary/80 focus:bg-muted/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                Your Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full px-5 py-3.5 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/40 focus:border-primary/80 focus:bg-muted/20 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-foreground text-background font-bold tracking-wider text-xs uppercase hover:bg-foreground/80 transition-all duration-300 disabled:opacity-60 group/btn"
            >
              {status === "sending" ? (
                "Sending Message..."
              ) : status === "sent" ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;