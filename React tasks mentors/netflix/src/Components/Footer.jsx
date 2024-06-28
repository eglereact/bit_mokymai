import LanguageButton from "./LanguageButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white/70 flex justify-center py-16">
      <div className="flex flex-col justify-start items-start  w-3/5 gap-4">
        <h3 className="underline">Questions? Contact us.</h3>
        <div className="grid grid-cols-4 underline text-sm w-full">
          <ul className="flex flex-col gap-2">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <li>Ad Choices</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Guarantee</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>Legal Notices</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <LanguageButton />
        <h4 className="text-sm">Netflix Lithuania</h4>
      </div>
    </footer>
  );
};
export default Footer;
