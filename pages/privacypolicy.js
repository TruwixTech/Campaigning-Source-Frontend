import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export default function privacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Campaigning Source</title>
      </Head>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center my-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Privacy Policy for Campaigning Source
          </h1>
          <p className="mb-4 text-gray-300">Effective Date: 04-03-2024</p>
          <p className="mb-4 text-gray-300">
            Thank you for choosing Campaigning Source ("we", "us", or "our").
            This Privacy Policy is intended to inform you about how we collect,
            use, and disclose information when you use our services, including
            our website, and any other products or services provided by
            Campaigning Source (collectively, the "Services").
          </p>

          <p className="mb-4 text-gray-300">
            By accessing or using our Services, you agree to the terms of this
            Privacy Policy. If you do not agree with this Privacy Policy, please
            do not use our Services.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4 text-gray-300">
            We collect information from you when you use our Services,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Personal Information: This may include your name, email address,
              postal address, phone number, and any other information you
              provide to us.
            </li>
            <li>
              Usage Information: We collect information about how you use our
              Services, such as the pages you visit, the features you use, and
              the actions you take.
            </li>
            <li>
              Device Information: We collect information about the device you
              use to access our Services, such as your device type, operating
              system, and browser type.
            </li>
            <li>
              Log Data: When you use our Services, our servers automatically
              record certain information, including your IP address, access
              times, and other diagnostic data.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-300">
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Providing and improving our Services;</li>
            <li>
              Communicating with you, including responding to your inquiries and
              providing customer support;
            </li>
            <li>
              Personalizing your experience and delivering content tailored to
              your interests;
            </li>
            <li>
              Analyzing trends, administering our Services, and diagnosing
              technical issues;
            </li>
            <li>
              Detecting and preventing fraud and ensuring the security of our
              Services;
            </li>
            <li>
              Complying with legal obligations and enforcing our Terms of
              Service.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-2">
            3. Information Sharing and Disclosure
          </h2>
          <p className="mb-4 text-gray-300">
            We may share your information with third parties in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              With service providers: We may share your information with
              third-party service providers who help us operate our Services,
              such as hosting providers, payment processors, and analytics
              providers.
            </li>
            <li>
              With business partners: We may share your information with our
              business partners to offer you products or services that may be of
              interest to you.
            </li>
            <li>
              For legal purposes: We may disclose your information in response
              to a subpoena, court order, or other legal request, or to protect
              our rights, property, or safety, or the rights, property, or
              safety of others.
            </li>
            <li>
              In connection with a merger, acquisition, or sale of assets: If we
              are involved in a merger, acquisition, financing, or sale of
              assets, your information may be transferred as part of that
              transaction.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4 text-gray-300">
            We take reasonable measures to protect the information we collect
            from loss, misuse, and unauthorized access, disclosure, alteration,
            and destruction.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">5. Your Choices</h2>
          <p className="mb-4 text-gray-300">
            You can choose not to provide certain information to us, but please
            note that this may limit your ability to use certain features of our
            Services.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            6. Changes to this Privacy Policy
          </h2>
          <p className="mb-4 text-gray-300">
            We may update this Privacy Policy from time to time. If we make any
            material changes, we will notify you by posting the updated Privacy
            Policy on this page.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">7. Contact Us</h2>
          <p className="mb-4 text-gray-300">
            If you have any questions or concerns about this Privacy Policy or
            our practices regarding your information, please contact us at
            &nbsp;
            <a
              href="mailto:info@campaigningsource.com"
              className="text-blue-500"
            >
              info@campaigningsource.com
            </a>
            .
          </p>

          <p className="mb-4 text-gray-300">
            By using our Services, you consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
