export default function Footer() {
  return (
    // On small screens, when the page has the sticky Call/WhatsApp bar (69px tall),
    // add its height as bottom padding so the bar never covers the footer text.
    <footer className="bg-[#083822] py-6 text-sm text-[#bfe3cc] group-has-[[data-sticky-bar]]:max-md:pb-[93px]">
      <div className="mx-auto max-w-[1100px] px-4">
        <p className="font-semibold text-white">Sharma Academy</p>
        <p>Dilsukhnagar, Hyderabad · Class 8–10 · Inter MPC · EAMCET</p>
        <p className="mt-2">
          Address: [PENDING] · Phone: [PENDING] · WhatsApp: [PENDING]
        </p>
      </div>
    </footer>
  );
}
