import React, { useState, useEffect, useMemo, useRef } from "react";
import { Info, X, CheckCircle2, AlertTriangle, GitMerge, ArrowRight, UserPlus, Shield, Search } from "lucide-react";

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
  onEnroll?: () => void;
  onMerge: (resolvedData: Record<FieldKey, string | null>) => void;
  profiles: ProfileData[];
  matchScore?: string;
}

export function MatchMergeModal({
  isOpen,
  onClose,
  onDismiss,
  onEnroll,
  onMerge,
  profiles,
  matchScore = "High"
}: MatchMergeModalProps) {
  const [currentStep, setCurrentStep] = useState<'confirm' | 'success'>('confirm');

  useEffect(() => {
    if (isOpen) setCurrentStep('confirm');
  }, [isOpen]);

  if (!isOpen) return null;

  // Defensive data processing
  const safeProfiles = Array.isArray(profiles) ? profiles : [];
  const hasTwoProfiles = safeProfiles.length === 2;
  
  const allFieldLabels: Record<string, string> = {};
  safeProfiles.forEach(p => {
    if (p?.fields) {
      Object.entries(p.fields).forEach(([k, v]) => {
        if (v?.label) allFieldLabels[k] = v.label;
      });
    }
  });

  const fieldKeys = Object.keys(allFieldLabels);
  const changes: any[] = [];
  const matches: any[] = [];

  fieldKeys.forEach(key => {
    const values = safeProfiles.map(p => p?.fields?.[key]?.value);
    const isMatch = values.every(v => v === values[0]);
    const isAllEmpty = safeProfiles.every(p => !p?.fields?.[key]?.value);
    if (!isAllEmpty) {
      if (isMatch) matches.push({ key, label: allFieldLabels[key] });
      else changes.push({ key, label: allFieldLabels[key] });
    }
  });

  const gridTemplateColumns = hasTwoProfiles 
    ? `120px 1fr 48px 1fr` 
    : `120px repeat(${safeProfiles.length}, minmax(0, 1fr))`;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-[12px] w-[900px] max-w-full h-auto max-h-[95vh] flex flex-col shadow-2xl overflow-hidden relative transition-all duration-300 border border-border"
        style={{ fontFamily: "var(--font-strawberry-text)" }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-30 flex items-center justify-between px-8 py-5 border-b border-border">
          {currentStep === 'confirm' ? (
            <div>
              <h2 id="modal-title" className="text-[20px] font-bold text-[#403D3B]">Confirm Profile Match</h2>
              <p className="text-[14px] text-[#575655] mt-1">
                The guest's reservation will be merged onto the Registered Member profile.
              </p>
            </div>
          ) : (
            <h2 className="text-[20px] font-bold text-[#403D3B]">Merge Completed</h2>
          )}
          <button onClick={onClose} className="p-2 hover:bg-[#FAF9F8] rounded-full transition-colors" aria-label="Close">
            <X className="size-5 text-[#575655]" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          {currentStep === 'confirm' ? (
            <div className="flex flex-col gap-4">
              
              {/* Unified Table Container */}
              <div className="w-full border border-border rounded-[12px] overflow-hidden bg-white shadow-sm flex flex-col">
                
                {/* Profiles Header Row */}
                <div className="grid bg-[#FAF9F8] border-b border-border" style={{ gridTemplateColumns }}>
                  <div className="self-center px-4 py-3 font-bold text-[13px] text-[#403D3B] border-r border-border">
                    Profiles
                  </div>
                  {safeProfiles.map((p, idx) => (
                    <React.Fragment key={p.id}>
                      {idx === 1 && hasTwoProfiles && (
                        <div className="flex items-center justify-center border-r border-border bg-white/30">
                          <ArrowRight className="size-5 text-primary/40" />
                        </div>
                      )}
                      <div className={`flex flex-col items-center text-center px-4 py-3 ${idx !== safeProfiles.length - 1 ? 'border-r border-border' : ''} ${p.isMainTarget ? 'bg-white' : ''}`}>
                        <div className="mb-2">
                          {p.isMainTarget ? (
                            <div className="bg-popover text-popover-foreground text-[10px] font-bold px-2 py-0.5 rounded-full border border-border inline-flex items-center gap-1">
                              <Shield className="w-3 h-3" /> Member
                            </div>
                          ) : (
                            <div className="bg-[#FFF0F0] text-[#C41E3A] text-[10px] font-bold px-2 py-0.5 rounded-full border border-border inline-flex items-center gap-1">
                              <Search className="w-3 h-3" /> Guest
                            </div>
                          )}
                        </div>
                        <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm border border-border shadow-sm mb-1.5 ${p.isMainTarget ? 'bg-secondary text-primary' : 'bg-white text-[#403D3B]'}`}>
                          {p.initials}
                        </div>
                        <span className={`font-bold text-[12px] uppercase tracking-wide truncate w-full ${p.isMainTarget ? 'text-primary' : 'text-[#403D3B]'}`}>
                          {p.name}
                        </span>
                        <p className="text-[10px] text-[#575655] mt-0.5 font-medium">{p.subtitle}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* Differences Section */}
                {changes.length > 0 && (
                  <div className="bg-[#FFF0F0]/50 py-2.5 px-4 border-b border-border flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-[#C41E3A]" />
                    <span className="text-[10px] font-bold text-[#C41E3A] uppercase tracking-widest">Key Differences</span>
                  </div>
                )}
                {changes.map((field, idx) => (
                  <div key={field.key} className="grid border-b border-border last:border-b-0 hover:bg-[#FDFCFB] transition-colors" style={{ gridTemplateColumns }}>
                    <div className="py-2.5 px-4 font-bold text-[11px] text-[#575655] self-center uppercase tracking-wider border-r border-border bg-[#FAF9F8]/30">
                      {field.label}
                    </div>
                    {safeProfiles.map((p, pIdx) => (
                      <React.Fragment key={`${p.id}-${field.key}`}>
                        {pIdx === 1 && hasTwoProfiles && (
                          <div className="flex items-center justify-center border-r border-border bg-[#FAF9F8]/10">
                            <ArrowRight className="size-3.5 text-muted-foreground/30" />
                          </div>
                        )}
                        <div className={`p-2.5 flex items-center gap-2 text-[13px] ${pIdx !== safeProfiles.length - 1 ? 'border-r border-border' : ''} ${p.isMainTarget ? 'font-bold text-primary' : 'text-[#403D3B]'}`}>
                          <span className="truncate flex-1">{p?.fields?.[field.key]?.value || "-"}</span>
                          {p.isMainTarget && p?.fields?.[field.key]?.value && <CheckCircle2 className="size-3.5 text-primary opacity-60" />}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ))}

                {/* Matches Section */}
                {matches.length > 0 && (
                  <div className="bg-[#F7F5F3] py-2 px-4 border-b border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-[#137333]" />
                      <span className="text-[10px] font-bold text-[#137333] uppercase tracking-widest">Matching Data</span>
                    </div>
                  </div>
                )}
                {matches.map((field) => (
                  <div key={field.key} className="grid border-b border-border last:border-b-0 opacity-[0.85]" style={{ gridTemplateColumns }}>
                    <div className="py-2 px-4 font-bold text-[10px] text-[#575655] self-center uppercase tracking-wider border-r border-border">
                      {field.label}
                    </div>
                    {safeProfiles.map((p, pIdx) => (
                      <React.Fragment key={`${p.id}-${field.key}`}>
                        {pIdx === 1 && hasTwoProfiles && <div className="border-r border-border" />}
                        <div className={`p-2 text-[12px] text-[#575655] ${pIdx !== safeProfiles.length - 1 ? 'border-r border-border' : ''}`}>
                          {p?.fields?.[field.key]?.value || "-"}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="size-16 rounded-full bg-[#E6F4EA] border-2 border-[#CEEAD6] flex items-center justify-center mb-6">
                <CheckCircle2 className="size-8 text-[#137333]" />
              </div>
              <h2 className="text-2xl font-bold text-[#403D3B]">Merge Successful</h2>
              <p className="text-sm text-[#575655] mt-2 max-w-sm">The reservation has been successfully anchored to the member profile.</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-border px-8 py-4 flex items-center justify-between shadow-lg">
          {currentStep === 'confirm' ? (
            <>
              <button onClick={onEnroll} className="flex items-center gap-2 text-[#5A0032] font-bold text-[14px] hover:underline">
                <UserPlus className="size-4" /> Enroll Guest
              </button>
              <div className="flex gap-4">
                <button onClick={onClose} className="px-5 py-2 text-[#575655] font-bold text-[14px] hover:text-[#403D3B]">Decide later</button>
                <button onClick={() => setCurrentStep('success')} className="px-8 py-2 bg-primary hover:bg-[#7A0028] transition-colors text-white font-bold text-[14px] rounded-md shadow-md">
                  <GitMerge className="size-4 inline mr-2" /> Merge Profile
                </button>
              </div>
            </>
          ) : (
            <button onClick={() => onMerge({})} className="w-full py-3 bg-primary text-white rounded-md font-bold hover:bg-[#7A0028] transition-colors">Done</button>
          )}
        </div>
      </div>
    </div>
  );
}
