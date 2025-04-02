import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function terms() {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | Campaigning Source</title>
      </Head>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center my-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Campaigning Source Terms & Conditions
          </h1>
          <p className="mb-4">
            These Terms & Conditions ("Terms") govern your use of Campaigning
            Source's services, including but not limited to political promotion
            and business development solutions. By accessing or using
            Campaigning Source's services, you agree to be bound by these Terms.
            If you do not agree with any part of these Terms, you may not access
            or use our services.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            1. Scope of Services:
          </h2>
          <p className="mb-4 text-gray-300">
            Campaigning Source provides one-stop solutions for political
            promotion and business development. Our services include strategic
            consulting, marketing campaigns, digital advertising, data analysis,
            and other related services aimed at helping clients navigate the
            political landscape and grow their businesses.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            2. Client Responsibilities:
          </h2>
          <p className="mb-4 text-gray-300">
            Clients must provide accurate and complete information regarding
            their goals, objectives, and any relevant details necessary for
            Campaigning Source to deliver effective services. Clients are
            responsible for ensuring that they comply with all applicable laws
            and regulations in their use of our services.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            3. Intellectual Property:
          </h2>
          <p className="mb-4 text-gray-300">
            All intellectual property rights associated with Campaigning
            Source's services, including but not limited to trademarks,
            copyrights, and proprietary methodologies, belong to Campaigning
            Source. Clients may not use, copy, or distribute Campaigning
            Source's intellectual property without prior written consent.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">4. Confidentiality:</h2>
          <p className="mb-4 text-gray-300">
            Campaigning Source and clients agree to maintain the confidentiality
            of any sensitive information exchanged during the course of our
            engagement. This includes but is not limited to business strategies,
            proprietary data, and any other information marked as confidential.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            5. Payment and Billing:
          </h2>
          <p className="mb-4 text-gray-300">
            Clients agree to pay Campaigning Source for the services rendered in
            accordance with the agreed-upon payment terms. Failure to make
            timely payments may result in the suspension or termination of
            services. All fees and charges are non-refundable unless otherwise
            specified.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">6. Termination</h2>
          <p className="mb-4 text-gray-300">
            Either party may terminate the engagement with a written notice to
            the other party. Upon termination, clients remain responsible for
            any outstanding payments for services rendered up to the termination
            date.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">
            7. Limitation of Liability:
          </h2>
          <p className="mb-4 text-gray-300">
            Campaigning Source shall not be liable for any indirect, incidental,
            special, or consequential damages arising out of or in connection
            with our services, including but not limited to loss of profits,
            revenue, or data.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">8. Indemnification:</h2>
          <p className="mb-4 text-gray-300">
            Clients agree to indemnify and hold Campaigning Source harmless from
            any claims, losses, liabilities, damages, and expenses arising out
            of or in connection with their use of our services, including but
            not limited to any violation of these Terms.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">
            9. Governing Law and Dispute Resolution:
          </h2>
          <p className="mb-4 text-gray-300">
            These Terms shall be governed by and construed in accordance with
            the laws of the Republic of India. Any dispute, controversy, or
            claim arising out of or relating to these Terms, or the breach,
            termination, or invalidity thereof, shall be settled by arbitration
            in accordance with the Arbitration and Conciliation Act, 1996. The
            arbitration shall be conducted by a single arbitrator appointed by
            mutual agreement of the parties. If the parties fail to agree on an
            arbitrator, the arbitrator shall be appointed by the appropriate
            authority in accordance with the said Act. The seat of arbitration
            shall be Ghaziabad, India, and the language of the arbitration shall
            be English. The award of the arbitrator shall be final and binding
            upon the parties. The courts located in Ghaziabad, India, shall have
            exclusive jurisdiction over any disputes that are not subject to
            arbitration under this provision.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">10. Amendments: </h2>
          <p className="mb-4 text-gray-300">
            Campaigning Source reserves the right to amend these Terms at any
            time without prior notice. Any changes to these Terms will be
            effective immediately upon posting on our website. Continued use of
            our services after the posting of amended Terms constitutes
            acceptance of such changes.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">11. Severability:</h2>
          <p className="mb-4 text-gray-300">
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </p>

          <p className="mt-8 text-gray-300">
            By using Campaigning Source's services, you acknowledge that you
            have read, understood, and agreed to these Terms & Conditions. If
            you have any questions or concerns about these Terms, please contact
            us at{" "}
            <a
              className="text-blue-500"
              href="mailto:info@campaigningsource.com"
            >
              info@campaigningsource.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default terms;
