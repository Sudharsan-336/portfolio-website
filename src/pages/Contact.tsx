import { motion } from "framer-motion";
import { type ChangeEvent, type FormEvent, type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "246cab45-5e67-4b95-813d-b5a511aea172";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-28 px-4 sm:px-6">
      <div className="pointer-events-none hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[110px] animate-float" />
      <div className="pointer-events-none hidden lg:block absolute bottom-10 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-float" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 px-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <InfoCard icon={<Mail size={24} />} title="Email" text="sudharsan.ramachandran336@gmail.com" color="primary" />
            <InfoCard icon={<Phone size={24} />} title="Phone" text="+91 94777 83527" color="secondary" />
            <InfoCard icon={<MapPin size={24} />} title="Location" text="India, Tamil Nadu, Kanchipuram-631501" color="accent" />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 gradient-text text-center md:text-left">Send a Message</h2>

              <FormInput
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                delay={0.5}
                placeholder="your name"
              />

              <FormInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                delay={0.6}
                placeholder="your email"
              />

              <FormTextarea
                label="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                delay={0.7}
                placeholder="Tell me about your project..."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-border hover:scale-105 transition-transform"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  color: "primary" | "secondary" | "accent";
}

const colorVariants: Record<InfoCardProps["color"], string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

function InfoCard({ icon, title, text, color }: InfoCardProps) {
  return (
    <motion.div
      className="glass-card p-5 sm:p-6 rounded-2xl max-w-md mx-auto md:mx-0"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${colorVariants[color]}`}>{icon}</div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface FormInputProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
  delay: number;
}

function FormInput({ label, value, onChange, type = "text", placeholder, delay }: FormInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <label className="block text-sm font-medium mb-2">{label}</label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="bg-background/60 focus-visible:ring-primary/70"
        placeholder={placeholder}
      />
    </motion.div>
  );
}

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  delay: number;
}

function FormTextarea({ label, value, onChange, placeholder, delay }: FormTextareaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <label className="block text-sm font-medium mb-2">{label}</label>
      <Textarea
        value={value}
        onChange={onChange}
        required
        className="bg-background/60 min-h-[150px] focus-visible:ring-primary/70"
        placeholder={placeholder}
      />
    </motion.div>
  );
}