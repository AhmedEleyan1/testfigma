import { useState } from "react";
import { MembershipCard, type MembershipTier } from "./MembershipCard";
import { InviteToJoinModal } from "./InviteToJoinModal";
import { SpaBookingPanel } from "./SpaBookingPanel";
import { LeftNavigation } from "./LeftNavigation";
import svgPaths from "../../imports/svg-z5wqpc8gre";
import imgTopMenuBtn from "figma:asset/89fd3907d8b56f3b5f722371743eeb824ae3c33a.png";
import { imgNotifications } from "../../imports/svg-bc7kn";
import { BackButton } from "./BackButton";

export function Logo({ className = "size-[40px]" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`} data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="logo">
          <g id="Union">
            <path d={svgPaths.p3321f00} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1247b100} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.pfc45580} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1122e200} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.pcc75d80} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p21adb880} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p28d1be80} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.pb89abf0} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p2b538ec0} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p2dd70ca0} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p33334700} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1703600} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p3eaf16b0} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p15a9b680} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p245a7400} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p118e5800} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1ca2bc0} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1d012800} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p1f4a9c00} fill="var(--fill-0, #121110)" />
            <path d={svgPaths.p234a9180} fill="var(--fill-0, #121110)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowsCaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / caret down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_drop_down">
          <mask height="20" id="mask0_1_3137" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3137)">
            <path d={svgPaths.p3420e900} fill="var(--fill-0, black)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MainSearch() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="main / search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="main / search">
          <mask height="18" id="mask0_1_3233" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1_3233)">
            <path d={svgPaths.p19b66580} fill="var(--fill-0, #5A0032)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[80px] w-full border-b border-[#D8D4D0]">
      <div className="content-stretch flex items-center justify-between px-[32px] py-[8px] h-full">
        <div className="content-stretch flex gap-[8px] items-center">
          <Logo />
          <div className="content-stretch flex gap-[4px] items-center px-[8px]">
            <p style={{ fontFamily: "var(--font-strawberry-display)", fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-medium)" }}>
              Strömstad Spa & Resort
            </p>
            <ArrowsCaretDown />
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center">
          <div className="h-[32px] w-[240px] relative">
            <div className="absolute bg-[#F2EBEF] inset-0 rounded-[8px]" />
            <div className="absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MainSearch />
              <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "rgba(90,0,50,0.6)" }}>
                Search here
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="relative size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" fill="var(--fill-0, #F2EBEF)" r="16" />
              </svg>
              <div className="absolute inset-[18.75%]">
                <div className="absolute h-[16px] left-1/2 top-1/2 w-[12px] -translate-x-1/2 -translate-y-1/2" style={{ maskImage: `url('${imgNotifications}')`, maskSize: "20px 20px", maskPosition: "-4px -2px" }}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
                    <path d={svgPaths.p29dedf80} fill="var(--fill-0, #5A0032)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative size-[32px]">
              <img alt="" className="block max-w-none size-full" height="32" src={imgTopMenuBtn} width="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPhone() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <mask height="16" id="mask0_1_3229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
          </mask>
          <g mask="url(#mask0_1_3229)">
            <path d={svgPaths.p20e02800} fill="var(--fill-0, #403D3B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContactMail() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <mask height="16" id="mask0_1_3210" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
          </mask>
          <g mask="url(#mask0_1_3210)">
            <path d={svgPaths.p113da00} fill="var(--fill-0, #403D3B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function GuestPage() {
  const [actualTier, setActualTier] = useState<MembershipTier>("blue");
  const [showSuperColleague, setShowSuperColleague] = useState(true);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSpaBookingExpanded, setIsSpaBookingExpanded] = useState(false);
  const [bookedAppointments, setBookedAppointments] = useState<Array<{
    treatmentId: string;
    treatmentName: string;
    date: string;
    displayDate: string;
    time: string;
    duration: number;
    practitioner: string;
  }>>([]);
  const [isPotentialMember, setIsPotentialMember] = useState(false);
  const [matchingFields, setMatchingFields] = useState<Array<'email' | 'phone' | 'lastName'>>([]);

  // Guest data
  const nightsAtProperty = 1;

  const handleBookingConfirmed = (booking: {
    treatment: { id: string; name: string; duration: number; practitioner?: string };
    date: string;
    slot: { startTime: string; practitioner: string };
  }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(booking.date);
    const displayDate = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]}`;
    
    setBookedAppointments(prev => [...prev, {
      treatmentId: booking.treatment.id,
      treatmentName: booking.treatment.name,
      date: booking.date,
      displayDate,
      time: booking.slot.startTime,
      duration: booking.treatment.duration,
      practitioner: booking.slot.practitioner,
    }]);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex">
      {/* Left Navigation */}
      <LeftNavigation />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="max-w-[1440px] mx-auto px-[32px] py-[24px] w-full">
          <BackButton />
          {/* Two Column Layout */}
          <div className="mt-[24px] flex gap-[24px]">
            {/* Left Column - Main Content */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Guest Info & Tabs */}
              <div className="flex flex-col gap-[24px]">
                <div>
                  <div className="flex items-center gap-[8px] mb-[8px]">
                    <h1 style={{ fontFamily: "var(--font-strawberry-display)", fontSize: "var(--text-2xl)", fontWeight: "var(--font-weight-medium)", color: "var(--color-foreground)" }}>
                      Strawberry Strawberryson
                    </h1>
                    {actualTier !== "non-member" && (
                      <div
                        className="px-[8px] py-[2px] rounded-[var(--radius-lg)]"
                        style={{
                          backgroundColor: actualTier === "blue" ? "#CFDBDF" :
                                         actualTier === "silver" ? "#E6E6E6" :
                                         actualTier === "gold" ? "#EDE9D6" :
                                         actualTier === "lifetime-gold" ? "#EDE9D6" :
                                         actualTier === "platinum" ? "#DEDDDB" :
                                         actualTier === "lifetime-platinum" ? "#DEDDDB" :
                                         "#EBE9E7",
                        }}
                      >
                        <span style={{
                          fontFamily: "var(--font-strawberry-text)",
                          fontSize: "var(--text-xs)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "var(--color-foreground)"
                        }}>
                          {actualTier === "lifetime-gold" ? "Lifetime Gold" :
                           actualTier === "lifetime-platinum" ? "Lifetime Platinum" :
                           actualTier.charAt(0).toUpperCase() + actualTier.slice(1)}
                        </span>
                      </div>
                    )}
                    {isPotentialMember && actualTier === "non-member" && (matchingFields.includes('email') || matchingFields.includes('phone')) && (
                      <div
                        className="px-[8px] py-[2px] rounded-[var(--radius-lg)] border border-[#C41E3A]"
                        style={{
                          backgroundColor: "#FFF0F0",
                        }}
                      >
                        <span style={{
                          fontFamily: "var(--font-strawberry-text)",
                          fontSize: "var(--text-xs)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "#C41E3A"
                        }}>
                          Potential member
                        </span>
                      </div>
                    )}
                    {showSuperColleague && (
                      <div
                        className="px-[8px] py-[4px] rounded-[var(--radius-lg)] border border-[var(--color-border)] flex items-center gap-[4px]"
                        style={{
                          backgroundColor: "var(--color-background)",
                        }}
                      >
                        <Logo className="size-[12px]" />
                        <span style={{
                          fontFamily: "var(--font-strawberry-text)",
                          fontSize: "var(--text-xs)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "var(--color-foreground)"
                        }}>
                          Super Colleague
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <ContactPhone />
                      <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", color: "var(--color-muted-foreground)" }}>98271928</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <ContactMail />
                      <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", color: "var(--color-muted-foreground)" }}>victoria.wangkorsmo@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[24px]">
                    <button className="p-[4px]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L6 8L10 4" stroke="#403D3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", color: "var(--color-muted-foreground)" }} className="cursor-pointer">2 Jun 2024</span>
                    <div className="bg-white px-[16px] py-[8px] rounded-[8px] shadow-sm">
                      <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", color: "var(--color-primary)" }}>2 - 3 Aug 2024</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", color: "var(--color-muted-foreground)" }} className="cursor-pointer">13 - 15 Feb 2025</span>
                    <button className="p-[4px]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="#403D3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <button className="flex items-center gap-[8px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66666 12.6667 2.66666Z" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 1.33334V4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.33333 1.33334V4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.66666H14" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", color: "var(--color-primary)" }}>Find booking</span>
                  </button>
                </div>
              </div>

              {/* Accommodation Card */}
              <div className="bg-white rounded-[8px] p-[16px]">
                {/* Header */}
                <h3 className="font-['Strawberry_Sans_Text:Bold',sans-serif] text-[20px] leading-[28px] mb-[16px] text-black">
                  2 - 3 August 2024
                </h3>

                {/* Accommodation Section */}
                <div className="flex flex-col gap-[8px] mb-[16px]">
                  {/* Beige Header */}
                  <div className="bg-[#F7F5F3] rounded-[8px] px-[10px] py-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <mask height="20" id="mask0_accommodation" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="20" width="20" />
                            </mask>
                            <g mask="url(#mask0_accommodation)">
                              <path d={svgPaths.p2cc8e5c0} fill="var(--fill-0, black)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <h4 className="font-['Strawberry_Sans_Text:Bold',sans-serif] text-[16px] leading-[24px] text-black">
                        Accommodation
                      </h4>
                    </div>
                  </div>

                  {/* White Content Area */}
                  <div className="py-[8px] px-[8px] flex gap-[24px]">
                    <div className="flex-1">
                      {/* Booking Number and Source */}
                      <div className="flex items-center gap-[10px] mb-[16px]">
                      <div className="px-[8px] py-[4px] rounded-[24px] border border-[#EBE9E7]">
                        <span className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px]">
                          Booking number: NO827181777289
                        </span>
                      </div>
                      <div className="h-[16px] w-0 border-l border-[#D8D4D0]" />
                      <div className="flex gap-[8px] items-center">
                        <div className="size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g>
                              <mask height="16" id="mask0_booking_source" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                              </mask>
                              <g mask="url(#mask0_booking_source)">
                                <path d={svgPaths.p42d3da0} fill="var(--fill-0, #1C1B1F)" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <span className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-[#403D3B]">
                          App
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-[16px]">
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Check in
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          17 Oct 2025
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Check out
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          18 Oct 2025
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Guest count
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          2 Adults
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Room status
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          -
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-[16px] mt-[16px]">
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Room category
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          Standard Twin Bed
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Room
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          1615
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Rate
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          Helpensjon konferanse
                        </p>
                      </div>
                      <div>
                        <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                          Reservation created on
                        </label>
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                          25 Jul 2025
                        </p>
                      </div>
                    </div>

                    <div className="mt-[16px]">
                      <label className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[20px] text-[#71706F]">
                        Products
                      </label>
                      <div className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black mt-[4px]">
                        <p>2 x Hotel Factor included</p>
                        <p>2 x Breakfast included</p>
                        <p>2 x 3 Course Dinner included</p>
                      </div>
                    </div>

                    <div className="mt-[8px]">
                      <button className="bg-[#F7F5F3] px-[8px] py-[4px] rounded-[8px] flex items-center gap-[4px]">
                        <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] text-[14px] leading-[normal] text-[#5A0032]">
                          Go to booking
                        </p>
                        <div className="size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d={svgPaths.p3a275800} fill="var(--fill-0, #5A0032)" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    </div>

                    {/* Notes Section */}
                    <div className="w-[320px] bg-[#FFF2F4] rounded-[8px] p-[16px] h-fit shrink-0">
                      <div className="flex items-center gap-[8px] mb-[12px]">
                        <div className="size-[16px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.66667 11.3333V14.6667H7.33333V11.3333H4.66667V10L5.33333 8V4.66667H4V3.33333H12V4.66667H10.6667V8L11.3333 10V11.3333H8.66667Z" fill="#121110"/>
                          </svg>
                        </div>
                        <h4 style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-bold)", color: "var(--color-foreground)" }}>
                          Notes
                        </h4>
                      </div>
                      <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", color: "var(--color-foreground)" }}>
                        Hey there! Just wanted to let you know that I'll be arriving a bit later for the checkin
                      </p>
                    </div>
                  </div>
                </div>

                {/* Restaurant and Spa & Fitness Row */}
                <div className="flex gap-[16px] items-start mb-[16px]">
                  {/* Restaurant Widget */}
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="bg-[#F7F5F3] rounded-[8px] px-[10px] py-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <mask height="20" id="mask0_dining" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="20" width="20" />
                            </mask>
                            <g mask="url(#mask0_dining)">
                              <path d={svgPaths.p34eed500} fill="var(--fill-0, black)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-bold)" }}>
                        Restaurant
                      </p>
                    </div>
                  </div>

                  <div className="py-[8px]">
                    <div className="flex items-center justify-between pl-[8px] pr-[16px]">
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black">
                          3 Course Dinner
                        </p>
                        <div className="flex gap-[8px] h-[20px] items-center">
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_time" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_time)">
                                    <path d={svgPaths.p23061d00} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              2 August, 19:00
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_group" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_group)">
                                    <path d={svgPaths.p2caf4d00} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              2 guests
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_location" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_location)">
                                    <path d={svgPaths.p3eec400} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              Restaurant Maritimus
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_note" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_note)">
                                    <path d={svgPaths.p2d61ad00} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="underline decoration-dotted font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              Notes
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <mask height="16" id="mask0_newwindow" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                            </mask>
                            <g mask="url(#mask0_newwindow)">
                              <path d={svgPaths.p338b1200} fill="var(--fill-0, #71706F)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#960014] px-[12px] py-[6px] rounded-[8px] inline-flex items-center gap-[4px] w-fit hover:bg-[#7A0010] transition-colors">
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", color: "white" }}>
                      Book table
                    </span>
                    <div className="size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p3a275800} fill="var(--fill-0, white)" />
                      </svg>
                    </div>
                  </button>
                  </div>

                  {/* Spa & Fitness Widget */}
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="bg-[#F7F5F3] rounded-[8px] px-[10px] py-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <mask height="20" id="mask0_spa" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="20" width="20" />
                            </mask>
                            <g mask="url(#mask0_spa)">
                              <path d={svgPaths.p1daf4e00} fill="var(--fill-0, black)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-bold)" }}>
                        Spa & Fitness
                      </p>
                    </div>
                  </div>

                  <div className="py-[8px]">
                    {bookedAppointments.length > 0 && (
                      <div className="space-y-[8px] mb-[8px]">
                        {bookedAppointments.map((appointment, index) => (
                          <div key={index} className="flex items-center justify-between pl-[8px] pr-[16px] pb-[8px] border-b border-[#EBE9E7] last:border-b-0">
                            <div className="flex-1 flex flex-col gap-[4px]">
                              <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black">
                                {appointment.treatmentName} {appointment.duration} min
                              </p>
                              <div className="flex gap-[8px] h-[20px] items-center">
                                <div className="flex gap-[4px] items-center">
                                  <div className="size-[16px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                      <g>
                                        <mask height="16" id={`mask0_time_${index}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                          <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                        </mask>
                                        <g mask={`url(#mask0_time_${index})`}>
                                          <path d={svgPaths.p23061d00} fill="var(--fill-0, #71706F)" />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                                    {appointment.displayDate}, {appointment.time}
                                  </p>
                                </div>
                                <div className="flex gap-[4px] items-center">
                                  <div className="size-[16px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                      <g>
                                        <mask height="16" id={`mask0_practitioner_${index}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                          <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                        </mask>
                                        <g mask={`url(#mask0_practitioner_${index})`}>
                                          <path d={svgPaths.p3f731640} fill="var(--fill-0, #71706F)" />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                                    {appointment.practitioner}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id={`mask0_newwindow_spa_${index}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask={`url(#mask0_newwindow_spa_${index})`}>
                                    <path d={svgPaths.p338b1200} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between pl-[8px] pr-[16px]">
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[14px] leading-[20px] text-black">
                          Classic Facial Treatment 50 min
                        </p>
                        <div className="flex gap-[8px] h-[20px] items-center">
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_time2" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_time2)">
                                    <path d={svgPaths.p23061d00} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              3 August, 10:00
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_profile" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_profile)">
                                    <path d={svgPaths.p1df39ff0} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              Anne Victoria
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_location2" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_location2)">
                                    <path d={svgPaths.p3eec400} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              Treatment Room 1
                            </p>
                          </div>
                          <div className="flex gap-[4px] items-center">
                            <div className="size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <mask height="16" id="mask0_practitioner" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                    <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                  </mask>
                                  <g mask="url(#mask0_practitioner)">
                                    <path d={svgPaths.p3f731640} fill="var(--fill-0, #71706F)" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] text-[12px] leading-[16px] text-[#71706F]">
                              Natalie
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <mask height="16" id="mask0_newwindow2" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                            </mask>
                            <g mask="url(#mask0_newwindow2)">
                              <path d={svgPaths.p338b1200} fill="var(--fill-0, #71706F)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <SpaBookingPanel 
                    isExpanded={isSpaBookingExpanded} 
                    onToggle={() => setIsSpaBookingExpanded(!isSpaBookingExpanded)} 
                    onBookingConfirmed={handleBookingConfirmed}
                    bookedAppointments={bookedAppointments.map(apt => ({
                      treatmentId: apt.treatmentId,
                      date: apt.date,
                      time: apt.time
                    }))}
                  />
                  </div>
                </div>

                {/* Group Widget */}
                <div className="flex flex-col gap-[8px]">
                  <div className="bg-[#F7F5F3] rounded-[8px] px-[10px] py-[6px]">
                  <div className="flex items-center gap-[6px]">
                    <div className="size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <mask height="20" id="mask0_peoplegroup" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                            <rect fill="var(--fill-0, #D9D9D9)" height="20" width="20" />
                          </mask>
                          <g mask="url(#mask0_peoplegroup)">
                            <path d={svgPaths.p259430b0} fill="var(--fill-0, black)" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-bold)" }}>
                      Group
                    </p>
                  </div>
                </div>

                <div className="py-[8px]">
                  <div className="flex items-center justify-between px-[8px]">
                    <div className="flex-1">
                      <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
                        Trudy's Beauty Clinic
                      </p>
                      <div className="flex gap-[8px] h-[20px] items-center mt-[4px]">
                        <div className="flex gap-[4px] items-center">
                          <div className="size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <mask height="16" id="mask0_calendar" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                  <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                </mask>
                                <g mask="url(#mask0_calendar)">
                                  <path d={svgPaths.p31ae4df0} fill="var(--fill-0, #71706F)" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#71706F", lineHeight: "16px" }}>
                            2 - 3 Aug 2024
                          </p>
                        </div>
                        <div className="flex gap-[4px] items-center">
                          <div className="size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <mask height="16" id="mask0_groupguests" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                                  <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
                                </mask>
                                <g mask="url(#mask0_groupguests)">
                                  <path d={svgPaths.p2caf4d00} fill="var(--fill-0, #71706F)" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#71706F", lineHeight: "16px" }}>
                            33 guests
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-[360px] space-y-[24px] p-[20px] bg-[#FCFBFA] rounded-[12px]">
              {/* Prototype Controls */}
              <div className="flex flex-col gap-[12px] bg-white rounded-[8px] p-[12px] border border-[var(--color-border)] shadow-sm">
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-muted-foreground)" }}>
                    Prototype: Guest Type
                  </span>
                  <div className="flex bg-[#F7F5F3] p-[4px] rounded-[6px]">
                    <button
                      onClick={() => {
                        setActualTier('non-member');
                        setIsPotentialMember(false);
                        setMatchingFields([]);
                      }}
                      className={`px-[8px] py-[4px] rounded-[4px] transition-all ${actualTier === 'non-member' ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                      style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: actualTier === 'non-member' ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                    >
                      Non-Member
                    </button>
                    <button
                      onClick={() => {
                        setActualTier(actualTier === 'non-member' ? 'blue' : actualTier);
                        setIsPotentialMember(false);
                        setMatchingFields([]);
                      }}
                      className={`px-[8px] py-[4px] rounded-[4px] transition-all ${actualTier !== 'non-member' ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                      style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: actualTier !== 'non-member' ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                    >
                      Member
                    </button>
                  </div>
                </div>

                {actualTier === 'non-member' && (
                  <div className="flex items-center justify-between pt-[12px] border-t border-[var(--color-border)]">
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-muted-foreground)" }}>
                      Prototype: Potential Member
                    </span>
                    <div className="flex bg-[#F7F5F3] p-[4px] rounded-[6px]">
                      <button
                        onClick={() => setIsPotentialMember(false)}
                        className={`px-[8px] py-[4px] rounded-[4px] transition-all ${!isPotentialMember ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                        style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: !isPotentialMember ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                      >
                        Off
                      </button>
                      <button
                        onClick={() => {
                          setIsPotentialMember(true);
                          setMatchingFields(['email']);
                        }}
                        className={`px-[8px] py-[4px] rounded-[4px] transition-all ${isPotentialMember ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                        style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: isPotentialMember ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                      >
                        On
                      </button>
                    </div>
                  </div>
                )}

                {actualTier === 'non-member' && isPotentialMember && (
                  <div className="flex flex-col gap-[8px] pt-[12px] border-t border-[var(--color-border)]">
                    <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-muted-foreground)" }}>
                      Matching Fields
                    </span>
                    <div className="flex flex-col gap-[4px]">
                      <label className="flex items-center gap-[8px] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={matchingFields.includes('email')}
                          onChange={(e) => {
                            if (e.target.checked) {
                              const newFields = [...matchingFields.filter(f => f !== 'lastName'), 'email'];
                              setMatchingFields(newFields);
                            } else {
                              setMatchingFields(matchingFields.filter(f => f !== 'email'));
                            }
                          }}
                          className="w-[14px] h-[14px] rounded accent-[var(--color-primary)]"
                        />
                        <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", color: "var(--color-foreground)" }}>
                          Email
                        </span>
                      </label>
                      <label className="flex items-center gap-[8px] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={matchingFields.includes('phone')}
                          onChange={(e) => {
                            if (e.target.checked) {
                              const newFields = [...matchingFields.filter(f => f !== 'lastName'), 'phone'];
                              setMatchingFields(newFields);
                            } else {
                              setMatchingFields(matchingFields.filter(f => f !== 'phone'));
                            }
                          }}
                          className="w-[14px] h-[14px] rounded accent-[var(--color-primary)]"
                        />
                        <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", color: "var(--color-foreground)" }}>
                          Phone
                        </span>
                      </label>
                      <label className="flex items-center gap-[8px] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={matchingFields.includes('lastName')}
                          onChange={(e) => {
                            if (e.target.checked) {
                              const newFields = matchingFields.filter(f => f === 'email' || f === 'phone').length === 0 ? ['lastName'] : matchingFields;
                              setMatchingFields(newFields);
                            } else {
                              setMatchingFields(matchingFields.filter(f => f !== 'lastName'));
                            }
                          }}
                          disabled={matchingFields.includes('email') || matchingFields.includes('phone')}
                          className="w-[14px] h-[14px] rounded accent-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", color: matchingFields.includes('email') || matchingFields.includes('phone') ? "var(--color-muted-foreground)" : "var(--color-foreground)" }}>
                          Last Name Only
                        </span>
                      </label>
                    </div>
                    <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", color: "var(--color-muted-foreground)" }} className="mt-[4px]">
                      Note: Last name alone does not trigger potential member flag
                    </p>
                  </div>
                )}

                {actualTier !== 'non-member' && (
                  <>
                    <div className="flex items-center justify-between pt-[12px] border-t border-[var(--color-border)]">
                      <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-muted-foreground)" }}>
                        Prototype: Member Tier
                      </span>
                      <div className="flex flex-col gap-[4px]">
                        <div className="flex bg-[#F7F5F3] p-[4px] rounded-[6px] gap-[4px]">
                          {(['blue', 'silver', 'gold', 'platinum'] as const).map((tier) => (
                            <button 
                              key={tier}
                              onClick={() => setActualTier(tier)}
                              className={`px-[8px] py-[4px] rounded-[4px] transition-all ${actualTier === tier ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                              style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: actualTier === tier ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                            >
                              {tier.charAt(0).toUpperCase() + tier.slice(1)}
                            </button>
                          ))}
                        </div>
                        <div className="flex bg-[#F7F5F3] p-[4px] rounded-[6px] gap-[4px]">
                          {(['lifetime-gold', 'lifetime-platinum'] as const).map((tier) => (
                            <button 
                              key={tier}
                              onClick={() => setActualTier(tier)}
                              className={`px-[8px] py-[4px] rounded-[4px] transition-all ${actualTier === tier ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                              style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: actualTier === tier ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                            >
                              {tier === 'lifetime-gold' ? 'Lifetime Gold' : 'Lifetime Platinum'}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-[12px] border-t border-[var(--color-border)]">
                      <span style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-muted-foreground)" }}>
                        Prototype: Super Colleague
                      </span>
                      <div className="flex bg-[#F7F5F3] p-[4px] rounded-[6px]">
                        <button 
                          onClick={() => setShowSuperColleague(true)}
                          className={`px-[8px] py-[4px] rounded-[4px] transition-all ${showSuperColleague ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                          style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: showSuperColleague ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                        >
                          On
                        </button>
                        <button 
                          onClick={() => setShowSuperColleague(false)}
                          className={`px-[8px] py-[4px] rounded-[4px] transition-all ${!showSuperColleague ? 'bg-white shadow-sm text-[var(--color-foreground)]' : 'text-[#71706F] hover:text-[var(--color-foreground)]'}`}
                          style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: !showSuperColleague ? "var(--font-weight-bold)" : "var(--font-weight-regular)" }}
                        >
                          Off
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Guest Briefing Section */}
              <div className="bg-white rounded-[8px] p-[20px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <h2 style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-base)", fontWeight: "var(--font-weight-bold)" }}>
                    Guest briefing
                  </h2>
                  {nightsAtProperty > 0 && (
                    <div className="bg-[rgba(194,65,12,0.1)] px-[6px] py-[2px] rounded-full">
                      <span className="text-[length:var(--text-xs)] text-[#C2410C]" style={{ fontFamily: "var(--font-strawberry-text)", fontWeight: "var(--font-weight-bold)" }}>
                        Returning
                      </span>
                    </div>
                  )}
                </div>
                <ul className="space-y-[12px]">
                  <li className="flex gap-[8px]" style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#403D3B", lineHeight: "20px" }}>
                    <span className="text-[#5A0032] shrink-0">•</span>
                    <span>BLUE member – Acknowledge her loyalty and thank her for choosing us.</span>
                  </li>
                  <li className="flex gap-[8px]" style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#403D3B", lineHeight: "20px" }}>
                    <span className="text-[#5A0032] shrink-0">•</span>
                    <span>Credit card stored for seamless future bookings.</span>
                  </li>
                  <li className="flex gap-[8px]" style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#403D3B", lineHeight: "20px" }}>
                    <span className="text-[#5A0032] shrink-0">•</span>
                    <span>Checking out today – Offer smooth departure.</span>
                  </li>
                </ul>
                <div className="mt-[16px] pt-[16px] border-t border-[#EBE9E7] flex items-center justify-between">
                  <p style={{ fontFamily: "var(--font-strawberry-text)", fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-regular)", color: "#71706F" }}>
                    Was this helpful?
                  </p>
                  <div className="flex gap-[8px]">
                    <button className="p-[4px] hover:bg-[#F7F5F3] rounded-[4px] transition-colors">👍</button>
                    <button className="p-[4px] hover:bg-[#F7F5F3] rounded-[4px] transition-colors">👎</button>
                  </div>
                </div>
              </div>

              {/* Membership Recognition Section */}
              <MembershipCard
                actualTier={actualTier}
                nightsAtProperty={nightsAtProperty}
                onInviteClick={() => setIsInviteModalOpen(true)}
                qualifyingPeriodStart={!["non-member", "lifetime-gold", "lifetime-platinum"].includes(actualTier) ? "1 Jan 2025" : undefined}
                qualifyingPeriodEnd={!["non-member", "lifetime-gold", "lifetime-platinum"].includes(actualTier) ? "31 Dec 2025" : undefined}
                membershipExpiryDate={!["non-member", "lifetime-gold", "lifetime-platinum"].includes(actualTier) ? "31 May 2027" : undefined}
                yearsAsGold={actualTier === "lifetime-gold" ? 8 : (actualTier === "gold" ? 3 : undefined)}
                yearsAsPlatinum={actualTier === "lifetime-platinum" ? 10 : (actualTier === "platinum" ? 5 : undefined)}
                isPotentialMember={actualTier === 'non-member' && isPotentialMember && (matchingFields.includes('email') || matchingFields.includes('phone'))}
                matchingFields={actualTier === 'non-member' && isPotentialMember ? matchingFields.filter(f => f === 'email' || f === 'phone') : []}
              />
            </div>
          </div>
        </div>
      </div>

      <InviteToJoinModal 
        isOpen={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)}
        onEnrollSuccess={(tier) => {
          setActualTier(tier);
          setIsInviteModalOpen(false);
        }}
        initialData={{
          firstName: "Anne Victoria Eline Wang",
          lastName: "Korsmo",
          email: "victoria.wangkorsmo@gmail.com",
          mobile: "98271928"
        }}
      />
    </div>
  );
}