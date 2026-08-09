import { useState } from "react"
import { Mail, Phone, MapPin, Send, Bot, Sparkles, MessageSquare, ChevronDown } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [selectedTopic, setSelectedTopic] = useState("Need an AI solution for your business?");
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
  const [status, setStatus] = useState("");

  const discussionTopics = [
    "Need an AI solution for your business?",
    "Just want to say hi?",
    "Looking for a Full-Stack & AI Engineer?",
    "Have a custom freelancing request?"
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setTopicDropdownOpen(false);
    setFormState(prev => ({
      ...prev,
      message: `Hi Aswin,\n\nI am reaching out regarding: ${topic}\n\n`
    }));
  };

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
          topic: selectedTopic,
          message: formState.message,
          _subject: `New Portfolio Inquiry [${selectedTopic}] from ${formState.name}`,
          _captcha: "false"
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
      window.location.href = `mailto:aswinbino1234@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent("Topic: " + selectedTopic + "\n\nName: " + formState.name + "\nEmail: " + formState.email + "\n\nMessage:\n" + formState.message)}`;
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-primary uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            LET'S CONNECT
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl text-shiny">
            Ready to build the extraordinary?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            From intelligent AI solutions to scalable software architectures, let's collaborate on your big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Form Side */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Topic Dropdown Pill */}
            <div className="flex flex-col gap-2 relative">
              <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                DISCUSSION TOPIC:
              </span>

              <button
                type="button"
                onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
                className="w-full p-4 rounded-2xl bg-muted/20 border border-border/50 text-foreground text-sm font-bold text-left flex items-center justify-between hover:border-primary/60 transition-colors"
              >
                <span>{selectedTopic}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${topicDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {topicDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 p-2 rounded-2xl glass-panel shadow-2xl z-30 flex flex-col gap-1 border border-border/60 animate-fadeIn">
                  {discussionTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleTopicSelect(topic)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-colors ${
                        selectedTopic === topic ? "bg-primary text-background" : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none focus:border-primary/80 focus:bg-muted/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none focus:border-primary/80 focus:bg-muted/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                  Your Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Describe your project or inquiry..."
                  rows="5"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-border/40 bg-muted/10 text-foreground text-sm font-medium outline-none focus:border-primary/80 focus:bg-muted/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="py-5 rounded-2xl bg-foreground text-background font-black tracking-widest text-xs uppercase hover:opacity-90 transition-all shadow-2xl flex items-center justify-center gap-2 group"
              >
                {status === "sending" ? (
                  "Sending Message..."
                ) : status === "sent" ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

          </div>

          {/* 3D Robot Card Side */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white border border-zinc-800 shadow-2xl flex flex-col justify-between gap-8 h-full">
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 w-fit">
                <Bot className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Direct Contact & Socials
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Available for remote contracts, software engineering roles, and AI consultations.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6">
              <a href="mailto:aswinbino1234@gmail.com" className="flex items-center gap-3 text-xs font-mono text-zinc-300 hover:text-sky-400 transition-colors">
                <Mail size={16} className="text-sky-400" />
                aswinbino1234@gmail.com
              </a>
              <a href="tel:+919843540186" className="flex items-center gap-3 text-xs font-mono text-zinc-300 hover:text-yellow-400 transition-colors">
                <Phone size={16} className="text-yellow-400" />
                +91 9843540186
              </a>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <MapPin size={16} className="text-rose-400" />
                Kerala, India
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>RESPONSE TIME: <strong className="text-emerald-400">&lt; 12 HOURS</strong></span>
              <Sparkles size={12} className="text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}