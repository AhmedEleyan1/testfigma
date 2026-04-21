import { useState, useEffect, useMemo } from "react";
import { ChevronDown, Info, CircleDashed, X, CheckCircle2, ArrowLeft } from "lucide-react";
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

type MergeStep = 'select' | 'confirm' | 'success';

export function MatchMergeModal({
  isOpen,
  onClose,
  onDismiss,
  onMerge,
  profiles,
  matchScore = "High"
}: MatchMergeModalProps) {
  const [selectedValues, setSelectedValues] = useState<Record<FieldKey, string>>({});
  const [currentStep, setCurrentStep] = useState<MergeStep>('select');
  const [finalResolvedData, setFinalResolvedData] = useState<Record<FieldKey, string | null>>({});

  useEffect(() => {
    if (isOpen) {
      setCurrentStep('select');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && profiles.length > 0) {
      const initialSelections: Record<FieldKey, string> = {};
      const allKeys = new Set<FieldKey>();
      profiles.forEach(p => Object.keys(p.fields).forEach(key => allKeys.add(key)));

      allKeys.forEach(key => {
        let bestProfileId = profiles[0].id;
        let isSet = false;

        for (let i = 0; i < profiles.length; i++) {
          if (profiles[i].isMainTarget && profiles[i].fields[key]?.value) {
            bestProfileId = profiles[i].id;
            isSet = true;
            break;
          }
        }

        if (!isSet) {
          for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].fields[key]?.value) {
              bestProfileId = profiles[i].id;
              break;
            }
          }
        }
        initialSelections[key] = bestProfileId;
      });
      setSelectedValues(initialSelections);
    }
  }, [isOpen, profiles]);

  const { matchingFields, conflictingFields, allFieldLabels } = useMemo(() => {
    const allKeys = new Set<FieldKey>();
    const labels: Record<FieldKey, string> = {};

    profiles.forEach(p => {
      Object.entries(p.fields).forEach(([k, v]) => {
        allKeys.add(k);
        if (v.label) labels[k] = v.label;
      });
    });

    const matching: FieldKey[] = [];
    const conflicting: FieldKey[] = [];

    allKeys.forEach(key => {
      let firstVal: string | null | undefined = undefined;
      let allMatch = true;
      let hasData = false;

      for (const p of profiles) {
        const val = p.fields[key]?.value;
        if (val) hasData = true;

        if (firstVal === undefined) {
          firstVal = val;
        } else if (firstVal !== val) {
          allMatch = false;
          break;
        }
      }

      if (hasData && allMatch && profiles.length > 1) {
        matching.push(key);
      } else {
        conflicting.push(key);
      }
    });

    return { matchingFields: matching, conflictingFields: conflicting, allFieldLabels: labels };
  }, [profiles]);

  if (!isOpen) return null;

  const handleSelectAll = (profileId: string) => {
    const newSelections = { ...selectedValues };
    conflictingFields.forEach(key => {
      newSelections[key] = profileId;
    });
    setSelectedValues(newSelections);
  };

  const handleFieldChange = (key: FieldKey, profileId: string) => {
    setSelectedValues(prev => ({ ...prev, [key]: profileId }));
  };

  const handlePrepareConfirmation = () => {
    const resolvedData: Record<FieldKey, string | null> = {};
    Object.keys(allFieldLabels).forEach(key => {
      if (matchingFields.includes(key)) {
        resolvedData[key] = profiles[0].fields[key]?.value || null;
      } else {
        const selectedProfileId = selectedValues[key];
        const profile = profiles.find(p => p.id === selectedProfileId) || profiles[0];
        resolvedData[key] = profile.fields[key]?.value || null;
      }
    });
    setFinalResolvedData(resolvedData);
    setCurrentStep('confirm');
  };

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
        className="bg-white rounded-[8px] w-[1100px] max-w-full h-auto max-h-[95vh] flex flex-col shadow-2xl overflow-hidden relative transition-all duration-300"
        style={{ fontFamily: "var(--font-strawberry-text)" }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-30 flex items-center justify-between px-[32px] py-[20px] border-b border-[#EBE9E7]">
          {currentStep === 'confirm' ? (
            <div className="flex items-center gap-4">
              <button onClick={() => setCurrentStep('select')} className="p-2 hover:bg-secondary rounded-full transition-colors -ml-2">
                <ArrowLeft className="size-[20px] text-muted-foreground" />
              </button>
              <div>
                <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                  Confirm Merge Details
                </h2>
                <p className="text-[13px] text-muted-foreground mt-1">Review the finalized profile before completing the merge.</p>
              </div>
            </div>
          ) : currentStep === 'success' ? (
             <div>
                <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                  Great Work!
                </h2>
              </div>
          ) : (
            <div>
              <h2 className="text-[20px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>
                Resolve Data Conflicts
              </h2>
              <p className="text-[14px] text-muted-foreground mt-1">
                Select the correct data points to merge into the final profile. After merging, the reservation will belong to the membership.
              </p>
            </div>
          )}

          <div className="flex items-center gap-6">
            {currentStep !== 'success' && (
              <button 
                onClick={onClose}
                className="p-[8px] hover:bg-secondary rounded-[4px] transition-colors"
                title="Decide later"
              >
                <X className="w-[20px] h-[20px] text-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white">
          {currentStep === 'select' && (
            <div className="p-10 pb-20 max-w-full">
              <div className="flex flex-col gap-10">
                {/* Profiles Header (Fluid Columns) */}
                <div className="grid mb-2" style={{ gridTemplateColumns }}>
                  <div className="self-end pb-4 font-bold text-[15px] text-foreground border-b border-[#F7F5F3]">
                    Profiles
                  </div>
                  {profiles.map(p => (
                    <div key={p.id} className="flex flex-col items-center text-center px-2 py-4 border-b border-[#F7F5F3]">
                      <div className="mb-3 flex justify-center">
                        {p.isMainTarget ? (
                          <div className="bg-popover text-popover-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-border inline-flex items-center gap-1">
                            <WorkspacePremiumIcon className="w-3.5 h-3.5 text-inherit" /> Registered Member
                          </div>
                        ) : (
                          <div className="bg-[#FFF0F0] text-[#C41E3A] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#C41E3A] inline-flex items-center gap-1">
                            <PersonSearchIcon className="w-3.5 h-3.5 text-inherit" /> Potential Member
                          </div>
                        )}
                      </div>
                      <div className="size-[48px] rounded-full bg-secondary text-[#403D3B] flex items-center justify-center font-bold text-[16px] border border-border shadow-sm shrink-0 mb-3">
                        {p.initials}
                      </div>
                      <span className="text-primary font-bold text-[13px] uppercase tracking-wide break-words line-clamp-2 w-full">
                        {p.name}
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1 break-words w-full">{p.subtitle}</p>
                      {p.subSubtitle && <p className="text-[10px] text-muted-foreground/80 mt-0.5 break-words w-full">{p.subSubtitle}</p>}
                    </div>
                  ))}
                </div>

                {matchingFields.length > 0 && (
                  <div className="mb-2 px-2">
                    <h3 className="font-bold text-[14px] text-foreground mb-3 uppercase tracking-wider">Matching Fields</h3>
                    <div className="border border-border/60 bg-secondary/30 rounded-[8px] p-5 flex flex-wrap gap-x-12 gap-y-4">
                      {matchingFields.map(key => (
                        <div key={key} className="flex flex-col gap-1 min-w-[120px]">
                          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{allFieldLabels[key]}</span>
                          <p className="text-[14px] font-medium text-foreground">{profiles[0].fields[key]?.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-[14px] text-foreground mb-1 px-2 uppercase tracking-wider">Fields to resolve</h3>
                  <p className="text-[13px] text-muted-foreground px-2 mb-4">Select the fields that you would like to keep, the others will be deleted.</p>
                  
                  <div className="w-full border border-border rounded-[8px] overflow-hidden bg-white shadow-sm flex flex-col">
                    
                    {/* Top Table Select All Row */}
                    <div className="grid bg-[#FAF9F8] border-b border-border shadow-[0_1px_2px_rgba(0,0,0,0.02)]" style={{ gridTemplateColumns }}>
                      <div className="py-4 px-4 font-bold text-[11px] text-muted-foreground self-center uppercase tracking-wider break-words flex items-center h-full">
                        Select entire profile
                      </div>
                      {profiles.map(p => {
                        const isChecked = conflictingFields.length > 0 && conflictingFields.every(key => selectedValues[key] === p.id);
                        return (
                          <div 
                            key={`top-table-quick-${p.id}`} 
                            className={`p-4 flex items-center gap-2.5 cursor-pointer relative transition-all duration-200
                                  ${isChecked ? 'bg-[rgba(90,0,50,0.03)] border-x border-[rgba(90,0,50,0.05)]' : 'border-x border-transparent hover:bg-[#F2F0ED]'}
                                `}
                            onClick={() => handleSelectAll(p.id)}
                          >
                            <div className={`mt-0.5 size-[16px] rounded-full border flex items-center justify-center shrink-0 transition-colors
                                ${isChecked ? 'border-primary bg-primary' : 'border-[#D8D4D0] bg-white'}`}>
                                {isChecked && <div className="size-[6px] rounded-full bg-white" />}
                            </div>
                            <span className="text-[12px] font-bold text-foreground truncate select-none uppercase tracking-wide opacity-80">
                              Keep all
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Data Rows */}
                    {conflictingFields.map((key, idx) => {
                      const isAllEmpty = profiles.every(p => !p.fields[key]?.value);
                      if (isAllEmpty) return null;

                      return (
                        <div 
                          key={key} 
                          className={`grid transition-colors group ${idx !== conflictingFields.length - 1 ? 'border-b border-[#F7F5F3]' : ''} hover:bg-[#FAF9F8]`}
                          style={{ gridTemplateColumns }}
                        >
                          <div className="py-4 px-4 font-bold text-[11px] text-muted-foreground self-center uppercase tracking-wider bg-white group-hover:bg-[#FAF9F8] break-words">
                            {allFieldLabels[key]}
                          </div>
                          
                          {profiles.map(p => {
                            const isSelected = selectedValues[key] === p.id;
                            const val = p.fields[key]?.value;
                            
                            return (
                              <div 
                                key={`${p.id}-${key}`}
                                className={`p-4 flex items-start gap-2.5 cursor-pointer relative transition-all duration-200
                                  ${isSelected ? 'bg-[rgba(90,0,50,0.03)] border-x border-[rgba(90,0,50,0.05)]' : 'border-x border-transparent'}
                                `}
                                onClick={() => handleFieldChange(key, p.id)}
                              >
                                <div className={`mt-0.5 size-[16px] rounded-full border flex items-center justify-center shrink-0 transition-colors
                                  ${isSelected ? 'border-primary bg-primary' : 'border-[#D8D4D0] bg-white'}`}>
                                  {isSelected && <div className="size-[6px] rounded-full bg-white" />}
                                </div>
                                <span className={`text-[13px] pr-4 break-words flex-1 ${!val ? 'text-muted-foreground italic' : 'text-foreground font-medium'}`} style={{ wordBreak: 'break-word' }}>
                                  {val || "-"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'confirm' && (
            <div className="max-w-3xl mx-auto py-6 px-6">
              <div className="text-center mb-6">
                <h3 className="text-[22px]" style={{ fontWeight: "var(--font-weight-bold)", color: "var(--foreground)" }}>Review Finalized Profile</h3>
                <p className="text-[14px] text-muted-foreground mt-1.5 max-w-lg mx-auto">
                  Please verify the consolidated data below. This exact profile record will be permanently synchronized.
                </p>
              </div>

              <div className="bg-white border border-border rounded-[12px] shadow-sm overflow-hidden mb-4">
                <div className="grid grid-cols-[160px_1fr]">
                  {Object.keys(allFieldLabels).map((key, idx) => {
                    const finalValue = finalResolvedData[key];
                    if (!finalValue) return null; 
                    
                    return (
                      <div key={key} className="contents group">
                        <div className={`py-3 px-6 bg-[#FAF9F8] font-bold text-[11px] text-muted-foreground uppercase tracking-wider flex items-center border-r border-[#EBE9E7] ${idx !== 0 ? 'border-t border-[#EBE9E7]' : ''}`}>
                          {allFieldLabels[key]}
                        </div>
                        <div className={`py-3 px-8 text-[14px] font-medium text-foreground bg-white break-words ${idx !== 0 ? 'border-t border-[#EBE9E7]' : ''}`}>
                          {finalValue}
                        </div>
                      </div>
                    );
                  })}
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
                The duplicate entries have been resolved successfully. The booking data has been anchored to the chosen profile.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-[#EBE9E7] px-8 py-5 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-30">
          {currentStep === 'select' && (
            <>
              <div className="flex gap-4">
                {onDismiss && (
                  <button
                    onClick={onDismiss}
                    className="px-[20px] py-[10px] rounded-[6px] border border-border text-foreground hover:bg-[#FAF9F8] hover:border-border transition-colors font-bold text-[14px] bg-white shadow-sm flex items-center gap-2"
                    title="Permanently dismiss potential match warning"
                  >
                    <X className="size-[16px]" /> Not a match
                  </button>
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
                  onClick={handlePrepareConfirmation}
                  className="px-[32px] py-[10px] rounded-[6px] bg-primary hover:bg-[#7A0028] transition-colors text-white font-bold text-[14px] shadow-sm active:scale-[0.98] flex items-center gap-2"
                >
                  Merge profiles
                </button>
              </div>
            </>
          )}

          {currentStep === 'confirm' && (
            <>
              <div /> {/* spacing */}
              <div className="flex gap-4">
                <button
                  onClick={handleFinalizeMerge}
                  className="px-[32px] py-[10px] rounded-[6px] bg-primary hover:bg-[#7A0028] transition-colors text-white font-bold text-[14px] shadow-sm active:scale-[0.98] flex items-center gap-2 ml-auto"
                >
                  Confirm & Finalize
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
