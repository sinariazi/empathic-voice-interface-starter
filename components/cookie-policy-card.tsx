'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CookiePolicyCard() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Cookie Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
            <p>
              Moodwhisper ("we," "our," or "us") uses cookies and similar tracking technologies to improve user experience, analyze platform performance, and ensure security. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your actions and preferences over time, such as login details, language preferences, or activity history.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Types of Cookies</h3>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Necessary Cookies</strong>: Essential for the platform to function, such as enabling secure login and access to key features.</li>
                <li><strong>Performance Cookies</strong>: Help us understand how users interact with the platform by collecting anonymous usage statistics.</li>
                <li><strong>Functional Cookies</strong>: Enhance functionality by remembering your preferences and customizations.</li>
                <li><strong>Targeting/Advertising Cookies</strong>: Not applicable to Moodwhisper, as we do not use advertising cookies.</li>
                <li><strong>Third-Party Cookies</strong>: Used by trusted third-party services we integrate, such as analytics or hosting providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Why We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Authentication and Security</strong>: To verify user identity, prevent fraudulent use, and maintain the security of the platform.</li>
                <li><strong>Platform Performance</strong>: To analyze usage trends and improve functionality, ensuring a seamless user experience.</li>
                <li><strong>User Preferences</strong>: To store language settings, dashboard customizations, and other preferences.</li>
                <li><strong>Analytics</strong>: To collect aggregated data about user interactions, helping us improve the platform. We use tools like Google Analytics, which set cookies to track user activity anonymously.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Cookies We Use</h2>
              <p>Below is a list of cookies commonly used by Moodwhisper:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-border mt-2">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2">Cookie Name</th>
                      <th className="border border-border p-2">Purpose</th>
                      <th className="border border-border p-2">Type</th>
                      <th className="border border-border p-2">Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">session_id</td>
                      <td className="border border-border p-2">Authentication</td>
                      <td className="border border-border p-2">Necessary</td>
                      <td className="border border-border p-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">lang_pref</td>
                      <td className="border border-border p-2">Language preferences</td>
                      <td className="border border-border p-2">Functional</td>
                      <td className="border border-border p-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">_ga</td>
                      <td className="border border-border p-2">Analytics (Google)</td>
                      <td className="border border-border p-2">Performance</td>
                      <td className="border border-border p-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">_gat</td>
                      <td className="border border-border p-2">Analytics throttling</td>
                      <td className="border border-border p-2">Performance</td>
                      <td className="border border-border p-2">1 minute</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">_gid</td>
                      <td className="border border-border p-2">Analytics tracking</td>
                      <td className="border border-border p-2">Performance</td>
                      <td className="border border-border p-2">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Third-Party Cookies</h2>
              <p>We may integrate third-party services that use cookies. These services include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics</strong>: Used to understand user behavior and improve the platform. Data collected is anonymized and complies with GDPR. For more details, refer to <a href="https://policies.google.com/privacy" className="text-primary hover:underline">Google's Privacy Policy</a>.
                </li>
                <li>
                  <strong>Hosting Services</strong>: Third-party hosting providers may use cookies to optimize performance and ensure uptime.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Managing Cookies</h2>
              <p>
                You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the platform.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Steps to Manage Cookies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Chrome</strong>: Go to Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
                <li><strong>Mozilla Firefox</strong>: Go to Options &gt; Privacy & Security &gt; Cookies and Site Data.</li>
                <li><strong>Safari</strong>: Go to Preferences &gt; Privacy &gt; Cookies and website data.</li>
                <li><strong>Microsoft Edge</strong>: Go to Settings &gt; Cookies and site permissions.</li>
              </ul>
              <p className="mt-2">
                For more detailed instructions, visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">https://www.allaboutcookies.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Consent to Use Cookies</h2>
              <p>
                When you first visit Moodwhisper, we display a cookie banner to obtain your consent for non-essential cookies. You can withdraw or modify your consent at any time via your account settings or browser controls.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in laws, technology, or business practices. Updates will be communicated on our platform, and the "Effective Date" at the top will be revised accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
              <p>If you have questions about this Cookie Policy or your data privacy, contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email</strong>: [Your Email Address]</li>
                <li><strong>Address</strong>: [Your Company Address]</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}