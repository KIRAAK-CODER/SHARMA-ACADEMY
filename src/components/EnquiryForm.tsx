import Pending from "@/components/Pending";

const classes = [
  "Class 8",
  "Class 9",
  "Class 10",
  "Inter MPC – 1st Year",
  "Inter MPC – 2nd Year",
  "EAMCET Coaching",
];

const field =
  "mt-1 block min-h-12 w-full rounded-lg border border-[#b9d3c3] bg-white px-4 text-base text-ink";

// DESIGN ONLY. Submitting is switched off; it will be connected to the database on Day 8.
export default function EnquiryForm() {
  return (
    <form className="rounded-xl border border-[#cfe5d7] bg-white p-6" aria-labelledby="enquiry-title">
      <h2 id="enquiry-title" className="text-xl font-bold text-main">
        Admission enquiry
      </h2>
      <p lang="te" className="mb-5 mt-1 text-muted">
        అడ్మిషన్ విచారణ
      </p>

      <label className="mb-4 block font-semibold" htmlFor="student-name">
        Student&apos;s name
        <input id="student-name" name="studentName" type="text" autoComplete="off" className={field} />
      </label>

      <label className="mb-4 block font-semibold" htmlFor="parent-phone">
        Parent&apos;s phone
        <input id="parent-phone" name="parentPhone" type="tel" inputMode="tel" autoComplete="tel" className={field} />
      </label>

      <label className="mb-6 block font-semibold" htmlFor="class">
        Class
        <select id="class" name="class" defaultValue="" className={field}>
          <option value="" disabled>
            Select class
          </option>
          {classes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled
        className="min-h-[52px] w-full rounded-lg bg-main px-6 text-[17px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Send enquiry
      </button>

      <p className="mt-3 text-sm text-muted" data-form-note>
        Design only for now – this form will be connected to the database on Day 8. <Pending label="[PENDING]" />
      </p>
    </form>
  );
}
