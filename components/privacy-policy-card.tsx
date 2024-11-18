'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PrivacyPolicyCard() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
            <p>
              <strong>Moodwhisper</strong> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect personal data when you access or use our services. By using Moodwhisper, you consent to the practices described in this policy.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-2">1. Data Controller and Data Processor</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">1.1 Data Controller</h3>
              <p>
                The subscribing organization (our Client) acts as the Data Controller, determining the purposes and legal basis for processing Employee Data.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">1.2 Data Processor</h3>
              <p>
                Moodwhisper acts as the Data Processor, handling Employee Data on behalf of and under the instructions of the Client.
              </p>
              <p>
                If you have questions about how your data is managed, please contact your employer or the subscribing organization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Data We Collect</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Personal Data</h3>
              <p>The following types of personal data may be collected:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Employee Data</strong>: Name, email address, job role, department, and responses to employee surveys.</li>
                <li><strong>Client Admin Data</strong>: Name, email address, phone number, and account-related details.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">2.2 Usage Data</h3>
              <p>
                We collect data about how you interact with the platform, such as IP address, browser type, and activity logs, to improve user experience and ensure security.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">2.3 Anonymized Data</h3>
              <p>
                Survey responses and feedback may be anonymized and aggregated for benchmarking or analytical purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Purpose of Data Processing</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.1 For Employee Engagement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To analyze survey responses and provide insights to improve employee satisfaction and workplace engagement.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.2 For Platform Functionality</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To manage user accounts, facilitate communication, and provide customer support.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.3 For Compliance and Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To ensure data security, prevent unauthorized access, and comply with legal obligations.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.4 For AI Insights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>To use AI features for sentiment analysis, predictive modeling, and recommendations while ensuring compliance with the EU AI Act and GDPR.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Legal Basis for Processing</h2>
              <p>We process personal data based on one or more of the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent</strong>: Explicit consent provided by employees through survey participation.</li>
                <li><strong>Legitimate Interest</strong>: To provide analytics and insights to Clients for improving workplace engagement.</li>
                <li><strong>Contractual Obligation</strong>: To fulfill our service agreement with the Client.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Employee Rights Under GDPR</h2>
              <p>Employees (data subjects) have the following rights under GDPR:</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Right to Access</h3>
              <p>You can request access to your personal data and how it is processed.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Right to Rectification</h3>
              <p>You can request corrections to inaccurate or incomplete data.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.3 Right to Erasure</h3>
              <p>You can request deletion of your data when it is no longer necessary or when consent is withdrawn.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.4 Right to Data Portability</h3>
              <p>You can request a copy of your data in a machine-readable format.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.5 Right to Restriction or Objection</h3>
              <p>You can object to certain data processing activities or request a restriction on data use.</p>
              <p className="mt-2">To exercise your rights, contact your employer or the subscribing organization.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Data Sharing</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.1 With Clients</h3>
              <p>We share Employee Data and analytics with the subscribing organization, following their instructions.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.2 Third-Party Processors</h3>
              <p>We may use trusted third-party processors for hosting, analytics, or support services. These processors are contractually obligated to comply with GDPR and equivalent security standards.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Legal Obligations</h3>
              <p>We may disclose personal data to comply with legal requirements, such as court orders or regulatory investigations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">7.1 Retention Period</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employee Data is retained for the duration of the subscription and is deleted within <strong>30 days</strong> after termination unless otherwise requested by the Client.</li>
                <li>Anonymized and aggregated data may be retained indefinitely for analytical purposes.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">7.2 Client Responsibility</h3>
              <p>The Client is responsible for managing the retention of Employee Data within their organization.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Security Measures</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Data Encryption</h3>
              <p>All personal data is encrypted during transmission (SSL/TLS) and at rest.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.2 Access Controls</h3>
              <p>Access to personal data is restricted to authorized personnel who require it to perform their job functions.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.3 Incident Response</h3>
              <p>In the event of a data breach, we will notify affected Clients within <strong>72 hours</strong>, as required by GDPR.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. AI-Specific Processing</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Transparency</h3>
              <p>Moodwhisper uses AI for sentiment analysis and predictive modeling. Employees can request an explanation of AI-based decisions and how their data contributed to those outcomes.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Bias Mitigation</h3>
              <p>Our AI models are regularly audited to minimize bias and ensure fairness.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Opt-Out</h3>
              <p>Employees may request to opt out of AI-driven insights where possible. However, this may limit the platform's functionality for the Client.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Data Transfers</h2>
              <p>Moodwhisper ensures compliance with GDPR when transferring data outside the European Economic Area (EEA):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transfers are made only to countries with adequate data protection laws or under standard contractual clauses approved by the European Commission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. Children's Privacy</h2>
              <p>Moodwhisper is not designed for use by individuals under the age of 16, and we do not knowingly collect data from children.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">12. Updates to This Privacy Policy</h2>
              <p>We may update this Privacy Policy to reflect changes in regulations or business practices. Clients will be notified of material changes at least <strong>30 days</strong> in advance.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">13. Contact Information</h2>
              <p>If you have questions about this Privacy Policy or your data rights, contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email</strong>: [Your Email Address]</li>
                <li><strong>Address</strong>: [Your Company Address]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Acceptance</h2>
              <p>By using Moodwhisper, you confirm that you have read, understood, and agreed to this Privacy Policy.</p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}