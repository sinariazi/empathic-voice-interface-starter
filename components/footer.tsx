"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/moodWhisper/aboutUs"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/features"
                className="hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/blog/1"
                className="hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/moodWhisper/pricing"
                className="hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/moodWhisper/legal/privacyPolicy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/moodWhisper/legal/cookies"
                className="hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/moodWhisper/legal/termsOfService"
                className="hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567013215814"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/mood-whisper"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">Linkedin</span>
              </a>
              <a
                href="https://www.instagram.com/moodwhisper_ai/"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a
                href="mailto:support@moodwhisper.com"
                className="hover:text-blue-600 transition-colors"
              >
                support@moodwhisper.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <a
                href="tel:+436607298774"
                className="hover:text-blue-600 transition-colors"
              >
                +43 (660) 729-8774
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} Moodwhisper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
