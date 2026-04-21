import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { type MembershipTier } from "./MembershipCard";
import { Logo } from "./GuestPage";

interface InviteToJoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollSuccess?: (tier: MembershipTier) => void;
  onMatchDetected?: (matchingFields: Array<'email' | 'phone' | 'lastName'>, formData: any) => void;
  initialData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
  };
  isPotentialMember?: boolean;
  isApiUnavailable?: boolean;
}

const LANGUAGES = [
  { code: "SE", label: "Swedish" },
  { code: "NO", label: "Norwegian" },
  { code: "FI", label: "Finnish" },
  { code: "DK", label: "Danish" },
  { code: "ENG", label: "English" },
];

const GENDERS = ["female", "male", "unknown"];

// Comprehensive country list
const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe",
];

export function InviteToJoinModal({ isOpen, onClose, onEnrollSuccess, onMatchDetected, initialData, isPotentialMember, isApiUnavailable }: InviteToJoinModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    language: "SE", // Default to SE (Swedish) as property country code fallback
    birthday: "",
    country: "",
    zipCode: "",
    gender: "",
    city: "",
    address: "",
    coAddress: "",
  });

  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false); // Reset success state when opened
      setEmailConfirmed(false); // Reset email confirmation
      setIsSubmitting(false);
      setIsApiError(false);
    }

    if (isOpen && initialData) {
      const isOtaEmail = initialData.email?.match(/@(booking\.com|expedia\.com|agoda\.com)/i);

      setFormData(prev => ({
        ...prev,
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: isOtaEmail ? "" : (initialData.email || ""),
        mobile: initialData.mobile || "",
        language: "SE", // Default to hotel country code (assumed Swedish here)
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);

      if (isApiUnavailable) {
        setIsApiError(true);
        return;
      }

      // Simulate checking against database
      const matches: Array<'email' | 'phone' | 'lastName'> = [];
      if (isPotentialMember !== false) {
        if (formData.email && formData.email.toLowerCase() === "victoria.wangkorsmo@gmail.com") matches.push('email');
        if (formData.mobile && (formData.mobile.replace(/[\s+]/g, '') === "98271928" || formData.mobile.includes("98271928"))) matches.push('phone');
      }

      if (matches.length > 0 && onMatchDetected) {
        onMatchDetected(matches, formData);
        return;
      }

      // Simulate successful enrollment if no matches
      console.log("Submitting enrollment data:", formData);
      setIsSuccess(true);
    }, 800);
  };

  const handleDone = () => {
    if (onEnrollSuccess) {
      onEnrollSuccess("blue"); // Give the guest "blue" tier upon enrollment
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div 
        className="bg-white rounded-[12px] w-[1000px] max-w-[95vw] max-h-[95vh] overflow-y-auto shadow-xl"
        style={{ fontFamily: "var(--font-strawberry-text)" }}
      >
        <div className="sticky top-0 bg-white z-10 flex items-center px-[24px] py-[16px] border-b border-[#EBE9E7]">
          <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
            {isSuccess ? "Successfully Enrolled!" : "Invite to join"}
          </h2>
        </div>

        {isApiError ? (
          <div className="p-[40px] flex flex-col items-center justify-center text-center max-w-[520px] mx-auto">
            <div className="size-[56px] rounded-full bg-[#FFF0F0] flex items-center justify-center border border-[#FFCDD2] mb-[20px]">
              <svg className="w-[28px] h-[28px] text-[#C41E3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-[24px] mb-[12px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
              Enrollment service offline
            </h3>
            
            <p className="text-[16px] text-[#71706F] mb-[28px] leading-relaxed" style={{ fontWeight: "var(--font-weight-regular)" }}>
              The membership system is currently experiencing a connection issue. Your form was not submitted. To prevent creating duplicate profiles, please don't try again right now.
            </p>
            
            <div className="bg-[#F7F5F3] p-[20px] rounded-[8px] w-full text-left mb-[32px] border border-[#EBE9E7]">
              <div className="flex items-start gap-[12px]">
                <div className="mt-[4px] w-[16px] h-[16px] rounded-full bg-[#EBE9E7] flex items-center justify-center shrink-0">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#71706F]" />
                </div>
                <div>
                  <p className="text-[14px] text-[#121110] mb-[4px]" style={{ fontWeight: "var(--font-weight-bold)" }}>What to do instead</p>
                  <p className="text-[14px] text-[#71706F] leading-relaxed">
                    Kindly ask the guest to enroll using the Strawberry app or at strawberry.se. Alternatively, you can save their details and try again later.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full">
              <button 
                onClick={onClose}
                className="w-full py-[12px] bg-[#F7F5F3] hover:bg-[#EBE9E7] text-[#121110] border border-[#EBE9E7] rounded-[6px] transition-colors text-[16px] shadow-sm"
                style={{ fontWeight: "var(--font-weight-bold)" }}
              >
                Back to Guest
              </button>
            </div>
          </div>
        ) : isSuccess ? (
          <div className="p-[32px] flex flex-col items-center justify-center text-center space-y-[24px]">
            <Logo className="size-[64px]" />
            <div className="space-y-[8px]">
              <h3 className="text-[24px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                Welcome to Strawberry!
              </h3>
              <p className="text-[16px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-regular)" }}>
                {formData.firstName} {formData.lastName} has successfully been enrolled and is now a Blue member.
              </p>
            </div>
            <div className="w-full pt-[16px]">
              <button 
                onClick={handleDone}
                className="w-full py-[12px] bg-[#5A0032] hover:bg-[#7A0043] text-white rounded-[6px] transition-colors text-[16px]"
                style={{ fontWeight: "var(--font-weight-bold)" }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-[24px] space-y-[16px]">
          {/* Row 1: Mobile | Email address | Language */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Mobile *</label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={e => handleChange("mobile", e.target.value)}
                placeholder="Example: +46700000000"
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Email address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => handleChange("email", e.target.value)}
                placeholder="email@strawberry.se"
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Language *</label>
              <div className="relative">
                <select
                  required
                  value={formData.language}
                  onChange={e => handleChange("language", e.target.value)}
                  className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] appearance-none focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032] bg-white"
                >
                  {LANGUAGES.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-[12px] top-[10px] w-[16px] h-[16px] text-[#71706F] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 2: First Name | Last Name | Birthday date */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>First Name *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={e => handleChange("firstName", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Last Name *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={e => handleChange("lastName", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Birthday date *</label>
              <input
                type="text"
                required
                value={formData.birthday}
                onChange={e => handleChange("birthday", e.target.value)}
                placeholder="YYYY-MM-DD"
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
          </div>

          {/* Row 3: Country | City (Optional) | Zip Code (Optional) */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Country *</label>
              <div className="relative">
                <select
                  required
                  value={formData.country}
                  onChange={e => handleChange("country", e.target.value)}
                  className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] appearance-none focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032] bg-white"
                >
                  <option value="">Select country</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-[12px] top-[10px] w-[16px] h-[16px] text-[#71706F] pointer-events-none" />
              </div>
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>City (Optional)</label>
              <input
                type="text"
                value={formData.city}
                onChange={e => handleChange("city", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Zip Code (Optional)</label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={e => handleChange("zipCode", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
          </div>

          {/* Row 4: Address (Optional) | Co-Address (Optional) | Gender (optional) */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Address (Optional)</label>
              <input
                type="text"
                value={formData.address}
                onChange={e => handleChange("address", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Co-Address (Optional)</label>
              <input
                type="text"
                value={formData.coAddress}
                onChange={e => handleChange("coAddress", e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032]"
              />
            </div>
            <div className="space-y-[6px]">
              <label className="text-[14px] text-[#71706F]" style={{ fontWeight: "var(--font-weight-medium)" }}>Gender (optional)</label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={e => handleChange("gender", e.target.value)}
                  className="w-full px-[12px] py-[8px] border border-[#D8D4D0] rounded-[6px] appearance-none focus:outline-none focus:border-[#5A0032] focus:ring-1 focus:ring-[#5A0032] bg-white text-[#71706F]"
                >
                  <option value="">Select gender</option>
                  {GENDERS.map(g => (
                    <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-[12px] top-[10px] w-[16px] h-[16px] text-[#71706F] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Email confirmation checkbox */}
          <div className="flex items-center gap-[8px]">
            <input
              type="checkbox"
              id="email-confirm"
              checked={emailConfirmed}
              onChange={e => setEmailConfirmed(e.target.checked)}
              className="w-[16px] h-[16px] rounded accent-[#5A0032] cursor-pointer"
            />
            <label htmlFor="email-confirm" className="text-[14px] text-[#403D3B] cursor-pointer select-none" style={{ fontWeight: "var(--font-weight-regular)" }}>
              I confirm the provided email address is correct
            </label>
          </div>

          <div className="pt-[12px] border-t border-[#EBE9E7] flex justify-end gap-[12px]">
            <button
              type="button"
              onClick={onClose}
              className="px-[16px] py-[8px] rounded-[8px] bg-[#F7F5F3] hover:bg-[#EBE9E7] text-[#403D3B] transition-colors"
              style={{ fontWeight: "var(--font-weight-bold)" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!emailConfirmed || isSubmitting}
              className="px-[16px] py-[8px] rounded-[8px] bg-[#960014] hover:bg-[#7A0010] text-white transition-colors flex items-center justify-center gap-[8px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#960014] min-w-[140px]"
              style={{ fontWeight: "var(--font-weight-bold)" }}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-[16px] h-[16px] animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                    <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" className="opacity-75"/>
                  </svg>
                  <span>Enrolling...</span>
                </>
              ) : (
                "Enroll member"
              )}
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}