import { useState, useEffect } from "react";

export type MembershipTier = "non-member" | "blue" | "silver" | "gold" | "platinum" | "lifetime-gold" | "lifetime-platinum";

interface TierData {
  id: MembershipTier;
  displayName: string;
  nightsRequired: number;
  benefits: string[];
  badgeColor: string;
  badgeTextColor: string;
}

const TIER_DATA: Record<MembershipTier, TierData> = {
  "non-member": {
    id: "non-member",
    displayName: "Non member",
    nightsRequired: 0,
    benefits: [
      "Free coffee (when you join)",
      "Restaurant vouchers (when you join)",
      "Member discount (when you join)",
      "Partner offers (when you join)",
      "Early access to campaigns (when you join)",
      "Spenn on each hotel stay (when you join)",
    ],
    badgeColor: "var(--color-secondary)",
    badgeTextColor: "var(--color-foreground)",
  },
  blue: {
    id: "blue",
    displayName: "Blue",
    nightsRequired: 0,
    benefits: [
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#CFDBDF",
    badgeTextColor: "#121110",
  },
  silver: {
    id: "silver",
    displayName: "Silver",
    nightsRequired: 5,
    benefits: [
      "Possible late check out",
      "Cancellations until 6pm",
      "More Spenn per stay",
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#E6E6E6",
    badgeTextColor: "#121110",
  },
  gold: {
    id: "gold",
    displayName: "Gold",
    nightsRequired: 30,
    benefits: [
      "Room guarantee",
      "Spa entrance 2 for 1",
      "Possible early check-in",
      "Lower annual fee",
      "Status match with Hertz",
      "Possible upgrade",
      "Freeze your level",
      "Possible late check out",
      "Cancellations until 6pm",
      "More Spenn per stay",
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#EDE9D6",
    badgeTextColor: "#121110",
  },
  platinum: {
    id: "platinum",
    displayName: "Platinum",
    nightsRequired: 60,
    benefits: [
      "Train for free at hotels",
      "Free mineral water/soda",
      "Room guarantee",
      "Spa entrance 2 for 1",
      "Possible early check-in",
      "Lower annual fee",
      "Status match with Hertz",
      "Possible upgrade",
      "Freeze your level",
      "Possible late check out",
      "Cancellations until 6pm",
      "More Spenn per stay",
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#DEDDDB",
    badgeTextColor: "#121110",
  },
  "lifetime-gold": {
    id: "lifetime-gold",
    displayName: "Lifetime Gold",
    nightsRequired: 30,
    benefits: [
      "Room guarantee",
      "Spa entrance 2 for 1",
      "Possible early check-in",
      "Lower annual fee",
      "Status match with Hertz",
      "Possible upgrade",
      "Freeze your level",
      "Possible late check out",
      "Cancellations until 6pm",
      "More Spenn per stay",
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#EDE9D6",
    badgeTextColor: "#121110",
  },
  "lifetime-platinum": {
    id: "lifetime-platinum",
    displayName: "Lifetime Platinum",
    nightsRequired: 60,
    benefits: [
      "Train for free at hotels",
      "Free mineral water/soda",
      "Room guarantee",
      "Spa entrance 2 for 1",
      "Possible early check-in",
      "Lower annual fee",
      "Status match with Hertz",
      "Possible upgrade",
      "Freeze your level",
      "Possible late check out",
      "Cancellations until 6pm",
      "More Spenn per stay",
      "Free coffee",
      "Restaurant vouchers",
      "Member discount",
      "Partner offers",
      "Early access to campaigns",
      "Spenn on each hotel stay",
      "Monday Breakfast",
      "Red Carpet",
    ],
    badgeColor: "#DEDDDB",
    badgeTextColor: "#121110",
  },
};

interface MembershipCardProps {
  actualTier?: MembershipTier;
  nightsStayed?: number;
  nightsAtProperty?: number;
  spennPoints?: number;
  memberSince?: string;
  onInviteClick?: () => void;
  qualifyingPeriodStart?: string;
  qualifyingPeriodEnd?: string;
  membershipExpiryDate?: string;
  yearsAsGold?: number;
  yearsAsPlatinum?: number;
  isPotentialMember?: boolean;
  matchingFields?: Array<'email' | 'phone' | 'lastName'>;
  onReviewMatch?: () => void;
  enrollmentState?: 'idle' | 'enrolling' | 'enrolled' | 'delayed' | 'error';
}

export function MembershipCard({
  actualTier = "blue",
  nightsStayed = 2,
  nightsAtProperty = 1,
  spennPoints = 450,
  memberSince = "Jan 2024",
  onInviteClick,
  qualifyingPeriodStart,
  qualifyingPeriodEnd,
  membershipExpiryDate,
  yearsAsGold,
  yearsAsPlatinum,
  isPotentialMember = false,
  matchingFields = [],
  onReviewMatch,
  enrollmentState = 'idle',
}: MembershipCardProps) {
  const [previewTier, setPreviewTier] = useState<MembershipTier>(actualTier);
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [redeemedBenefits, setRedeemedBenefits] = useState<Set<number>>(new Set());
  const [isAdvancedMode, setIsAdvancedMode] = useState(true);

  // Keep preview synced if actual tier changes
  useEffect(() => {
    let defaultPreview = actualTier;
    if (actualTier === "lifetime-gold") {
      defaultPreview = "gold";
    } else if (actualTier === "lifetime-platinum") {
      defaultPreview = "platinum";
    }
    setPreviewTier(defaultPreview);
    setShowAllBenefits(false);
    setRedeemedBenefits(new Set());
  }, [actualTier]);

  const previewData = TIER_DATA[previewTier];
  const actualData = TIER_DATA[actualTier];

  const isNonMember = actualTier === "non-member";
  const isExploring = previewTier !== actualTier && 
                      !(actualTier === "lifetime-gold" && previewTier === "gold") &&
                      !(actualTier === "lifetime-platinum" && previewTier === "platinum");

  // Benefits display
  const visibleBenefits = showAllBenefits ? previewData.benefits : previewData.benefits.slice(0, 3);
  const remainingBenefitsCount = previewData.benefits.length - 3;

  const toggleBenefitRedemption = (index: number) => {
    const newRedeemed = new Set(redeemedBenefits);
    if (newRedeemed.has(index)) {
      newRedeemed.delete(index);
    } else {
      newRedeemed.add(index);
    }
    setRedeemedBenefits(newRedeemed);
  };

  // Tiers to display in toggle
  const allTiers: MembershipTier[] = ["non-member", "blue", "silver", "gold", "platinum", "lifetime-gold", "lifetime-platinum"];
  const actualIndex = allTiers.indexOf(actualTier);
  
  // Show only the 4 main tiers in preview (blue, silver, gold, platinum) - not lifetime tiers
  const availableTiers: MembershipTier[] = ["blue", "silver", "gold", "platinum"];
  
  const previewIndex = allTiers.indexOf(previewTier);

  // Progress calculations for next tier
  let showProgress = false;
  let targetTierName = "";
  let requiredNightsForTarget = 0;

  const effectiveActualTier = actualTier === "lifetime-gold" ? "gold" : actualTier === "lifetime-platinum" ? "platinum" : actualTier;
  const effectiveActualIndex = allTiers.indexOf(effectiveActualTier);

  if (previewIndex > effectiveActualIndex) {
    // Exploring a higher tier
    showProgress = true;
    targetTierName = previewData.displayName;
    requiredNightsForTarget = previewData.nightsRequired;
  } else if (previewIndex === effectiveActualIndex) {
    // Looking at actual tier, show progress to NEXT tier (if any)
    if (effectiveActualTier === "non-member" || effectiveActualTier === "blue") {
      showProgress = true;
      targetTierName = TIER_DATA["silver"].displayName;
      requiredNightsForTarget = TIER_DATA["silver"].nightsRequired;
    } else if (effectiveActualTier === "silver") {
      showProgress = true;
      targetTierName = TIER_DATA["gold"].displayName;
      requiredNightsForTarget = TIER_DATA["gold"].nightsRequired;
    } else if (effectiveActualTier === "gold") {
      showProgress = true;
      targetTierName = TIER_DATA["platinum"].displayName;
      requiredNightsForTarget = TIER_DATA["platinum"].nightsRequired;
    }
  }

  // Cap nights logic so we don't show negative numbers
  const nightsToReach = Math.max(0, requiredNightsForTarget - nightsStayed);
  const progressPercent = Math.min(100, Math.max(0, (nightsStayed / (requiredNightsForTarget || 1)) * 100));

  // Lifetime progress logic
  const showLifetimeGoldProgress = actualTier === "gold";
  const showLifetimePlatinumProgress = actualTier === "platinum";
  
  // Lifetime Gold requires 8 years at Gold
  const lifetimeGoldRequirementYears = 8;
  const currentYearsGold = yearsAsGold || 0;
  
  // Lifetime Platinum requires 10 years at Platinum
  const lifetimePlatinumRequirementYears = 10;
  const currentYearsPlatinum = yearsAsPlatinum || 0;

  return (
    <div className="bg-card rounded-md p-5 shadow-sm relative">
      {/* Header */}
      {isNonMember ? (
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-bold text-[length:var(--text-base)] text-foreground">
            Membership
          </h3>
          <div className="bg-secondary px-1.5 py-0.5 rounded-full">
            <span className="text-[length:var(--text-xs)] text-foreground">
              {actualData.displayName}
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[length:var(--text-base)] text-foreground">
              Membership status
            </h3>
            <div
              className={`px-1.5 py-0.5 rounded-full`}
              style={{ backgroundColor: actualData.badgeColor }}
            >
              <span className="text-[length:var(--text-xs)] whitespace-nowrap" style={{ color: actualData.badgeTextColor }}>
                {actualData.displayName}
              </span>
            </div>
          </div>
          {/* Advanced View Toggle */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <label className="text-[length:var(--text-xs)] text-muted-foreground cursor-pointer select-none" htmlFor="view-mode-toggle">
              Advanced view
            </label>
            <button
              id="view-mode-toggle"
              role="switch"
              aria-checked={isAdvancedMode}
              onClick={() => setIsAdvancedMode(!isAdvancedMode)}
              className={`w-8 h-4 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${isAdvancedMode ? 'bg-primary' : 'bg-muted-foreground/30'}`}
            >
              <span 
                className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-background transition-transform ${isAdvancedMode ? 'translate-x-4' : 'translate-x-0'}`}
              />
            </button>
          </div>
        </>
      )}

      {/* Non-member CTA */}
      {isNonMember && (
        <>
          {isPotentialMember ? (
            <div className="mb-4 p-3 bg-[#FFF0F0] rounded-md border border-[#C41E3A]">
              <div className="flex gap-2 mb-2">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667ZM8.66667 4.66667C8.66667 4.29848 8.36819 4 8 4C7.63181 4 7.33334 4.29848 7.33334 4.66667V8C7.33334 8.36819 7.63181 8.66667 8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8V4.66667ZM8 11.3333C8.55228 11.3333 9 10.8856 9 10.3333C9 9.78106 8.55228 9.33334 8 9.33334C7.44772 9.33334 7 9.78106 7 10.3333C7 10.8856 7.44772 11.3333 8 11.3333Z" fill="#EA580C"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[length:var(--text-sm)] text-foreground mb-1">
                    Potential member detected
                  </p>
                  <p className="text-[length:var(--text-xs)] text-foreground mb-2">
                    Partial data match found in membership database:
                  </p>
                  <div className="space-y-1">
                    {matchingFields.includes('email') && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#EA580C]" />
                        <span className="text-[length:var(--text-xs)] text-foreground">Email address matches existing record</span>
                      </div>
                    )}
                    {matchingFields.includes('phone') && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#EA580C]" />
                        <span className="text-[length:var(--text-xs)] text-foreground">Phone number matches existing record</span>
                      </div>
                    )}
                  </div>
                  <p className="text-[length:var(--text-xs)] text-[#403D3B] mt-2 mb-3">
                    Please verify the guest's identity before proceeding. Enrollment is disabled until confirmation.
                  </p>
                  <button
                    onClick={onReviewMatch}
                    className="w-full bg-[#EA580C] text-white px-3 py-2 rounded-md hover:bg-[#C24100] transition-colors font-bold text-[length:var(--text-xs)] flex items-center justify-center shadow-sm"
                  >
                    Review match
                  </button>
                </div>
              </div>
            </div>
          ) : enrollmentState === 'delayed' ? (
            <div className="mb-4 p-3 bg-secondary rounded-md border border-border">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-primary animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" className="opacity-75"/>
                </svg>
                <p className="font-bold text-[length:var(--text-sm)] text-foreground">Enrollment processing...</p>
              </div>
              <p className="text-[length:var(--text-xs)] text-muted-foreground">
                Membership status submitted and will appear shortly due to system delays.
              </p>
            </div>
          ) : enrollmentState === 'error' ? (
            <div className="mb-4 p-3 bg-[#FFF0F0] rounded-md border border-[#FFCDD2]">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-[#C41E3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-[length:var(--text-sm)] text-[#C41E3A]">Sync Failed</p>
              </div>
              <p className="text-[length:var(--text-xs)] text-[#C41E3A]">
                Failed to fetch the resulting membership status. Please check back later.
              </p>
            </div>
          ) : enrollmentState === 'enrolling' ? (
            <div className="mb-4 p-3 bg-secondary rounded-md flex items-center justify-center gap-2">
               <svg className="w-4 h-4 text-primary animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                 <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" className="opacity-75"/>
               </svg>
               <span className="text-[length:var(--text-xs)] text-foreground font-medium">Registering guest...</span>
            </div>
          ) : (
            <div className="mb-4 p-3 bg-secondary rounded-md">
              <p className="text-[length:var(--text-xs)] mb-2 text-foreground">
                This guest isn't a member. Invite them to unlock exclusive benefits!
              </p>
              <button
                onClick={onInviteClick}
                className="w-full bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity font-bold text-[length:var(--text-xs)]"
              >
                Invite to join
              </button>
            </div>
          )}
        </>
      )}

      {/* Tier Selector */}
      <div className="mb-4">
        <label className="text-[length:var(--text-xs)] text-muted-foreground block mb-2">
          Preview membership tier
        </label>
        <div className="flex gap-1.5">
          {availableTiers.map((tier) => {
            const isActual = tier === actualTier || 
                           (tier === "gold" && actualTier === "lifetime-gold") ||
                           (tier === "platinum" && actualTier === "lifetime-platinum");
            const isPreviewing = tier === previewTier;
            const tierData = TIER_DATA[tier];

            return (
              <button
                key={tier}
                onClick={() => {
                  setPreviewTier(tier);
                  setShowAllBenefits(false);
                  setRedeemedBenefits(new Set());
                }}
                className={`flex-1 px-1.5 py-1.5 rounded-md transition-all relative border flex justify-center items-center ${
                  isPreviewing 
                    ? "bg-primary border-primary" 
                    : "bg-secondary border-transparent hover:bg-muted"
                }`}
              >
                {isActual && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary shadow-sm" />
                )}
                <span
                  className={`font-bold text-[length:10px] ${isPreviewing ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {tierData.displayName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Membership Stats */}
      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <label className="text-[length:var(--text-xs)] text-muted-foreground block">
            Total nights
          </label>
          <p className="font-bold text-[length:var(--text-sm)] text-foreground mt-0.5">
            {nightsStayed}
          </p>
        </div>
        <div>
          <label className="text-[length:var(--text-xs)] text-muted-foreground block">
            At property
          </label>
          <p className="font-bold text-[length:var(--text-sm)] text-foreground mt-0.5">
            {nightsAtProperty}
          </p>
        </div>
        {!isNonMember && (
          <>
            <div>
              <label className="text-[length:var(--text-xs)] text-muted-foreground block">
                Member since
              </label>
              <p className="font-bold text-[length:var(--text-sm)] text-foreground mt-0.5">
                {memberSince}
              </p>
            </div>
            <div>
              <label className="text-[length:var(--text-xs)] text-muted-foreground block">
                Spenn points
              </label>
              <p className="font-bold text-[length:var(--text-sm)] text-foreground mt-0.5">
                {spennPoints.toLocaleString()}
              </p>
            </div>
            {membershipExpiryDate && !isExploring && isAdvancedMode && (
              <div>
                <label className="text-[length:var(--text-xs)] text-muted-foreground block">
                  Level valid until
                </label>
                <p className="font-bold text-[length:var(--text-sm)] text-foreground mt-0.5">
                  {membershipExpiryDate}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Unified Progress & Qualifying Period */}
      {!isNonMember && (showProgress || (isAdvancedMode && qualifyingPeriodStart && qualifyingPeriodEnd)) && (
        <div className="mb-4 p-4 bg-secondary rounded-md border border-border">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-[length:var(--text-sm)] text-foreground">
              {showProgress ? `Progress to ${targetTierName}` : 'Qualifying period'}
            </h4>
            <span className="font-bold text-[length:var(--text-sm)] text-foreground">
              {nightsStayed} / {showProgress ? requiredNightsForTarget : actualData.nightsRequired}
            </span>
          </div>
          
          {(qualifyingPeriodStart && qualifyingPeriodEnd && isAdvancedMode) && (
            <p className="text-[length:var(--text-xs)] text-muted-foreground mb-3">
              {qualifyingPeriodStart} - {qualifyingPeriodEnd}
            </p>
          )}

          <div className={`w-full bg-background rounded-full h-2 overflow-hidden mb-2 ${isAdvancedMode ? 'border border-border/50' : 'mt-3'}`}>
            <div
              className={`h-full rounded-full transition-all ${targetTierName === 'Platinum' || (!showProgress && (actualTier === 'platinum' || actualTier === 'lifetime-platinum')) ? '' : 'bg-primary'}`}
              style={{ 
                width: `${Math.min(100, Math.max(0, (nightsStayed / (showProgress ? requiredNightsForTarget : actualData.nightsRequired || 1)) * 100))}%`,
                ...(targetTierName === 'Platinum' || (!showProgress && (actualTier === 'platinum' || actualTier === 'lifetime-platinum')) ? { backgroundColor: '#121110' } : {})
              }}
            />
          </div>

          <p className="text-[length:var(--text-xs)] text-muted-foreground text-right">
            {showProgress 
              ? `${nightsToReach} nights to go`
              : `${Math.max(0, actualData.nightsRequired - nightsStayed)} nights to remain ${actualData.displayName}`
            }
          </p>
        </div>
      )}

      {/* Lifetime Gold Progress - Dots */}
      {!isNonMember && !isExploring && showLifetimeGoldProgress && isAdvancedMode && (
        <div className="mb-4 p-3 bg-secondary rounded-md border border-[#F4E3B5]">
          <div className="flex items-center justify-between mb-3">
            <label className="font-bold text-[length:var(--text-sm)] text-foreground">
              Lifetime Gold progress
            </label>
          </div>
          <div className="flex gap-1.5 mb-3">
            {Array.from({ length: lifetimeGoldRequirementYears }).map((_, i) => (
              <div 
                key={i} 
                className={`w-4 h-4 rounded-full ${i < currentYearsGold ? 'bg-[#C1AA60]' : 'bg-muted border border-border'}`} 
              />
            ))}
          </div>
          <p className="text-[length:var(--text-sm)] text-foreground">
            {currentYearsGold} of {lifetimeGoldRequirementYears} years to Lifetime Gold
          </p>
        </div>
      )}

      {/* Lifetime Platinum Progress - Dots */}
      {!isNonMember && !isExploring && showLifetimePlatinumProgress && isAdvancedMode && (
        <div className="mb-4 p-3 bg-secondary rounded-md border border-border">
          <div className="flex items-center justify-between mb-3">
            <label className="font-bold text-[length:var(--text-sm)] text-foreground">
              Lifetime Platinum progress
            </label>
          </div>
          <div className="flex gap-1.5 mb-3">
            {Array.from({ length: lifetimePlatinumRequirementYears }).map((_, i) => (
              <div 
                key={i} 
                className={`w-4 h-4 rounded-full ${i < currentYearsPlatinum ? 'bg-primary' : 'bg-muted border border-border'}`} 
              />
            ))}
          </div>
          <p className="text-[length:var(--text-sm)] text-foreground">
            {currentYearsPlatinum} of {lifetimePlatinumRequirementYears} years to Lifetime Platinum
          </p>
        </div>
      )}

      {/* Lifetime Achievement Badges */}
      {((actualTier === "lifetime-gold" && (previewTier === "gold" || previewTier === "lifetime-gold")) ||
        (actualTier === "lifetime-platinum" && (previewTier === "platinum" || previewTier === "lifetime-platinum"))) && (
        <div className="mb-4 p-3 bg-secondary rounded-md border border-[var(--color-primary)]">
          <div className="flex items-start gap-2">
            <div className="shrink-0 mt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="var(--color-primary)" stroke="var(--color-background)" strokeWidth="2" />
                <path d="M11 6L7 10L5 8" stroke="var(--color-background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[length:var(--text-sm)] text-foreground mb-1">
                Achieved {actualData.displayName}
              </p>
              <p className="text-[length:var(--text-xs)] text-muted-foreground">
                {actualTier === "lifetime-gold" && yearsAsGold ? `${yearsAsGold} years as Gold member` : 
                 actualTier === "lifetime-platinum" && yearsAsPlatinum ? `${yearsAsPlatinum} years as Platinum member` :
                 "Lifetime status achieved"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      <div>
        <h4 className="font-bold text-[length:var(--text-sm)] text-foreground mb-3">
          {isNonMember && !isExploring ? "Benefits when joining" : `${previewData.displayName} Benefits`}
        </h4>
        <div className="space-y-2">
          {visibleBenefits.map((benefit, index) => {
            const canRedeem = !isNonMember && !isExploring;
            const isRedeemed = canRedeem && redeemedBenefits.has(index);

            return (
              <div key={index} className="flex items-start gap-2 group">
                <div className="w-3 h-3 flex items-center justify-center mt-1 shrink-0">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span 
                  className={`text-[length:var(--text-sm)] flex-1 leading-5 ${isRedeemed ? "line-through text-muted-foreground" : "text-foreground"}`}
                >
                  {benefit}
                </span>
                {canRedeem && (
                  <button
                    onClick={() => toggleBenefitRedemption(index)}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5 ${
                      isRedeemed ? "opacity-100" : ""
                    }`}
                    title={isRedeemed ? "Mark as not redeemed" : "Mark as redeemed"}
                  >
                    <div 
                      className={`w-4 h-4 rounded-sm border transition-all flex items-center justify-center ${
                        isRedeemed 
                          ? "bg-primary border-primary" 
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {isRedeemed && (
                        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
                          <path d="M10 3L4.5 8.5L2 6" stroke="var(--color-primary-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {remainingBenefitsCount > 0 && !showAllBenefits && (
          <button 
            onClick={() => setShowAllBenefits(true)}
            className="mt-2.5 text-primary hover:underline font-bold text-[length:var(--text-xs)]"
          >
            +{remainingBenefitsCount} more
          </button>
        )}
        {showAllBenefits && (
          <button 
            onClick={() => setShowAllBenefits(false)}
            className="mt-2.5 text-primary hover:underline font-bold text-[length:var(--text-xs)]"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}