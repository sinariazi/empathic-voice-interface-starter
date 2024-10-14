"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

type FormData = {
  EMAIL: string;
  FNAME: string;
  LNAME: string;
  ADDRESS: {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  COMPANY: string;
  PHONE: string;
  BIRTHDAY: {
    month: string;
    day: string;
  };
  gdpr: {
    845: boolean;
    847: boolean;
  };
};

export default function EarlyUserSignUp() {
  const [formData, setFormData] = useState<FormData>({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    ADDRESS: {
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    COMPANY: "",
    PHONE: "",
    BIRTHDAY: {
      month: "",
      day: "",
    },
    gdpr: {
      845: false,
      847: false,
    },
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("ADDRESS[")) {
      const addressField = name.match(/\[(.*?)\]/)?.[1];
      if (addressField) {
        setFormData((prev) => ({
          ...prev,
          ADDRESS: { ...prev.ADDRESS, [addressField]: value },
        }));
      }
    } else if (name.startsWith("BIRTHDAY[")) {
      const birthdayField = name.match(/\[(.*?)\]/)?.[1];
      if (birthdayField) {
        setFormData((prev) => ({
          ...prev,
          BIRTHDAY: { ...prev.BIRTHDAY, [birthdayField]: value },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (
    name: "845" | "847",
    checked: boolean | "indeterminate"
  ) => {
    setFormData((prev) => ({
      ...prev,
      gdpr: { ...prev.gdpr, [name]: checked === true },
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmissionStatus("success");
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="text-center mb-8">
          <img
            src="/placeholder.svg?height=60&width=200"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-semibold text-blue-800">
            Join Our Waiting List
          </h2>
          <p className="text-blue-600">
            Be the first to experience luxury and calm
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://gmail.us22.list-manage.com/subscribe/post?u=3d5f4e43e5bf5811dd3f13e28&amp;id=2b82c179f2&amp;v_id=91&amp;f_id=0038d1e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div className="space-y-6">
            <div>
              <Label htmlFor="mce-EMAIL">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="mce-FNAME">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  required
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="mce-LNAME">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  required
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="mce-ADDRESS-addr1">Address</Label>
              <Input
                type="text"
                name="ADDRESS[addr1]"
                id="mce-ADDRESS-addr1"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="mce-ADDRESS-city">City</Label>
                <Input
                  type="text"
                  name="ADDRESS[city]"
                  id="mce-ADDRESS-city"
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="mce-ADDRESS-state">State/Province/Region</Label>
                <Input
                  type="text"
                  name="ADDRESS[state]"
                  id="mce-ADDRESS-state"
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="mce-ADDRESS-zip">Postal / Zip Code</Label>
                <Input
                  type="text"
                  name="ADDRESS[zip]"
                  id="mce-ADDRESS-zip"
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="mce-ADDRESS-country">Country</Label>
              <Input
                type="text"
                name="ADDRESS[country]"
                id="mce-ADDRESS-country"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="mce-COMPANY">Company (optional)</Label>
              <Input
                type="text"
                name="COMPANY"
                id="mce-COMPANY"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="mce-PHONE">Phone Number</Label>
              <Input
                type="tel"
                name="PHONE"
                id="mce-PHONE"
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mce-BIRTHDAY-month">Birthday Month</Label>
                <Input
                  type="text"
                  name="BIRTHDAY[month]"
                  id="mce-BIRTHDAY-month"
                  placeholder="MM"
                  maxLength={2}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="mce-BIRTHDAY-day">Birthday Day</Label>
                <Input
                  type="text"
                  name="BIRTHDAY[day]"
                  id="mce-BIRTHDAY-day"
                  placeholder="DD"
                  maxLength={2}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Marketing Permissions</Label>
              <p className="text-sm text-blue-600">
                Please select all the ways you would like to hear from Mood
                Whisper:
              </p>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="gdpr_845"
                  name="gdpr[845]"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("845", checked)
                  }
                />
                <Label htmlFor="gdpr_845">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="gdpr_847"
                  name="gdpr[847]"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("847", checked)
                  }
                />
                <Label htmlFor="gdpr_847">Phone</Label>
              </div>
            </div>
            <input
              type="hidden"
              name="b_3d5f4e43e5bf5811dd3f13e28_2b82c179f2"
              tabIndex={-1}
              value=""
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Subscribe
            </Button>
          </div>
          {submissionStatus === "success" && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Success</AlertTitle>
              <AlertDescription className="text-green-700">
                Thank you for subscribing! We'll be in touch soon.
              </AlertDescription>
            </Alert>
          )}
          {submissionStatus === "error" && (
            <Alert className="mt-4 bg-red-50 border-red-200">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Error</AlertTitle>
              <AlertDescription className="text-red-700">
                Oops! Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          )}
        </form>
        <p className="mt-6 text-xs text-center text-blue-600">
          We use Mailchimp as our marketing platform. By clicking above to
          subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing. Learn more about Mailchimp's privacy
          practices.
        </p>
      </div>
    </div>
  );
}
