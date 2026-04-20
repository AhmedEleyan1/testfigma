import clsx from "clsx";
import svgPaths from "./svg-yoalblwtag";
import { imgSearch, imgSearch1, imgVilla } from "./svg-3dzcp";
import imgTypePictureStateDefault from "figma:asset/31b5e0fed5b984c7fd558692171295accfdfd2e3.png";
import imgTypePictureStateHover from "figma:asset/9ace8e4ec07e1ddc3c467af08a4e6a5acf920016.png";
import imgTypePictureStateActive from "figma:asset/3bf855525dd777736b236af66c3d7bedd65b64d0.png";
type Wrapper8Props = {
  additionalClassNames?: string;
};

function Wrapper8({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper8Props>) {
  return (
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="absolute block size-full">
      <g id="settings">{children}</g>
    </svg>
  );
}

function Sell({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgVilla}')` }} className="absolute inset-[8.33%_8.44%_8.33%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.975 20">
        {children}
      </svg>
    </div>
  );
}

function Group({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgVilla}')` }} className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        {children}
      </svg>
    </div>
  );
}

function Dashboard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

function Villa({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgVilla}')` }} className="absolute inset-[14.35%_12.5%_12.5%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3.445px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.555">
        {children}
      </svg>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgVilla}')` }} className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-end size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#ebe9e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Frame40113Buttons({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[4px] relative">{children}</div>
      </div>
    </div>
  );
}

function Input({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f7f5f3] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function MenuTab({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-[56px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function TopMenuBtnMainNotificationOutline({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[18.75%]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[20px_20px] top-1/2 w-[12px]" data-name="notifications" style={{ maskImage: `url('${imgSearch}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[18.75%]">
      <div className="absolute inset-[20%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[20px_20px]" data-name="person" style={{ maskImage: `url('${imgSearch}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <div className="content-stretch flex items-center py-[16px] relative w-full">{children}</div>
    </Wrapper3>
  );
}
type WrapperProps = {
  text: string;
  additionalClassNames?: string;
};

function Wrapper({ children, text, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper3 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex items-center py-[14px] relative w-full">
        <div className={clsx("relative rounded-[24px] shrink-0", additionalClassNames)}>
          <Wrapper4>
            <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{text}</p>
          </Wrapper4>
        </div>
      </div>
    </Wrapper3>
  );
}

function Frame40112TableCell() {
  return (
    <Wrapper3 additionalClassNames="h-[52px]">
      <div className="content-stretch flex items-center py-[14px] size-full" />
    </Wrapper3>
  );
}
type Frame40108TableCellProps = {
  text: string;
  text1: string;
};

function Frame40108TableCell({ text, text1 }: Frame40108TableCellProps) {
  return (
    <Wrapper1>
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <span className="leading-[20px]">{text}</span>
        <span className="leading-[20px]">{text1}</span>
      </p>
    </Wrapper1>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <Wrapper1>
      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function TableHeaderCell({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <div className="content-stretch flex items-center py-[8px] relative w-full">
        <div className="relative shrink-0" data-name="Table header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center relative">
              <div className="flex flex-col font-['Strawberry_Sans_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
                <p className="leading-[16px]">{children}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper3>
  );
}
type Frame40348BadgeTextProps = {
  text: string;
};

function Frame40348BadgeText({ text }: Frame40348BadgeTextProps) {
  return (
    <div className="relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ebe9e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Wrapper4>
        <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#71706f] text-[12px] whitespace-nowrap">{text}</p>
      </Wrapper4>
    </div>
  );
}
type IconTitleTextProps = {
  text: string;
};

function IconTitleText({ text }: IconTitleTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#71706f] text-[14px] text-ellipsis whitespace-nowrap">{text}</p>
    </div>
  );
}

function HelperbuttonHelper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 32 32" className="absolute block size-full">
      <circle cx="16" cy="16" fill="var(--fill-0, #EBE0E6)" id="Ellipse 10" r="16" />
    </svg>
  );
}

function TopMenuBtnPeopleProfile() {
  return (
    <Wrapper2>
      <path d={svgPaths.p231fc480} fill="var(--fill-0, black)" id="person" />
    </Wrapper2>
  );
}

function TopMenuBtnHelper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 32 32" className="absolute block size-full">
      <circle cx="16" cy="16" fill="var(--fill-0, #F2EBEF)" id="Ellipse 10" r="16" />
    </svg>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" className="absolute block size-full">
      <g id="arrow_drop_down">
        <mask height="20" id="mask0_2386_4098" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
        </mask>
        <g mask="url(#mask0_2386_4098)">
          <path d={svgPaths.p3420e900} fill="var(--fill-0, black)" id="arrow_drop_down_2" />
        </g>
      </g>
    </svg>
  );
}

function ArrowsCaretDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="arrows / caret down">
      <Helper />
    </div>
  );
}
type TopMenuBtnProps = {
  className?: string;
  state?: "default" | "hover" | "active";
  type?: "picture" | "profile" | "notification";
};

function TopMenuBtn({ className, state = "default", type = "notification" }: TopMenuBtnProps) {
  if (type === "profile" && state === "default") {
    return (
      <div className={className || "relative size-[32px]"} data-name="Type=profile, State=default">
        <TopMenuBtnHelper />
        <TopMenuBtnPeopleProfile />
      </div>
    );
  }
  if (type === "profile" && state === "active") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=profile, State=active">
        <TopMenuBtnHelper />
        <Wrapper2>
          <path d={svgPaths.p31d70080} fill="var(--fill-0, black)" id="person" />
        </Wrapper2>
      </button>
    );
  }
  if (type === "profile" && state === "hover") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=profile, State=hover">
        <HelperbuttonHelper />
        <TopMenuBtnPeopleProfile />
      </button>
    );
  }
  if (type === "notification" && state === "hover") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=notification, State=hover">
        <HelperbuttonHelper />
        <TopMenuBtnMainNotificationOutline>
          <path d={svgPaths.p29dedf80} fill="var(--fill-0, black)" id="notifications" />
        </TopMenuBtnMainNotificationOutline>
      </button>
    );
  }
  if (type === "notification" && state === "active") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=notification, State=active">
        <TopMenuBtnHelper />
        <div className="absolute inset-[18.75%]" data-name="main / notification">
          <div className="absolute inset-[9.85%_19.35%_10.15%_20.65%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.129px_-1.97px] mask-size-[20px_20px]" data-name="notifications" style={{ maskImage: `url('${imgSearch}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
              <path d={svgPaths.p2b23e300} fill="var(--fill-0, black)" id="notifications" />
            </svg>
          </div>
        </div>
      </button>
    );
  }
  if (type === "picture" && state === "default") {
    return (
      <div className={className || "relative size-[32px]"} data-name="Type=picture, State=default">
        <img alt="" className="absolute block max-w-none size-full" height="32" src={imgTypePictureStateDefault} width="32" />
      </div>
    );
  }
  if (type === "picture" && state === "hover") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=picture, State=hover">
        <img alt="" className="absolute block max-w-none size-full" height="32" src={imgTypePictureStateHover} width="32" />
      </button>
    );
  }
  if (type === "picture" && state === "active") {
    return (
      <button className={className || "block cursor-pointer relative size-[32px]"} data-name="Type=picture, State=active">
        <img alt="" className="absolute block max-w-none size-full" height="32" src={imgTypePictureStateActive} width="32" />
      </button>
    );
  }
  return (
    <div className={className || "relative size-[32px]"} data-name="Type=notification, State=default">
      <TopMenuBtnHelper />
      <TopMenuBtnMainNotificationOutline>
        <path d={svgPaths.p29dedf80} fill="var(--fill-0, #5A0032)" id="notifications" />
      </TopMenuBtnMainNotificationOutline>
    </div>
  );
}
type MenuIconsProps = {
  className?: string;
  color?: "default" | "selected";
  icon?: "dashboard" | "group" | "guest" | "companies" | "feedback" | "support" | "settings" | "my hotel" | "Noshow";
};

function MenuIcons({ className, color = "default", icon = "dashboard" }: MenuIconsProps) {
  const isSelected = color === "selected";
  const isSupport = icon === "support";
  return (
    <div className={className || "relative size-[24px]"}>
      {["feedback", "support"].includes(icon) && (
        <div className={`absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px] ${isSupport ? "inset-0 mask-position-[0px_0px]" : "inset-[8.33%] mask-position-[-2px_-2px]"}`} data-name="lightbulb_circle" style={{ maskImage: `url('${imgVilla}')` }}>
          {icon === "feedback" && (
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.paa8a300} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="lightbulb_circle" />
            </svg>
          )}
          {icon === "support" && color === "selected" && (
            <Wrapper5>
              <path d={svgPaths.p2b51f00} fill="var(--fill-0, #5A0032)" id="lightbulb_circle" />
            </Wrapper5>
          )}
        </div>
      )}
      {icon === "my hotel" && (
        <Villa>
          <path d={svgPaths.p22441180} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="villa" />
        </Villa>
      )}
      {icon === "dashboard" && (
        <Dashboard>
          <path d={svgPaths.p3a4c6200} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="dashboard" />
        </Dashboard>
      )}
      {icon === "guest" && (
        <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person" style={{ maskImage: `url('${imgVilla}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p11443280} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="person" />
          </svg>
        </div>
      )}
      {icon === "group" && (
        <Group>
          <path d={svgPaths.p326e8080} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="group" />
        </Group>
      )}
      {icon === "companies" && (
        <Sell>
          <path d={svgPaths.p2a2d7400} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="sell" />
        </Sell>
      )}
      {isSupport && (
        <Wrapper5>
          <path d={svgPaths.p64a6e80} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="help" />
        </Wrapper5>
      )}
      {icon === "settings" && (
        <Wrapper6>
          <mask height="24" id={isSelected ? "mask0_2386_4156" : "mask0_2386_4122"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask={isSelected ? "url(#mask0_2386_4156)" : "url(#mask0_2386_4122)"}>
            <path d={svgPaths.p2080fd00} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="settings_2" />
          </g>
        </Wrapper6>
      )}
      {icon === "Noshow" && (
        <div className="absolute inset-[14.69%_14.69%_9.38%_9.37%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.25px_-3.525px] mask-size-[24px_24px]" data-name="person_off" style={{ maskImage: `url('${imgVilla}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.225 18.225">
            <path d={svgPaths.p2f914f80} fill={isSelected ? "var(--fill-0, #FC5E58)" : "var(--fill-0, #403D3B)"} id="person_off" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function GuestsList() {
  return (
    <div className="bg-[#f7f5f3] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Guests list">
      <div className="absolute bg-white h-[1387px] left-0 top-[80px]" data-name="left nav">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between py-[8px] relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <Dashboard>
                      <path d={svgPaths.p3a4c6200} fill="var(--fill-0, black)" id="dashboard" />
                    </Dashboard>
                  </div>
                </div>
              </MenuTab>
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <Villa>
                      <path d={svgPaths.p22441180} fill="var(--fill-0, black)" id="villa" />
                    </Villa>
                  </div>
                </div>
              </MenuTab>
              <div className="bg-white relative shrink-0 w-[56px]" data-name="menu tab">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start px-[4px] py-[2px] relative w-full">
                    <div className="bg-[#fdf0ef] relative rounded-[4px] shrink-0 w-full">
                      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[10px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <MenuIcons className="relative shrink-0 size-[24px]" color="selected" icon="guest" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <Group>
                      <path d={svgPaths.p326e8080} fill="var(--fill-0, black)" id="group" />
                    </Group>
                  </div>
                </div>
              </MenuTab>
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <Sell>
                      <path d={svgPaths.p2a2d7400} fill="var(--fill-0, #403D3B)" id="sell" />
                    </Sell>
                  </div>
                </div>
              </MenuTab>
            </div>
            <div className="content-stretch flex flex-col items-start justify-end relative shrink-0">
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <Wrapper6>
                      <mask height="24" id="mask0_2386_4122" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                      </mask>
                      <g mask="url(#mask0_2386_4122)">
                        <path d={svgPaths.p2080fd00} fill="var(--fill-0, #403D3B)" id="settings_2" />
                      </g>
                    </Wrapper6>
                  </div>
                </div>
              </MenuTab>
              <MenuTab>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="menu icons">
                    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="lightbulb_circle" style={{ maskImage: `url('${imgVilla}')` }} />
                    <Wrapper5>
                      <path d={svgPaths.p64a6e80} fill="var(--fill-0, black)" id="help" />
                    </Wrapper5>
                  </div>
                </div>
              </MenuTab>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d8d4d0] border-r border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute bg-white h-[80px] left-0 top-0 w-[1512px]" data-name="header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[32px] py-[8px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="relative shrink-0" data-name="hotel name">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative">
                    <div className="relative shrink-0 w-[40px]" data-name="logo">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center relative w-full">
                          <div className="relative shrink-0 size-[40px]" data-name="Union">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
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
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center px-[8px] relative shrink-0">
                      <p className="font-['Strawberry_Sans_Display:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">{`Strömstad Spa & Resort`}</p>
                      <div className="relative shrink-0 size-[20px]" data-name="arrows / caret down">
                        <Helper />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              <div className="h-[32px] relative shrink-0 w-[240px]" data-name="search field">
                <div className="absolute bg-[#f2ebef] inset-0 rounded-[8px]" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%-68.5px)] top-1/2">
                  <div className="relative shrink-0 size-[18px]" data-name="main / search">
                    <div className="absolute inset-[14.81%_16.46%_16.75%_15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2.962px] mask-size-[20px_20px]" data-name="search" style={{ maskImage: `url('${imgSearch1}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3375 12.3187">
                        <path d={svgPaths.p27bdef00} fill="var(--fill-0, #5A0032)" id="search" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] h-[15px] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(90,0,50,0.6)] w-[65px]">Search here</p>
                </div>
              </div>
              <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <TopMenuBtn className="relative shrink-0 size-[32px]" />
                <TopMenuBtn className="relative shrink-0 size-[32px]" type="picture" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d8d4d0] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[88px] top-[112px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <p className="font-['Strawberry_Sans_Text:Bold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Guests</p>
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative rounded-[8px] shrink-0 w-[1392px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <Wrapper7 additionalClassNames="w-[240px]">
                  <Input>
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Title">
                      <div className="relative shrink-0 size-[20px]" data-name="time / calendar">
                        <div className="absolute inset-[10%_15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[20px_20px]" data-name="calendar_today" style={{ maskImage: `url('${imgSearch}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                            <path d={svgPaths.p38c8ae00} fill="var(--fill-0, black)" id="calendar_today" />
                          </svg>
                        </div>
                      </div>
                      <p className="flex-[1_0_0] font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">22 Aug 2024</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[20px]" data-name="main / close">
                        <div className="absolute bottom-[27.97%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[20px_20px] right-[27.97%] top-1/4" data-name="close" style={{ maskImage: `url('${imgSearch}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.4067 9.4067">
                            <path d={svgPaths.p198fe700} fill="var(--fill-0, #71706F)" />
                          </svg>
                        </div>
                      </div>
                      <ArrowsCaretDown className="relative shrink-0 size-[24px]" />
                    </div>
                  </Input>
                </Wrapper7>
                <Wrapper7 additionalClassNames="w-[225px]">
                  <Input>
                    <IconTitleText text="Booking type" />
                    <ArrowsCaretDown className="relative shrink-0 size-[24px]" />
                  </Input>
                </Wrapper7>
                <Wrapper7 additionalClassNames="w-[225px]">
                  <Input>
                    <IconTitleText text="Reservation state" />
                    <ArrowsCaretDown className="relative shrink-0 size-[24px]" />
                  </Input>
                </Wrapper7>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Membership filter">
                <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Membership:</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <Frame40348BadgeText text="BLUE" />
                  <Frame40348BadgeText text="SILVER" />
                  <Frame40348BadgeText text="GOLD" />
                  <Frame40348BadgeText text="PLATINUM" />
                </div>
              </div>
              <Wrapper7 additionalClassNames="w-[248px]">
                <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
                  <div aria-hidden="true" className="absolute border border-[#d8d4d0] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[10px] relative w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 1">
                      <p className="flex-[1_0_0] font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#71706f] text-[14px] text-ellipsis whitespace-nowrap">Search...</p>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex items-start relative shrink-0" data-name="Icon right">
                          <div className="relative shrink-0 size-[20px]" data-name="main / search">
                            <div className="absolute inset-[14.81%_16.46%_16.75%_15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2.962px] mask-size-[20px_20px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7083 13.6875">
                                <path d={svgPaths.p993a800} fill="var(--fill-0, black)" id="search" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper7>
            </div>
            <div className="h-0 relative shrink-0 w-[1392px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 1">
                  <line id="Line 32" stroke="var(--stroke-0, #EBE9E7)" x2="1392" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="table">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <TableHeaderCell>Name</TableHeaderCell>
                <TableCellText text="Strawberry Strawberryson" />
                <TableCellText text="Adam Welin" />
                <TableCellText text="Alma Mørk" />
                <TableCellText text="Brutus Halm" />
                <TableCellText text="Carl Henrik Trosterud" />
                <TableCellText text="Dan Haugestrøm" />
                <TableCellText text="Edvind Mosjøen" />
                <TableCellText text="Ena Mørk Johannsen" />
                <TableCellText text="Frida Jensen" />
                <TableCellText text="Gøril Manndal" />
                <TableCellText text="Gerd Berntsen" />
                <TableCellText text="John Smith" />
                <TableCellText text="Johnny Pederson" />
                <TableCellText text="Karen Teresa Williams" />
                <TableCellText text="Mary Hein" />
                <TableCellText text="Morten Hanssteen" />
                <TableCellText text="Nils Porter" />
                <TableCellText text="Nora Kvernhusfossen" />
                <TableCellText text="Victoria Eline Wang Korsmo" />
                <TableCellText text="Patricia Holmes" />
                <div className="relative shrink-0" data-name="table cell">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pt-[16px] relative">
                      <p className="font-['Strawberry_Sans_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#71706f] text-[14px] whitespace-nowrap">Showing 1-20 of 123 results</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <TableHeaderCell>Phone</TableHeaderCell>
                <TableCellText text="90982819" />
                <TableCellText text="90009182" />
                <TableCellText text="89918271" />
                <TableCellText text="99019281" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="99883432" />
                <TableCellText text="—" />
                <TableCellText text="91118291" />
                <TableCellText text="90019291" />
                <TableCellText text="—" />
                <TableCellText text="8817188728891" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
                <TableCellText text="—" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <TableHeaderCell>Email</TableHeaderCell>
                <TableCellText text="a.victoria.wangkorsmo@gmail.com" />
                <Frame40108TableCell text="adam.welin@" text1="gmail.com" />
                <TableCellText text="alma.mork@gmail.com" />
                <Frame40108TableCell text="brutus.halm@" text1="gmail.com" />
                <TableCellText text="carl.henrik@online.com" />
                <Frame40108TableCell text="dan.haugestrom@" text1="gmail.com" />
                <TableCellText text="edvind.mosjoen@online.com" />
                <Frame40108TableCell text="ena.mork.johannsen@" text1="gmail.com" />
                <Frame40108TableCell text="frida.jensen@" text1="gmail.com" />
                <Frame40108TableCell text="goril.manndal@" text1="gmail.com" />
                <TableCellText text="gerd.berntsen@online.no" />
                <TableCellText text="john.smith@gmail.com" />
                <TableCellText text="johnny.pederson@online.no" />
                <TableCellText text="karen.teresa.williams@gmail.com" />
                <TableCellText text="mary.hein@gmail.com" />
                <TableCellText text="morten.hanssteen@gmail.com" />
                <TableCellText text="nils.porter@gmail.com" />
                <TableCellText text="nora.kvernhusfossen@gmail.com" />
                <TableCellText text="victoria.wangkorsmo@gmail.com" />
                <TableCellText text="patricia.holmes@gmail.com" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <TableHeaderCell>Membership</TableHeaderCell>
                <Frame40112TableCell />
                <Wrapper text="Gold" additionalClassNames="bg-[#ede9d6]" />
                <Frame40112TableCell />
                <Frame40112TableCell />
                <Wrapper text="Silver" additionalClassNames="bg-[#e6e6e6]" />
                <Frame40112TableCell />
                <Frame40112TableCell />
                <Frame40112TableCell />
                <Wrapper text="Blue" additionalClassNames="bg-[#cfdbdf]" />
                <Wrapper text="Silver" additionalClassNames="bg-[#e6e6e6]" />
                <Frame40112TableCell />
                <Frame40112TableCell />
                <Wrapper text="Blue" additionalClassNames="bg-[#cfdbdf]" />
                <Wrapper text="Platinum" additionalClassNames="bg-[#dedddb]" />
                <Wrapper text="Gold" additionalClassNames="bg-[#ede9d6]" />
                <Wrapper text="Gold" additionalClassNames="bg-[#ede9d6]" />
                <Frame40112TableCell />
                <Frame40112TableCell />
                <Wrapper text="Blue" additionalClassNames="bg-[#cfdbdf]" />
                <Wrapper text="Silver" additionalClassNames="bg-[#e6e6e6]" />
                <div className="relative shrink-0 w-full" data-name="table cell">
                  <div className="flex flex-row items-center justify-end size-full">
                    <div className="content-stretch flex items-center justify-end pt-[4px] relative w-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <Frame40113Buttons>
                          <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
                              <div className="relative shrink-0 size-[20px]" data-name="arrows / first">
                                <Wrapper8 additionalClassNames="left-1/2 top-1/2">
                                  <g id="first_page">
                                    <mask height="20" id="mask0_2386_4073" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                                      <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                                    </mask>
                                    <g mask="url(#mask0_2386_4073)">
                                      <path d={svgPaths.pe7db7f2} fill="var(--fill-0, black)" id="first_page_2" />
                                    </g>
                                  </g>
                                </Wrapper8>
                              </div>
                            </div>
                          </div>
                        </Frame40113Buttons>
                        <Frame40113Buttons>
                          <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
                              <div className="relative shrink-0 size-[20px]" data-name="arrows / chevron left">
                                <Wrapper8 additionalClassNames="left-[calc(50%-0.37px)] top-[calc(50%-0.19px)]">
                                  <g id="chevron_backward">
                                    <mask height="20" id="mask0_2386_4061" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                                      <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                                    </mask>
                                    <g mask="url(#mask0_2386_4061)">
                                      <path d={svgPaths.p2675ef00} fill="var(--fill-0, black)" id="chevron_backward_2" />
                                    </g>
                                  </g>
                                </Wrapper8>
                              </div>
                            </div>
                          </div>
                        </Frame40113Buttons>
                        <Frame40113Buttons>
                          <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
                              <div className="relative shrink-0 size-[20px]" data-name="arrows / chevron right">
                                <Wrapper8 additionalClassNames="left-1/2 top-1/2">
                                  <g id="chevron_right">
                                    <mask height="20" id="mask0_2386_4043" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                                      <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                                    </mask>
                                    <g mask="url(#mask0_2386_4043)">
                                      <path d={svgPaths.p10e29e00} fill="var(--fill-0, black)" id="chevron_right_2" />
                                    </g>
                                  </g>
                                </Wrapper8>
                              </div>
                            </div>
                          </div>
                        </Frame40113Buttons>
                        <Frame40113Buttons>
                          <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Content">
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon left">
                              <div className="relative shrink-0 size-[20px]" data-name="arrows / last">
                                <Wrapper8 additionalClassNames="left-1/2 top-1/2">
                                  <g id="last_page">
                                    <mask height="20" id="mask0_2386_4055" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                                      <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                                    </mask>
                                    <g mask="url(#mask0_2386_4055)">
                                      <path d={svgPaths.p11cf530} fill="var(--fill-0, black)" id="last_page_2" />
                                    </g>
                                  </g>
                                </Wrapper8>
                              </div>
                            </div>
                          </div>
                        </Frame40113Buttons>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}