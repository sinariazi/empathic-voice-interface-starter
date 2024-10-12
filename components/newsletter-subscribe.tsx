"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function NewsletterSubscribeComponent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Mailchimp form action URL (from the Mailchimp embed form)
    const url =
      "https://gmail.us22.list-manage.com/subscribe/post?u=3d5f4e43e5bf5811dd3f13e28&id=2b82c179f2&f_id=0039d1e1f0";

    // Mailchimp requires form data to be submitted as FormData
    const formData = new FormData();
    formData.append("EMAIL", email); // Append the email to the form

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Mailchimp allows no-cors requests
      });

      if (response.ok || response.type === "opaque") {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">
            Subscribe to Our Newsletter
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get the latest mental health tips, app updates, and exclusive
            content delivered to your inbox.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="space-y-2">
            <Label htmlFor="email" />
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-xs text-gray-500">
          By subscribing, you agree to our terms and privacy policy.
        </p>
        {status === "success" && (
          <Alert className="mt-4 bg-green-100 border-green-400 text-green-400">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        {status === "error" && (
          <Alert className="mt-4 bg-red-100 border-red-400 text-red-400">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
