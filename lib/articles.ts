export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "what-is-iv-therapy-complete-guide",
    title: "What Is IV Therapy? A Complete Beginner's Guide",
    excerpt:
      "How intravenous vitamin therapy works, what's in a drip, who it's for, and what to expect during your first visit.",
    category: "The Basics",
    readTime: "6 min read",
  },
  {
    slug: "iv-therapy-vs-oral-supplements",
    title: "IV Therapy vs. Oral Supplements: Which Is Better?",
    excerpt:
      "Why bypassing the digestive system can mean higher absorption — and when a pill is still the right call.",
    category: "Compare",
    readTime: "5 min read",
  },
  {
    slug: "chronic-stress-iv-therapy-recovery",
    title: "Chronic Stress & Burnout: Can IV Therapy Help You Recover?",
    excerpt:
      "How prolonged stress depletes key nutrients and the role targeted IV drips can play in your recovery routine.",
    category: "Wellness",
    readTime: "5 min read",
  },
];
