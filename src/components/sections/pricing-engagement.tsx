'use client';

export function PricingEngagement() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-tc-text md:text-4xl">
            Flexible Pricing Plans
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-tc-text/80">
            Choose the perfect plan for your business needs. All plans include
            our core features with varying levels of support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-tc-text">Starter</h3>
            <p className="mb-4 text-tc-text/70">
              Perfect for small businesses and startups
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-tc-text">$2,999</span>
              <span className="text-tc-text/70">/project</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic web application
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                3 months support
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Email support
              </li>
            </ul>
            <button className="w-full rounded-lg bg-tc-primary py-3 font-medium text-white transition-colors hover:bg-tc-secondary">
              Get Started
            </button>
          </div>

          {/* Growth Plan */}
          <div className="relative rounded-xl bg-tc-primary p-8 text-white shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-tc-accent px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Growth</h3>
            <p className="mb-4 text-white/80">
              For growing businesses with complex needs
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$7,999</span>
              <span className="text-white/80">/project</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Full-stack application
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                6 months support
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                API integrations
              </li>
            </ul>
            <button className="w-full rounded-lg bg-white py-3 font-medium text-tc-primary transition-colors hover:bg-gray-100">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-tc-text">
              Enterprise
            </h3>
            <p className="mb-4 text-tc-text/70">
              For large organizations with custom requirements
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-tc-text">Custom</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom development
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                12 months support
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated support
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom integrations
              </li>
            </ul>
            <button className="w-full rounded-lg border-2 border-tc-primary py-3 font-medium text-tc-primary transition-colors hover:bg-tc-primary hover:text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
