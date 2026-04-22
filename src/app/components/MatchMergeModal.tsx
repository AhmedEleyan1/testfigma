import { useState, useEffect, useMemo } from "react";
import { Info, X, CheckCircle2, AlertTriangle, GitMerge } from "lucide-react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export type FieldKey = string;

export interface ProfileData {
  id: string;
  initials: string;
  name: string;
  subtitle: string;
  subSubtitle?: string;
  isMainTarget?: boolean;
  fields: Record<FieldKey, { label: string; value: string | null }>;
}

export interface MatchMergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDismiss?: () => void;
  onMerge: (resolvedData: Record<FieldKey, string | null>) => void;
  profiles: ProfileData[];
  matchScore?: string;
}

type MergeStep = 'confirm' | 'success';

export function MatchMergeModal({
  isOpen,
  onClose,
  onDismiss,
  onMerge,
  profiles,
  matchScore = "High"
}: MatchMergeModalProps) {
  const [currentStep, setCurrentStep] = useState<MergeStep>('confirm');
  const [finalResolvedData, setFinalResolvedData] = useState<Record<FieldKey, string | null>>({});

  const { allFieldLabels } = useMemo(() => {
    const labels: Record<FieldKey, string> = {};
    profiles.forEach(p => {
      Object.entries(p.fields).forEach(([k, v]) => {
        if (v.label) labels[k] = v.label;
      });
    });
    return { allFieldLabels: labels };
  }, [profiles]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep('confirm');
      
      if (profiles.length > 0) {
        // Golden Record Enforcement: Only member data is preserved.
        const resolvedData: Record<FieldKey, string | null> = {};
        const goldenRecord = profiles.find(p => p.isMainTarget) || profiles[0];
        
        Object.keys(allFieldLabels).forEach(key => {
          resolvedData[key] = goldenRecord.fields[key]?.value || null;
        });
        
        setFinalResolvedData(resolvedData);
      }
    }
  }, [isOpen, profiles, allFieldLabels]);

  if (!isOpen) return null;

  const handleFinalizeMerge = () => {
    setCurrentStep('success');
  };

  const handleCloseAndDispatch = () => {
    onMerge(finalResolvedData);
  };

  // Fluid grid using minmax(0, 1fr) for perfect responsiveness without scrolling
  const gridTemplateColumns = `120px repeat(${profiles.length}, minmax(0, 1fr))`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 w-full h-full text-foreground">
      <div 
        className="bg-white rounded-[8px] w-[900px] max-w-full h-auto max-h-[95vh] flex flex-col shadow-2xl overflow-hidden relative transition-all duration-300"
        style={{ fontFamily: "var(--font-strawberry-text)" }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-30 flex items-center justify-between px-[32px] py-[20px] border-b border-[#EBE9E7]">
          {currentStep === 'confirm' ? (
            <div>
              <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                Confirm Profile Match
              </h2>
              <p className="text-[14px] text-muted-foreground mt-1">
                The guest's reservation will be merged onto the Registered Member profile, and the temporary guest information will be discarded.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                Great Work!
              </h2>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white">
          {currentStep === 'confirm' && (
            <div className="p-10 pb-16 max-w-full">
              <div className="flex flex-col gap-8">
                
                {/* Profiles Header (Fluid Columns) */}
                <div className="grid mb-2" style={{ gridTemplateColumns }}>
                  <div className="self-end pb-4 font-bold text-[15px] text-foreground border-b border-[#F7F5F3]">
                    Profiles Comparison
                  </div>
                  {profiles.map(p => (
                    <div key={p.id} className="flex flex-col items-center text-center px-4 py-4 border-b border-[#F7F5F3]">
                      <div className="mb-3 flex justify-center">
                        {p.isMainTarget ? (
                          <div className="bg-popover text-popover-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-border inline-flex items-center gap-1 shadow-sm">
                            <WorkspacePremiumIcon className="w-3.5 h-3.5 text-inherit" /> Member Profile
                          </div>
                        ) : (
                          <div className="bg-[#FFF0F0] text-[#C41E3A] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#C41E3A] inline-flex items-center gap-1 shadow-sm">
                            <PersonSearchIcon className="w-3.5 h-3.5 text-inherit" /> Guest Record (Discard)
                          </div>
                        )}
                      </div>
                      <div className={`size-[48px] rounded-full text-[#403D3B] flex items-center justify-center font-bold text-[16px] border border-border shadow-sm shrink-0 mb-3 ${p.isMainTarget ? 'bg-secondary' : 'bg-white opacity-75'}`}>
                        {p.initials}
                      </div>
                      <span className={`font-bold text-[13px] uppercase tracking-wide break-words line-clamp-2 w-full ${p.isMainTarget ? 'text-primary' : 'text-muted-foreground'}`}>
                        {p.name}
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1 break-words w-full">{p.subtitle}</p>
                      {p.subSubtitle && <p className="text-[10px] text-muted-foreground/80 mt-0.5 break-words w-full">{p.subSubtitle}</p>}
                    </div>
                  ))}
                </div>

                {/* Data Comparison Grid */}
                <div className="w-full border border-border rounded-[8px] overflow-hidden bg-white shadow-sm flex flex-col mb-4">
                  {Object.keys(allFieldLabels).map((key, idx) => {
                    const isAllEmpty = profiles.every(p => !p.fields[key]?.value);
                    if (isAllEmpty) return null;

                    return (
                      <div 
                        key={key} 
                        className={`grid ${idx !== Object.keys(allFieldLabels).length - 1 ? 'border-b border-[#F7F5F3]' : ''} bg-[#FAF9F8]`}
                        style={{ gridTemplateColumns }}
                      >
                        <div className="py-3 px-4 font-bold text-[11px] text-muted-foreground self-center uppercase tracking-wider break-words border-r border-[#EBE9E7]">
                          {allFieldLabels[key]}
                        </div>
                        
                        {profiles.map((p, pIdx) => {
                          const val = p.fields[key]?.value;
                          const isGolden = p.isMainTarget;
                          
                          return (
                            <div 
                              key={`${p.id}-${key}`}
                              className={`p-3 flex items-start gap-2 relative transition-colors ${isGolden ? 'bg-white' : 'bg-[#FAF9F8]'}
                                ${pIdx !== profiles.length - 1 ? 'border-r border-[#EBE9E7]' : ''}
                              `}
                            >
                              <span className={`text-[13px] pr-2 break-words flex-1 ${!val ? 'text-muted-foreground italic' : (isGolden ? 'text-primary font-bold' : 'text-[#71706F] opacity-[0.85]')}`} style={{ wordBreak: 'break-word' }}>
                                {val || "-"}
                              </span>
                              {isGolden && val && (
                                <CheckCircle2 className="size-[14px] text-primary shrink-0 mt-[2px] opacity-80" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

                {/* Final Target Warning */}
                <div className="bg-secondary/30 border border-border rounded-[8px] p-5 flex items-start gap-3 w-full">
                  <div className="mt-0.5 text-primary">
                    <AlertTriangle className="size-[18px] opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-[14px]">Profile Data Locked</h3>
                    <p className="text-muted-foreground text-[13px] mt-1 leading-relaxed">
                      Editing membership data during the merge process is strictly prohibited. The Member profile will absorb all reservations from the discarded guest profile while retaining its own exact fields.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {currentStep === 'success' && (
            <div className="h-full flex flex-col items-center justify-center text-center py-24 pb-32">
              <div className="size-[64px] rounded-full flex items-center justify-center mb-6 bg-[#E6F4EA] border-[3px] border-[#CEEAD6] shadow-sm">
                <CheckCircle2 className="size-[32px] text-[#137333]" />
              </div>
              <h2 className="text-[24px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>Merge Completed</h2>
              <p className="text-[15px] text-muted-foreground max-w-md mx-auto mt-2">
                The duplicate entries have been resolved successfully. The booking data has been securely anchored to the Member profile.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-[#EBE9E7] px-8 py-5 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-30">
          {currentStep === 'confirm' && (
            <>
              <div className="flex gap-4">
                {onDismiss && (
                  <div className="relative group flex">
                    <button
                      onClick={onDismiss}
                      className="px-[20px] py-[10px] rounded-[6px] border border-border text-foreground hover:bg-[#FAF9F8] hover:border-border transition-colors font-bold text-[14px] bg-white shadow-sm flex items-center gap-2"
                    >
                      <X className="size-[16px]" /> Not a match
                    </button>
                    <div className="absolute left-0 bottom-[calc(100%+8px)] w-[240px] p-[10px] bg-[#121110] text-white text-[12px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-50 leading-snug">
                      This immediately dismisses the match and permanently prohibits merging these profiles.
                      <div className="absolute -bottom-[4px] left-[24px] rotate-45 w-[8px] h-[8px] bg-[#121110]" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-4 items-center">
                <button
                  onClick={onClose}
                  className="px-[20px] py-[10px] rounded-[6px] text-muted-foreground hover:text-foreground font-bold transition-colors"
                >
                  Decide later
                </button>
                <button
                  onClick={handleFinalizeMerge}
                  className="px-[32px] py-[10px] rounded-[6px] bg-primary hover:bg-[#7A0028] transition-colors text-white font-bold text-[14px] shadow-sm active:scale-[0.98] flex items-center gap-2"
                >
                  <GitMerge className="size-[16px]" /> Merge Reservation
                </button>
              </div>
            </>
          )}

          {currentStep === 'success' && (
            <div className="w-full flex justify-end">
              <button
                onClick={handleCloseAndDispatch}
                className="px-[48px] py-[10px] rounded-[6px] bg-primary hover:bg-[#7A0028] transition-colors text-white font-bold text-[14px] shadow-sm active:scale-[0.98]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
