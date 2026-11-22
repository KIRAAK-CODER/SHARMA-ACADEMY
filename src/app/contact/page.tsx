import type { Metadata } from "next";
import Pending from "@/components/Pending";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = { title: "Contact – Sharma Academy" };

const details = ["Address", "Phone", "WhatsApp", "Timings"];

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10 md:py-16">
      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight text-main">
        Contact Sharma Academy, Dilsukhnagar
      </h1>
      <p lang="te" className="mb-8 mt-1.5 text-muted">
        మమ్మల్ని సంప్రదించండి
      </p>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <dl
            data-contact-details
            className="grid grid-cols-[96px_1fr] gap-x-4 gap-y-4 rounded-xl border border-[#cfe5d7] bg-white p-6"
          >
            {details.map((d) => (
              <div key={d} className="contents">
                <dt className="font-semibold text-muted">{d}</dt>
                <dd>
                  <Pending />
                </dd>
              </div>
            ))}
          </dl>

          <div
            data-map-box
            className="mt-6 grid h-[260px] place-items-center rounded-xl border border-dashed border-[#b9d3c3] bg-tint text-center text-sm text-muted"
          >
            <span>
              Google Map <Pending />
            </span>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </div>
  );
}
