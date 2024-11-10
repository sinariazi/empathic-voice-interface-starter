"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function PricingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Employee Engagement Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Boost productivity and happiness in your workplace with our
          comprehensive B2B SaaS solution.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Basic",
              price: "€6.50",
              features: [
                "Core engagement tools",
                "Basic analytics",
                "Up to 100 employees",
                "Email support",
              ],
              cta: "Get Started",
            },
            {
              title: "Advanced",
              price: "€10.00",
              features: [
                "All Basic features",
                "Advanced analytics",
                "Up to 500 employees",
                "Priority support",
                "Custom surveys",
              ],
              cta: "Upgrade Now",
            },
            {
              title: "Enterprise",
              price: "Contact Us",
              features: [
                "All Advanced features",
                "Unlimited employees",
                "Dedicated account manager",
                "Custom integrations",
                "On-site training",
              ],
              cta: "Contact Sales",
            },
          ].map((tier, index) => (
            <div
              key={tier.title}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                index === 1 ? "border-2 border-blue-500" : ""
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{tier.title}</h2>
                <p className="text-4xl font-bold mb-6">
                  {tier.price}
                  {tier.price !== "Contact Us" && (
                    <span className="text-lg font-normal">
                      {" "}
                      / person / month
                    </span>
                  )}
                </p>
                <ul className="mb-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{tier.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Increased Productivity
              </h3>
              <p className="text-gray-600">
                Boost your team's efficiency with our tailored engagement tools.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Better Retention</h3>
              <p className="text-gray-600">
                Keep your top talent happy and reduce turnover rates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                Make informed decisions with our advanced analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of companies that have transformed their workplace
            with our platform.
          </p>
          <Button size="lg">Request a Demo</Button>
        </div>
      </section>
    </div>
  );
}
