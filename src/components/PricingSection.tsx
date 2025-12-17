import { motion } from "framer-motion";

const packages = [
  {
    title: "BASIC PACKAGE",
    subtitle: "🌟",
    items: [
      "10 Post Designs",
      "Content Creation",
      "Hashtag Trend Research",
      "Competitor Analysis",
      "Account Handling – Free",
      "1 Facebook Paid Campaign",
    ],
  },
  {
    title: "STANDARD PACKAGE",
    subtitle: "🚀",
    items: [
      "15 Post Designs",
      "Content Creation",
      "Hashtag Trend Research",
      "Competitor Analysis",
      "Monthly Reporting",
      "Account Handling – Free",
      "2 Facebook Paid Campaigns",
    ],
  },
  {
    title: "PREMIUM PACKAGE",
    subtitle: "👑",
    items: [
      "25 Post Designs",
      "Advanced Content Creation",
      "Hashtag Trend Research",
      "Competitor Analytics",
      "Post Group Sharing",
      "Boosted Posts",
      "Monthly Performance Reporting",
      "Account Handling Services – Free",
      "4 Facebook Paid Campaigns",
    ],
  },
  {
    title: "CONTINENTAL PACKAGE",
    subtitle: "🌍",
    highlight: "Best for Brands & Scale-ups",
    items: [
      "Everything from PREMIUM",
      "100 Professional Post Designs",
      "High-Quality Content Creation (Captions + Creatives)",
      "Advanced Hashtag & Trend Research",
      "Deep Competitor & Market Analysis",
      "Strategic Post Group Sharing",
      "Regular Post Boosting",
      "Detailed Weekly & Monthly Reporting",
      "Dedicated Account Manager",
      "10 Facebook / Instagram Paid Campaigns",
      "Lead Generation + Brand Awareness Strategy",
      "Priority Support",
    ],
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="pricing"
      className="py-20 bg-background/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-green-500">
            ADSPARK – PRICE LIST
          </h2>
          <p className="mt-3 text-text-muted max-w-2xl mx-auto">
            Choose the right package for your growth — from startups to
            enterprise-scale brands.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              className={`rounded-lg border flex flex-col border-white/10 p-6 bg-surface/60`}
              whileHover={{ scale: 1.02 }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-primary">
                    {pkg.subtitle} {pkg.title}
                  </div>
                  {pkg.highlight && (
                    <div className="mt-1 text-xs text-white/80 font-medium">
                      {pkg.highlight}
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold text-white">{pkg.subtitle}</div>
              </div>

              <ul className="mt-4 space-y-2 text-text-muted text-sm">
                {pkg.items.map((it) => (
                  <li key={it} className="flex items-start space-x-2">
                    <span className="text-primary">✔</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={scrollToContact}
                  className="w-full py-2 mt-6 align-bottom rounded-md bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-text-muted">
          <em>Need a custom plan? Contact us and we’ll build one that fits.</em>
        </div>
      </div>
    </motion.section>
  );
}
