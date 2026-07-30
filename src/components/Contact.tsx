import { useEffect, useState } from "react";
import {
  ArrowRight,
  Github,
  Youtube,
  Mail,
  Send,
  Sparkles,
  MessageCircle,
  Check,
  Copy,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { EMAIL_ADDRESS, socials } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  discord: MessageCircle,
  youtube: Youtube,
  mail: Mail,
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type ToastKind = "success" | "error" | "info";
type Toast = { kind: ToastKind; text: string; sub?: string } | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULTS: FormState = { name: "", email: "", subject: "", message: "" };

function buildMailto(values: FormState) {
  const subject = encodeURIComponent(
    values.subject.trim() ||
      `👋 Hi from ${values.name.trim() || "the website"}!`,
  );
  const body = [
    `Hi KHiroVerse,`,
    ``,
    values.message.trim() || "(write something nice here!)",
    ``,
    `—`,
    `Name: ${values.name.trim() || "—"}`,
    `Reply-to: ${values.email.trim() || "—"}`,
    `Sent from the contact form at KHiroVerse.dev`,
  ]
    .join("\n");
  return {
    href: `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${encodeURIComponent(body)}`,
    plainText:
      `To: ${EMAIL_ADDRESS}\n` +
      `Subject: ${values.subject || "👋 Hi from the website"}\n\n` +
      `${values.message || "(your message here)"}\n\n— ${values.name || "Website visitor"} <${values.email || "—"}>`,
  };
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [values, setValues] = useState<FormState>(DEFAULTS);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4600);
    return () => clearTimeout(t);
  }, [toast]);

  const validate = (v: FormState): Errors => {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Please tell me your name!";
    else if (v.name.trim().length < 2) next.name = "Name is too short";
    if (!v.email.trim()) next.email = "I need your email to reply :)";
    else if (!EMAIL_RE.test(v.email.trim())) next.email = "That email looks off";
    if (!v.subject.trim()) next.subject = "Add a quick subject";
    else if (v.subject.trim().length < 3) next.subject = "Subject is too short";
    if (!v.message.trim()) next.message = "Say a few words about your idea!";
    else if (v.message.trim().length < 10)
      next.message = "At least 10 characters, please";
    return next;
  };

  const onChange = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (touched[key]) setErrors(validate(next));
    };

  const onBlur = (key: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const copyText = async (text: string, label: string, kind: ToastKind = "success") => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({
        kind,
        text: kind === "info" ? `${label}` : `${label} copied`,
        sub: kind === "info" ? text : "Paste it anywhere you want 📋",
      });
      return true;
    } catch {
      setToast({
        kind: "error",
        text: "Couldn't copy to clipboard automatically",
        sub: `Manually copy: ${text}`,
      });
      return false;
    }
  };

  /* ---------- Primary CTA: Copy email address ---------- */
  const handleCopyEmail = async () => {
    const ok = await copyText(EMAIL_ADDRESS, "Email address", "success");
    if (ok) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  /* ---------- Quick "Open in mail app" fallback CTA ---------- */
  const openQuickMail = (e: React.MouseEvent) => {
    e.preventDefault();
    const { href, plainText } = buildMailto({
      name: "",
      email: "",
      subject: "🚀 Project / Hire Inquiry",
      message:
        "Hi KHiroVerse,\n\nI'd love to chat about a project. Here are the details:\n\n- Type of work: (e.g. full-stack build / UI polish / consulting)\n- Timeline: \n- Budget (rough): \n- Anything else: \n\nCheers!",
    });
    try {
      window.location.href = href;
    } catch {
      /* noop */
    }
    void copyText(plainText, "Pre-filled inquiry", "info");
  };

  /* ---------- Full contact form submit ---------- */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length) {
      setToast({
        kind: "error",
        text: "Please fix the highlighted fields first 🙏",
      });
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 300));

    const { href, plainText } = buildMailto(values);

    // Always copy the full message first (guaranteed to work without user's mail client)
    const copied = await copyText(plainText, "Full message", "info");

    // Attempt to open the user's mail app
    let opened = false;
    try {
      window.location.href = href;
      opened = true;
    } catch {
      opened = false;
    }

    if (opened && copied) {
      setToast({
        kind: "success",
        text: "✅ Ready to send!",
        sub: "Your mail app just opened with everything pre-filled — click Send there. Also copied to clipboard just in case.",
      });
      setValues(DEFAULTS);
      setTouched({});
      setErrors({});
    } else if (copied) {
      setToast({
        kind: "info",
        text: "📋 Message copied",
        sub: `Paste it into any email and send it to ${EMAIL_ADDRESS}. Your app didn't open — but your message is safe!`,
      });
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container mx-auto">
        <div className="reveal mb-10 max-w-2xl">
          <p className="section-eyebrow">
            <span className="h-px w-6 bg-accent-500" />
            /* 04. Get In Touch */
          </p>
          <h2 className="section-heading">
            Let&apos;s build something{" "}
            <span className="gradient-text">awesome</span> together.
          </h2>
          <p className="text-dark-300">
            Always open to chatting about code, web projects, or cool open-source ideas.
            Copy my email, or drop a message below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT: Terminal card + CTA buttons */}
          <div className="reveal flex flex-col gap-6" data-delay="100">
            <div className="terminal-window overflow-hidden">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/90" />
                <span className="terminal-dot bg-yellow-500/90" />
                <span className="terminal-dot bg-green-500/90" />
                <span className="ml-2 truncate font-mono text-xs text-dark-400">
                  contact.sh — khiroverse
                </span>
              </div>
              <div className="code-block space-y-3 p-6 text-dark-200 sm:p-8">
                <p>
                  <span className="text-primary-400">$</span>{" "}
                  <span className="text-dark-400">ls ./projects</span>
                </p>
                <p className="text-dark-100">
                  {"  "}web-apps · mini-tools · experiments · UI-components
                </p>
                <p className="pt-2">
                  <span className="text-primary-400">$</span>{" "}
                  <span className="text-dark-400">
                    ping --message &quot;Let&apos;s collab!&quot;
                  </span>
                </p>
                <p className="text-accent-300">✓ Let&apos;s build cool stuff.</p>
                <p className="pt-2">
                  <span className="text-primary-400">$</span>{" "}
                  <span className="text-dark-400">cat ~/.email</span>
                </p>
                <p className="pl-1 font-mono text-primary-300">{EMAIL_ADDRESS}</p>
                <p className="pt-2">
                  <span className="text-primary-400">$</span>{" "}
                  <span className="animate-blink text-dark-300">▊</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* PRIMARY CTA: COPY EMAIL (replaces the old "Send me an email") */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={[
                  "btn-primary group relative overflow-hidden",
                  copiedEmail ? "!bg-gradient-to-r !from-green-600 !to-emerald-500" : "",
                ].join(" ")}
              >
                {copiedEmail ? (
                  <>
                    <Check size={18} />
                    Copied! It&apos;s in your clipboard
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy my email
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
                {copiedEmail && (
                  <span className="pointer-events-none absolute inset-0 animate-pulse bg-white/10" />
                )}
              </button>

              <button type="button" onClick={openQuickMail} className="btn-ghost">
                <Send size={18} />
                Open in mail app
              </button>

              <button
                type="button"
                onClick={() => {
                  const sel = window.getSelection();
                  const range = document.createRange();
                  const span = document.createElement("span");
                  span.textContent = EMAIL_ADDRESS;
                  document.body.appendChild(span);
                  range.selectNodeContents(span);
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                  document.body.removeChild(span);
                  void copyText(EMAIL_ADDRESS, "Email selected + copied", "info");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-900/60 px-4 py-2 text-sm text-dark-200 transition hover:border-accent-500/50 hover:text-accent-300"
                title="Click to select & copy"
              >
                <Mail size={16} />
                <span className="font-mono text-primary-300">{EMAIL_ADDRESS}</span>
              </button>
            </div>

            {/* Why-copy info card */}
            <div className="rounded-2xl border border-primary-500/20 bg-primary-500/5 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-500/20 text-primary-300">
                  <Mail size={18} />
                </span>
                <div className="text-sm leading-relaxed text-dark-200">
                  <p className="font-semibold text-white">
                    Why copy instead of auto-send?
                  </p>
                  <p className="mt-1 text-dark-300">
                    No signup, no weird forms, no third-party email service needed — this
                    keeps things simple and{" "}
                    <span className="font-semibold text-primary-300">100% frontend-only</span>.
                    Paste the address into your favorite email app, or use the contact form
                    to compose a full message in one click.
                  </p>
                </div>
              </div>
            </div>

            {/* Social cards row */}
            <div className="reveal-group grid grid-cols-2 gap-3 sm:grid-cols-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon] ?? Mail;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (s.icon === "mail") {
                        e.preventDefault();
                        void handleCopyEmail();
                      }
                    }}
                    className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-card p-4 transition hover:-translate-y-0.5 hover:border-primary-500/40 hover:shadow-glow"
                    title={s.icon === "mail" ? "Click to copy email" : undefined}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500/15 text-primary-300 transition group-hover:bg-accent-500/15 group-hover:text-accent-300">
                      <Icon size={18} />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-white">{s.name}</p>
                    <p className="truncate text-[11px] text-dark-400">
                      {s.url
                        .replace(/^https?:\/\//, "")
                        .replace(/^mailto:/, "")}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="reveal" data-delay="200">
            <form
              onSubmit={onSubmit}
              noValidate
              className="card-surface relative flex h-full flex-col p-6 sm:p-8"
            >
              <div className="mb-6 flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-hero text-dark-950 shadow-glow">
                  <Sparkles size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Drop a message</h3>
                  <p className="text-sm text-dark-400">
                    Composes it → copies full message → opens your mail app in one click.
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <Field
                  label="Your name"
                  placeholder="e.g. Ada Lovelace"
                  value={values.name}
                  onChange={onChange("name")}
                  onBlur={onBlur("name")}
                  error={errors.name}
                  id="name"
                  autoComplete="name"
                />
                <Field
                  label="Your email"
                  type="email"
                  placeholder="ada@example.com"
                  value={values.email}
                  onChange={onChange("email")}
                  onBlur={onBlur("email")}
                  error={errors.email}
                  id="email"
                  autoComplete="email"
                />
                <Field
                  label="Subject"
                  placeholder="What's this about?"
                  value={values.subject}
                  onChange={onChange("subject")}
                  onBlur={onBlur("subject")}
                  error={errors.subject}
                  id="subject"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-dark-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi :)"
                    value={values.message}
                    onChange={onChange("message")}
                    onBlur={onBlur("message")}
                    className={[
                      "w-full resize-none rounded-xl border bg-dark-900/60 px-4 py-3 text-sm text-dark-50 placeholder:text-dark-500 outline-none transition",
                      "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30",
                      errors.message
                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30"
                        : "border-white/10 hover:border-white/20",
                    ].join(" ")}
                  />
                  <FieldError error={errors.message} />
                  <p className="mt-1.5 text-right font-mono text-[10px] text-dark-500">
                    {values.message.length} chars
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-5">
                <p className="max-w-[70%] font-mono text-[11px] text-dark-500">
                  * Copies your message to clipboard & opens your mail app. Paste into
                  any email client to send.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className={[
                    "btn-primary !py-2.5",
                    submitting ? "opacity-80 !cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Getting it ready…
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Compose &amp; copy message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 animate-[popIn_.3s_cubic-bezier(.2,.8,.2,1)]"
          role="status"
        >
          <div
            className={[
              "pointer-events-auto w-[min(92vw,520px)] rounded-2xl border px-4 py-3.5 text-sm shadow-2xl backdrop-blur",
              toast.kind === "success"
                ? "border-green-500/40 bg-green-500/10 text-green-200"
                : toast.kind === "error"
                  ? "border-red-500/40 bg-red-500/10 text-red-200"
                  : "border-primary-500/40 bg-primary-500/10 text-primary-100",
            ].join(" ")}
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5">
                {toast.kind === "success" ? (
                  <Check size={16} className="text-green-300" />
                ) : toast.kind === "error" ? (
                  <AlertTriangle size={16} className="text-red-300" />
                ) : (
                  <Mail size={16} className="text-primary-300" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{toast.text}</p>
                {toast.sub && (
                  <p className="mt-0.5 text-xs opacity-90">{toast.sub}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- Small helpers ---------- */

function Field(props: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  autoComplete?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}) {
  const { id, label, type = "text", placeholder, value, autoComplete, error, onChange, onBlur } =
    props;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-dark-300"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        className={[
          "w-full rounded-xl border bg-dark-900/60 px-4 py-2.5 text-sm text-dark-50 placeholder:text-dark-500 outline-none transition",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30",
          error
            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30"
            : "border-white/10 hover:border-white/20",
        ].join(" ")}
      />
      <FieldError error={error} />
    </div>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-red-300">
      <AlertTriangle size={12} />
      {error}
    </p>
  );
}
