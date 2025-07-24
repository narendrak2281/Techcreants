'use client';

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-tc-surface">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-tc-text md:text-4xl">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-tc-text/80">
            Discover how we've helped businesses transform their operations and
            achieve remarkable growth through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Case Study 1 */}
          <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-tc-primary to-tc-secondary"></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-tc-text">
                E-commerce Platform Transformation
              </h3>
              <p className="mb-4 text-tc-text/70">
                Helped a retail company increase their online sales by 300%
                through a custom e-commerce solution.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-tc-primary/10 px-2 py-1 text-xs text-tc-primary">
                  React
                </span>
                <span className="rounded bg-tc-primary/10 px-2 py-1 text-xs text-tc-primary">
                  Node.js
                </span>
                <span className="rounded bg-tc-primary/10 px-2 py-1 text-xs text-tc-primary">
                  AWS
                </span>
              </div>
              <button className="font-medium text-tc-primary transition-colors hover:text-tc-secondary">
                Read More →
              </button>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-tc-secondary to-tc-accent"></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-tc-text">
                Healthcare Management System
              </h3>
              <p className="mb-4 text-tc-text/70">
                Streamlined patient management for a healthcare provider,
                reducing administrative time by 60%.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-tc-secondary/10 px-2 py-1 text-xs text-tc-secondary">
                  Vue.js
                </span>
                <span className="rounded bg-tc-secondary/10 px-2 py-1 text-xs text-tc-secondary">
                  Python
                </span>
                <span className="rounded bg-tc-secondary/10 px-2 py-1 text-xs text-tc-secondary">
                  PostgreSQL
                </span>
              </div>
              <button className="font-medium text-tc-primary transition-colors hover:text-tc-secondary">
                Read More →
              </button>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 bg-gradient-to-br from-tc-accent to-tc-primary"></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-tc-text">
                Financial Analytics Dashboard
              </h3>
              <p className="mb-4 text-tc-text/70">
                Built a real-time analytics platform that improved
                decision-making speed by 200%.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-tc-accent/10 px-2 py-1 text-xs text-tc-accent">
                  Angular
                </span>
                <span className="rounded bg-tc-accent/10 px-2 py-1 text-xs text-tc-accent">
                  Django
                </span>
                <span className="rounded bg-tc-accent/10 px-2 py-1 text-xs text-tc-accent">
                  Redis
                </span>
              </div>
              <button className="font-medium text-tc-primary transition-colors hover:text-tc-secondary">
                Read More →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center rounded-lg bg-tc-primary px-8 py-3 font-medium text-white transition-colors hover:bg-tc-secondary">
            View All Case Studies
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
