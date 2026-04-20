import svgPaths from "./svg-z5wqpc8gre";
import imgTopMenuBtn from "figma:asset/89fd3907d8b56f3b5f722371743eeb824ae3c33a.png";
import { imgNotifications } from "./svg-bc7kn";

function Logo() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="logo">
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] relative shrink-0">
      <p className="font-['Strawberry_Sans_Display:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black">{`Strömstad Spa & Resort`}</p>
      <ArrowsCaretDown />
    </div>
  );
}

function HotelName() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="hotel name">
      <Logo />
      <Frame62 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <HotelName />
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

function Frame66() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%-68.5px)] top-1/2">
      <MainSearch />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] h-[15px] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(90,0,50,0.6)] w-[65px] whitespace-pre-wrap">Search here</p>
    </div>
  );
}

function SearchField() {
  return (
    <div className="h-[32px] relative shrink-0 w-[240px]" data-name="search field">
      <div className="absolute bg-[#f2ebef] inset-0 rounded-[8px]" />
      <Frame66 />
    </div>
  );
}

function MainNotificationOutline() {
  return (
    <div className="absolute inset-[18.75%]" data-name="main / notification outline">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[20px_20px] top-1/2 w-[12px]" data-name="notifications" style={{ maskImage: `url('${imgNotifications}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
          <path d={svgPaths.p29dedf80} fill="var(--fill-0, #5A0032)" id="notifications" />
        </svg>
      </div>
    </div>
  );
}

function TopMenuBtn() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="top menu btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="var(--fill-0, #F2EBEF)" id="Ellipse 10" r="16" />
      </svg>
      <MainNotificationOutline />
    </div>
  );
}

function TopMenuBtn1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="top menu btn">
      <img alt="" className="block max-w-none size-full" height="32" src={imgTopMenuBtn} width="32" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TopMenuBtn />
      <TopMenuBtn1 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <SearchField />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 50" stroke="var(--stroke-0, #EBE9E7)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame68 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[80px] left-0 top-0 w-[1512px]" data-name="header">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Frame />
        <Frame67 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d8d4d0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContactPhone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="contact / phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="contact / phone">
          <mask height="16" id="mask0_1_3229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3229)">
            <path d={svgPaths.p20e02800} fill="var(--fill-0, #403D3B)" id="call" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ContactPhone />
      <div className="flex flex-col font-['Strawberry_Sans_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#403d3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">98271928</p>
      </div>
    </div>
  );
}

function ContactMail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="contact / mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="contact / mail">
          <mask height="16" id="mask0_1_3210" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3210)">
            <path d={svgPaths.p113da00} fill="var(--fill-0, #403D3B)" id="mail" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ContactMail />
      <div className="flex flex-col font-['Strawberry_Sans_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#403d3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">victoria.wangkorsmo@gmail.com</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#cfdbdf] content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="Badge">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black">Blue</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame70 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[16px]">
            <div className="absolute inset-[-0.5px_-3.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <path d="M0.5 0.5H16.5" id="Line 52" stroke="var(--stroke-0, #D8D4D0)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame71 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[16px]">
            <div className="absolute inset-[-0.5px_-3.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <path d="M0.5 0.5H16.5" id="Line 52" stroke="var(--stroke-0, #D8D4D0)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Badge />
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[88px] top-[154px]">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">
        <p className="leading-[32px] whitespace-pre-wrap">Strawberry Strawberryson</p>
      </div>
      <Frame72 />
    </div>
  );
}

function BackButton() {
  return (
    <button className="absolute content-stretch cursor-pointer flex gap-[8px] items-center left-[80px] p-[8px] rounded-[8px] top-[104px]" data-name="back button">
      <div className="h-[9.417px] relative shrink-0 w-[5.458px]" data-name="chevron_backward">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.45833 9.41667">
          <path d={svgPaths.p2a718380} fill="var(--fill-0, #71706F)" id="chevron_backward" />
        </svg>
      </div>
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#71706f] text-[14px] text-left">Back to Guests</p>
    </button>
  );
}

function ChevronBackward() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.37px)] size-[20px] top-[calc(50%-0.19px)]" data-name="chevron_backward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_backward">
          <mask height="20" id="mask0_1_3154" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3154)">
            <path d={svgPaths.p2675ef00} fill="var(--fill-0, #403D3B)" id="chevron_backward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowsChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / chevron left">
      <ChevronBackward />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
      <ArrowsChevronLeft />
    </div>
  );
}

function TabButton() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex h-[40px] items-center justify-center px-[4px] py-[10px] relative rounded-[8px] shrink-0" data-name="tab button">
      <IconLeft />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#403d3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2 Jun 2024</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text />
    </div>
  );
}

function TabButton1() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[160px]" data-name="tab button">
      <Content />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5a0032] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2 - 3 Aug 2024</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text1 />
    </div>
  );
}

function TabButton2() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[160px]" data-name="tab button">
      <Content1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#403d3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">13 - 15 Feb 2025</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text2 />
    </div>
  );
}

function TabButton3() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[160px]" data-name="tab button">
      <Content2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_right">
          <mask height="20" id="mask0_1_3197" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3197)">
            <path d={svgPaths.p10e29e00} fill="var(--fill-0, #403D3B)" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowsChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / chevron right">
      <ChevronRight />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
      <ArrowsChevronRight />
    </div>
  );
}

function TabButton4() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex h-[40px] items-center justify-center px-[4px] py-[10px] relative rounded-[8px] shrink-0" data-name="tab button">
      <IconLeft1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="tabs">
      <TabButton />
      <TabButton1 />
      <TabButton2 />
      <TabButton3 />
      <TabButton4 />
    </div>
  );
}

function TimeEvent() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="time / event">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="time / event">
          <path d={svgPaths.p2fc9ec80} fill="var(--fill-0, #5A0032)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
      <TimeEvent />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5a0032] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Find booking</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <IconLeft2 />
      <Text3 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <Content3 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Buttons />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Tabs />
      <Frame84 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Frame85 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-black">2 - 3 August 2024</p>
    </div>
  );
}

function HotelAccommodation() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hotel / accommodation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hotel / accommodation">
          <mask height="20" id="mask0_1_3165" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3165)">
            <path d={svgPaths.p2cc8e5c0} fill="var(--fill-0, black)" id="hotel" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <HotelAccommodation />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black">Accommodation</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function CardHeading() {
  return (
    <div className="bg-[#f7f5f3] relative rounded-[8px] shrink-0 w-full" data-name="card heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[6px] relative w-full">
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#ebe9e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black">Booking number: NO827181777289</p>
    </div>
  );
}

function BookingSource() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="booking_source">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="booking_source">
          <mask height="16" id="mask0_1_3220" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3220)">
            <path d={svgPaths.p42d3da0} fill="var(--fill-0, #1C1B1F)" id="ads_click" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <BookingSource />
      <div className="flex flex-col font-['Strawberry_Sans_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#403d3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">App</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Badge1 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[16px]">
            <div className="absolute inset-[-0.5px_-3.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                <path d="M0.5 0.5H16.5" id="Line 52" stroke="var(--stroke-0, #D8D4D0)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame73 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame102 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">17 Oct 2025</p>
    </div>
  );
}

function ListItemTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame48 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Check in</p>
      <ListItemTitle />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function CardListItem() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame5 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">2 Adults</p>
    </div>
  );
}

function ListItemTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame49 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Guest count</p>
      <ListItemTitle1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function CardListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame6 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">1615</p>
    </div>
  );
}

function ListItemTitle2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame50 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Room</p>
      <ListItemTitle2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function CardListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame7 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <CardListItem />
      <CardListItem1 />
      <CardListItem2 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">18 Oct 2025</p>
    </div>
  );
}

function ListItemTitle3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame51 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Check out</p>
      <ListItemTitle3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function CardListItem3() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame8 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Standard Twin Bed</p>
    </div>
  );
}

function ListItemTitle4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame52 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Room category</p>
      <ListItemTitle4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function CardListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame9 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Helpensjon konferanse</p>
    </div>
  );
}

function ListItemTitle5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame53 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Rate</p>
      <ListItemTitle5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function CardListItem5() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame10 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <CardListItem3 />
      <CardListItem4 />
      <CardListItem5 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">-</p>
    </div>
  );
}

function ListItemTitle6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame54 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Room status</p>
      <ListItemTitle6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">25 Jul 2025</p>
    </div>
  );
}

function ListItemTitle7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame55 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Reservation created on</p>
      <ListItemTitle7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function CardListItem7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame12 />
    </div>
  );
}

function CardListItem6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="card list item">
      <Frame11 />
      <CardListItem7 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="mb-0">2 x Hotel Factor included</p>
        <p className="mb-0">2 x Breakfast included</p>
        <p>2 x 3 Course Dinner included</p>
      </div>
    </div>
  );
}

function ListItemTitle8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame56 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[12px]">Products</p>
      <ListItemTitle8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative w-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function CardListItem8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <Frame13 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5a0032] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Go to booking</p>
      </div>
    </div>
  );
}

function ArrowsArrowOut() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / arrow out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrows / arrow out">
          <path d={svgPaths.p3a275800} fill="var(--fill-0, #5A0032)" id="arrow_outward" />
        </g>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon right">
      <ArrowsArrowOut />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text4 />
      <IconRight />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <Content4 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Buttons1 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <CardListItem8 />
      <Frame81 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame69 />
      <Frame90 />
      <CardListItem6 />
      <Frame91 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame89 />
      <Frame101 />
    </div>
  );
}

function MainPin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="main / pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="main / pin">
          <mask height="20" id="mask0_1_3178" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3178)">
            <path d={svgPaths.pf9e8e00} fill="var(--fill-0, black)" id="keep" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <MainPin />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black">Notes</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <Frame80 />
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content] whitespace-pre-wrap">{`Hey there! Just wanted to let you know that I'll be arriving a bit later for the checkin`}</p>
    </div>
  );
}

function ListCategory() {
  return (
    <div className="bg-[#fdf0ef] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="list category">
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <Frame79 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start p-[8px] relative shrink-0 w-[424px]">
      <ListCategory />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] h-[232px] items-start relative shrink-0 w-full">
      <Frame87 />
      <Frame61 />
    </div>
  );
}

function BookingContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="booking content">
      <CardHeading />
      <Frame88 />
    </div>
  );
}

function HotelDining() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hotel / dining">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hotel / dining">
          <mask height="20" id="mask0_1_3169" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3169)">
            <path d={svgPaths.p34eed500} fill="var(--fill-0, black)" id="local_dining" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <HotelDining />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black">Restaurant</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame2 />
    </div>
  );
}

function CardHeading1() {
  return (
    <div className="bg-[#f7f5f3] relative rounded-[8px] shrink-0 w-full" data-name="card heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[6px] relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">3 Course Dinner</p>
    </div>
  );
}

function ListItemTitle9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame57 />
    </div>
  );
}

function TimeTime() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="time / time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="time / time">
          <mask height="16" id="mask0_1_3161" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3161)">
            <path d={svgPaths.p23061d00} fill="var(--fill-0, #71706F)" id="schedule" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">2 August, 19:00</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <TimeTime />
      <Frame24 />
    </div>
  );
}

function PeopleGroupOutline() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="people / group outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="people / group outline">
          <mask height="16" id="mask0_1_3150" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3150)">
            <path d={svgPaths.p2caf4d00} fill="var(--fill-0, #71706F)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">2 guests</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PeopleGroupOutline />
      <Frame26 />
    </div>
  );
}

function LocationPinOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location / pin outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="location / pin outlined">
          <mask height="16" id="mask0_1_3204" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3204)">
            <path d={svgPaths.p3eec400} fill="var(--fill-0, #71706F)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">Restaurant Maritimus</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LocationPinOutlined />
      <Frame27 />
    </div>
  );
}

function MainNote() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="main / note">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="main / note">
          <mask height="16" id="mask0_1_3129" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3129)">
            <path d={svgPaths.p2d61ad00} fill="var(--fill-0, #71706F)" id="news" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pt-px relative shrink-0">
      <p className="decoration-[10%] decoration-dotted font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px] underline">Notes</p>
    </div>
  );
}

function TooltipBtn() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="tooltip btn">
      <MainNote />
      <Frame103 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <Frame92 />
      <Frame93 />
      <Frame96 />
      <TooltipBtn />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <ListItemTitle9 />
      <Frame33 />
    </div>
  );
}

function MainNewWindow() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="main / new window">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="main / new window">
          <mask height="16" id="mask0_1_3125" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3125)">
            <path d={svgPaths.p338b1200} fill="var(--fill-0, #71706F)" id="open_in_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BookingListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="booking list item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[16px] relative w-full">
          <Frame45 />
          <MainNewWindow />
        </div>
      </div>
    </div>
  );
}

function CardListItem9() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <BookingListItem />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Book table</p>
      </div>
    </div>
  );
}

function ArrowsArrowOut1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / arrow out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrows / arrow out">
          <path d={svgPaths.p3a275800} fill="var(--fill-0, white)" id="arrow_outward" />
        </g>
      </svg>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon right">
      <ArrowsArrowOut1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text5 />
      <IconRight1 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#960014] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <Content5 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Buttons2 />
    </div>
  );
}

function BookingContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="booking content">
      <CardHeading1 />
      <CardListItem9 />
      <Frame82 />
    </div>
  );
}

function HotelSpa() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="hotel / spa">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hotel / spa">
          <mask height="20" id="mask0_1_3121" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3121)">
            <path d={svgPaths.p1daf4e00} fill="var(--fill-0, black)" id="spa" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <HotelSpa />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black">{`Spa & Fitness`}</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function CardHeading2() {
  return (
    <div className="bg-[#f7f5f3] relative rounded-[8px] shrink-0 w-full" data-name="card heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[6px] relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Classic Facial Treatment 50 min</p>
    </div>
  );
}

function ListItemTitle10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame58 />
    </div>
  );
}

function TimeTime1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="time / time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="time / time">
          <mask height="16" id="mask0_1_3161" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3161)">
            <path d={svgPaths.p23061d00} fill="var(--fill-0, #71706F)" id="schedule" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">3 August, 10:00</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <TimeTime1 />
      <Frame25 />
    </div>
  );
}

function PeopleProfile() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="people / profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="people / profile">
          <mask height="16" id="mask0_1_3117" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3117)">
            <path d={svgPaths.p1df39ff0} fill="var(--fill-0, #71706F)" id="person" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">Anne Victoria</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PeopleProfile />
      <Frame28 />
    </div>
  );
}

function LocationPinOutlined1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location / pin outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="location / pin outlined">
          <mask height="16" id="mask0_1_3204" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3204)">
            <path d={svgPaths.p3eec400} fill="var(--fill-0, #71706F)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">Treatment Room 1</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LocationPinOutlined1 />
      <Frame29 />
    </div>
  );
}

function PeoplePractitioner() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="people / practitioner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="people / practitioner">
          <mask height="16" id="mask0_1_3144" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3144)">
            <path d={svgPaths.p3f731640} fill="var(--fill-0, #71706F)" id="assignment_ind" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">Natalie</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PeoplePractitioner />
      <Frame30 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <Frame94 />
      <Frame95 />
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <ListItemTitle10 />
      <Frame34 />
    </div>
  );
}

function MainNewWindow1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="main / new window">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="main / new window">
          <mask height="16" id="mask0_1_3125" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3125)">
            <path d={svgPaths.p338b1200} fill="var(--fill-0, #71706F)" id="open_in_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BookingListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="booking list item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[16px] relative w-full">
          <Frame46 />
          <MainNewWindow1 />
        </div>
      </div>
    </div>
  );
}

function CardListItem10() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <BookingListItem1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Strawberry_Sans_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Book appointment</p>
      </div>
    </div>
  );
}

function ArrowsArrowOut2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / arrow out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrows / arrow out">
          <path d={svgPaths.p3a275800} fill="var(--fill-0, white)" id="arrow_outward" />
        </g>
      </svg>
    </div>
  );
}

function IconRight2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon right">
      <ArrowsArrowOut2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <Text6 />
      <IconRight2 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#960014] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <Content6 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Buttons3 />
    </div>
  );
}

function BookingContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="booking content">
      <CardHeading2 />
      <CardListItem10 />
      <Frame83 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <BookingContent1 />
      <BookingContent2 />
    </div>
  );
}

function PeopleGroup() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="people / group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="people / group">
          <mask height="20" id="mask0_1_3105" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3105)">
            <path d={svgPaths.p259430b0} fill="var(--fill-0, black)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <PeopleGroup />
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black">Group</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function CardHeading3() {
  return (
    <div className="bg-[#f7f5f3] relative rounded-[8px] shrink-0 w-full" data-name="card heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[6px] relative w-full">
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Trudy’s Beauty Clinic</p>
    </div>
  );
}

function ListItemTitle11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="list item title">
      <Frame59 />
    </div>
  );
}

function TimeCalendarOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="time / calendar outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="time / calendar outlined">
          <mask height="16" id="mask0_1_3079" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3079)">
            <path d={svgPaths.p31ae4df0} fill="var(--fill-0, #71706F)" id="calendar_today" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">2 - 3 Aug 2024</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <TimeCalendarOutlined />
      <Frame31 />
    </div>
  );
}

function PeopleGroupOutline1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="people / group outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="people / group outline">
          <mask height="16" id="mask0_1_3150" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3150)">
            <path d={svgPaths.p2caf4d00} fill="var(--fill-0, #71706F)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[14px]">33 guests</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <PeopleGroupOutline1 />
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <ListItemTitle11 />
      <Frame35 />
    </div>
  );
}

function BookingListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="booking list item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function CardListItem11() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="card list item">
      <BookingListItem2 />
    </div>
  );
}

function BookingContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1344px]" data-name="booking content">
      <CardHeading3 />
      <CardListItem11 />
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="dashboard card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Frame74 />
          <BookingContent />
          <Frame75 />
          <BookingContent3 />
        </div>
      </div>
    </div>
  );
}

function GuestBooking() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1392px]" data-name="Guest booking">
      <DashboardCard />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[88px] top-[258px] w-[1392px]">
      <Frame77 />
      <GuestBooking />
    </div>
  );
}

function MenuIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <path d={svgPaths.p36ed5200} fill="var(--fill-0, black)" id="dashboard" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons />
    </div>
  );
}

function MenuTab() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame14 />
    </div>
  );
}

function MenuIcons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <mask height="24" id="mask0_1_3214" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3214)">
            <path d={svgPaths.p19c8c400} fill="var(--fill-0, black)" id="villa" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons1 />
    </div>
  );
}

function MenuTab1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame15 />
    </div>
  );
}

function MenuIcons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <mask height="24" id="mask0_1_3093" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3093)">
            <path d={svgPaths.p1612d40} fill="var(--fill-0, #FC5E58)" id="person" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fdf0ef] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[10px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function MenuTab2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[4px] py-[2px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame21 />
    </div>
  );
}

function MenuIcons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <mask height="24" id="mask0_1_3193" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3193)">
            <path d={svgPaths.p1ba4ff90} fill="var(--fill-0, black)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons3 />
    </div>
  );
}

function MenuTab3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame17 />
    </div>
  );
}

function MenuIcons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <mask height="24" id="mask0_1_3101" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3101)">
            <path d={svgPaths.p3d59b120} fill="var(--fill-0, black)" id="sell" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons4 />
    </div>
  );
}

function MenuTab4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame18 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <MenuTab />
      <MenuTab1 />
      <MenuTab2 />
      <MenuTab3 />
      <MenuTab4 />
    </div>
  );
}

function MenuIcons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings">
          <mask height="24" id="mask0_1_3113" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3113)">
            <path d={svgPaths.p2080fd00} fill="var(--fill-0, black)" id="settings_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons5 />
    </div>
  );
}

function MenuTab5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame19 />
    </div>
  );
}

function MenuIcons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu icons">
          <mask height="24" id="mask0_1_3087" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3087)">
            <g id="lightbulb_circle">
              <mask height="24" id="mask1_1_3087" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box_2" width="24" />
              </mask>
              <g mask="url(#mask1_1_3087)" />
            </g>
            <path d={svgPaths.pafdbe00} fill="var(--fill-0, black)" id="help" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MenuIcons6 />
    </div>
  );
}

function MenuTab6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[16px] py-[12px] relative shrink-0 w-[56px]" data-name="menu tab">
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0">
      <MenuTab5 />
      <MenuTab6 />
    </div>
  );
}

function LeftNav() {
  return (
    <div className="absolute bg-white h-[902px] left-0 top-[80px]" data-name="left nav">
      <div className="content-stretch flex flex-col h-full items-start justify-between overflow-clip py-[8px] relative rounded-[inherit]">
        <Frame22 />
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d8d4d0] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f7f5f3] content-stretch flex gap-[4px] items-center justify-end px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="Badge">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black">Recurring member</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5a0032] text-[16px]">Guest briefing</p>
      <Badge2 />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard_arrow_down">
          <mask height="20" id="mask0_1_3182" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3182)">
            <path d={svgPaths.p3dcd000} fill="var(--fill-0, black)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowsChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrows / chevron down">
      <KeyboardArrowDown />
    </div>
  );
}

function Close() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="close">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end p-[2px] relative w-full">
          <ArrowsChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[172px] items-start relative shrink-0 w-full">
      <Frame86 />
      <Close />
    </div>
  );
}

function BriefingCard() {
  return (
    <div className="absolute bg-white h-[196px] left-0 rounded-[8px] top-0 w-[632px]" data-name="Briefing Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Frame104 />
        <ul className="block font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[0] list-disc not-italic relative shrink-0 text-[14px] text-black w-[588px] whitespace-pre-wrap">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Anne Victoria is a BLUE member. Acknowledge her loyalty and thank her for choosing us.</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">{`Note that Anne Victoria's credit card is stored for future seamless bookings.`}</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Anne Victoria booked a Superior Room. Ensure her satisfaction with the room.</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[20px]">Anne Victoria is checking out today. Offer a smooth and efficient departure.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[20px]">Anne Victoria booked via web app. Consider offering direct booking incentives.</span>
          </li>
        </ul>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 1">
                  <line id="Line 53" stroke="var(--stroke-0, #EBE9E7)" strokeDasharray="6 6" x2="600" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d8d4d0] border-dashed inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function ThumbUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="thumb_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumb_up">
          <mask height="16" id="mask0_1_3097" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3097)">
            <path d={svgPaths.p1237cb00} fill="var(--fill-0, #403D3B)" id="thumb_up_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ThumbDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="thumb_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumb_down">
          <mask height="16" id="mask0_1_3083" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_3083)">
            <path d={svgPaths.p24db5400} fill="var(--fill-0, #403D3B)" id="thumb_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] relative shrink-0">
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#403d3b] text-[12px]">The guest briefing was generated by Scout. Was this helpful?</p>
      <ThumbUp />
      <ThumbDown />
    </div>
  );
}

function Frame106() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[196px] items-end justify-end left-[848px] py-[16px] top-[102px] w-[632px]">
      <BriefingCard />
      <Frame105 />
    </div>
  );
}

export default function ScoutResult() {
  return (
    <div className="bg-[#f7f5f3] relative size-full" data-name="Scout result">
      <Header />
      <Frame78 />
      <BackButton />
      <Frame76 />
      <LeftNav />
      <Frame106 />
    </div>
  );
}