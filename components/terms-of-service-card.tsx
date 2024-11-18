'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TermsOfServiceCard() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Terms of Service</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
            <p>
              Welcome to <strong>Moodwhisper</strong>! These Terms of Service ("Terms") govern your access to and use of Moodwhisper's platform and services. By using our services, you agree to these Terms. If you do not agree, please refrain from using the platform.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Moodwhisper"</strong> refers to the platform, its services, and associated software owned and operated by [Your Company Name].</li>
                <li><strong>"User"</strong> refers to any individual or entity accessing Moodwhisper, including company administrators, employees, or representatives.</li>
                <li><strong>"Client"</strong> refers to the organization subscribing to Moodwhisper's services.</li>
                <li><strong>"Employee Data"</strong> refers to any personal data collected, processed, or stored about employees through the Moodwhisper platform.</li>
                <li><strong>"AI Features"</strong> refers to Moodwhisper's artificial intelligence-powered tools, including sentiment analysis, predictive modeling, and recommendations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Platform Services</strong>: Moodwhisper provides employee engagement tools, including surveys, analytics dashboards, and AI-driven insights to improve workplace engagement.</li>
                <li><strong>Compliance Standards</strong>: All services are designed in compliance with GDPR, EU AI Act, and relevant data protection laws.</li>
                <li><strong>Subscription Model</strong>: Services are provided on a subscription basis, as outlined in your Service Agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Data Privacy and GDPR Compliance</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.1 GDPR Overview</h3>
              <p>
                Moodwhisper is committed to protecting personal data in compliance with the <strong>General Data Protection Regulation (GDPR)</strong> (Regulation (EU) 2016/679).
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Roles and Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Controller</strong>: The Client is the Data Controller, responsible for determining the purposes and means of processing Employee Data.</li>
                <li><strong>Data Processor</strong>: Moodwhisper acts as the Data Processor, processing Employee Data on behalf of the Client.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.3 Data Processing Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose of Processing</strong>: Employee Data is processed to provide insights into workplace engagement and satisfaction.</li>
                <li><strong>Lawful Basis</strong>: The Client must establish a lawful basis for processing Employee Data, such as consent, legitimate interest, or performance of a contract.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.4 Employee Rights Under GDPR</h3>
              <p>Employees (data subjects) have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access</strong>: Employees can request access to their personal data.</li>
                <li><strong>Right to Rectification</strong>: Employees can request corrections to inaccurate data.</li>
                <li><strong>Right to Erasure</strong>: Employees can request deletion of their data under specific circumstances (Right to Be Forgotten).</li>
                <li><strong>Right to Data Portability</strong>: Employees can request a copy of their data in a machine-readable format.</li>
                <li><strong>Right to Object</strong>: Employees can object to data processing based on legitimate interests or direct marketing.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.5 Data Retention</h3>
              <p>
                Employee Data will be retained for the duration of the subscription unless otherwise requested by the Client. Data will be permanently deleted within [30 days] of account termination unless anonymized for benchmarking or compliance purposes.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">3.6 Data Breaches</h3>
              <p>
                Moodwhisper will notify the Client of any personal data breach within 72 hours of discovery, in compliance with GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. AI Usage and Compliance</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Transparency</h3>
              <p>
                Moodwhisper's AI tools use data to provide sentiment analysis, predictive insights, and engagement recommendations. Clients and employees will be informed whenever AI is used.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Bias Mitigation</h3>
              <p>
                Moodwhisper ensures that its AI systems are regularly audited to identify and minimize potential biases.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Impact Assessments</h3>
              <p>
                Where required, Moodwhisper conducts <strong>AI Impact Assessments</strong> in compliance with the <strong>EU AI Act</strong> to evaluate risks associated with AI features.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">4.4 Non-Discrimination</h3>
              <p>
                AI insights are not intended to support or justify discriminatory practices. Clients should not use Moodwhisper insights as the sole basis for critical decisions like promotions, terminations, or legal actions.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">4.5 Employee Transparency</h3>
              <p>
                Employees have the right to understand how their data is processed by AI, including the logic, purpose, and outcomes of AI analysis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Security Measures</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Data Security</h3>
              <p>
                Moodwhisper employs state-of-the-art security measures, including encryption, access controls, and regular vulnerability assessments, to protect Employee Data.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Third-Party Processors</h3>
              <p>
                Moodwhisper may use trusted third-party providers to deliver its services. Any third-party processor is contractually obligated to comply with GDPR and equivalent security standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Client Responsibilities</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.1 Obtaining Consent</h3>
              <p>
                Clients are responsible for obtaining any required consents from employees before collecting and processing their data through Moodwhisper.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.2 Legal Compliance</h3>
              <p>
                Clients must ensure that their use of Moodwhisper complies with local employment and data protection laws.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Data Management</h3>
              <p>
                Clients are responsible for managing access to Employee Data within their organization, including limiting unnecessary access to sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Data Deletion</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">7.1 Employee Data Deletion</h3>
              <p>
                Clients may delete Employee Data through the admin dashboard at any time. Deleted data will be irreversibly erased within [30 days].
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">7.2 Account Termination</h3>
              <p>
                Upon account termination, all data will be permanently deleted unless anonymized for aggregated reporting or required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Platform Limitations</h3>
              <p>
                Moodwhisper provides tools and insights but does not guarantee specific outcomes or assume liability for business decisions made based on the platform's data or insights.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.2 AI Outputs</h3>
              <p>
                Moodwhisper's AI tools are designed to support, not replace, human judgment. Clients should validate AI-driven insights before making significant decisions.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">8.3 Exclusions</h3>
              <p>
                Moodwhisper is not liable for indirect, incidental, or consequential damages arising from platform use, except as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Governing Law and Dispute Resolution</h2>
              <p>
                9.1 These Terms are governed by the laws of <strong>Austria</strong> and comply with EU regulations, including GDPR and the EU AI Act.
              </p>
              <p>
                9.2 Any disputes arising from these Terms will be subject to the jurisdiction of courts in <strong>Vienna, Austria</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. Modifications to Terms</h2>
              <p>
                Moodwhisper reserves the right to update these Terms to reflect changes in laws or business practices. Clients will be notified of any material changes at least <strong>30 days</strong> in advance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. Contact Information</h2>
              <p>If you have questions about these Terms or your data rights, contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email</strong>: [Your Email Address]</li>
                <li><strong>Address</strong>: [Your Company Address]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Acceptance</h2>
              <p>
                By accessing or using Moodwhisper, you acknowledge that you have read, understood, and agree to these Terms, including provisions for GDPR and AI usage.
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}