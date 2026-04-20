import { useState } from "react";
import svgPaths from "../../imports/svg-sopy4dkzkk";

// Types based on Trybe API structure
interface Treatment {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
  currency: string;
  category: string;
  description?: string;
  practitioner?: string;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  practitioner: string;
  available: boolean;
}

interface DayAvailability {
  date: string;
  displayDate: string;
  treatments: Treatment[];
}

// Mock data structure matching Trybe API
// In production, this would come from: GET /api/appointments/available-dates
const MOCK_AVAILABILITY: DayAvailability[] = [
  {
    date: "2024-08-03",
    displayDate: "3 August",
    treatments: [
      {
        id: "1",
        name: "Classic Facial Treatment",
        duration: 50,
        price: 850,
        currency: "SEK",
        category: "Facial",
        description: "Deep cleansing and hydrating facial",
        practitioner: "Natalie",
      },
      {
        id: "2",
        name: "Hot Stone Massage",
        duration: 60,
        price: 950,
        currency: "SEK",
        category: "Massage",
        description: "Relaxing full-body massage with heated stones",
        practitioner: "Maria",
      },
      {
        id: "3",
        name: "Swedish Massage",
        duration: 60,
        price: 850,
        currency: "SEK",
        category: "Massage",
        description: "Traditional Swedish massage techniques",
        practitioner: "Maria",
      },
      {
        id: "4",
        name: "Aromatherapy Massage",
        duration: 75,
        price: 1050,
        currency: "SEK",
        category: "Massage",
        description: "Massage with essential oils",
        practitioner: "Natalie",
      },
    ],
  },
  {
    date: "2024-08-04",
    displayDate: "4 August",
    treatments: [
      {
        id: "5",
        name: "Body Scrub & Wrap",
        duration: 90,
        price: 1200,
        currency: "SEK",
        category: "Body Treatment",
        description: "Exfoliating scrub followed by nourishing wrap",
        practitioner: "Maria",
      },
      {
        id: "1",
        name: "Classic Facial Treatment",
        duration: 50,
        price: 850,
        currency: "SEK",
        category: "Facial",
        description: "Deep cleansing and hydrating facial",
        practitioner: "Natalie",
      },
      {
        id: "2",
        name: "Hot Stone Massage",
        duration: 60,
        price: 950,
        currency: "SEK",
        category: "Massage",
        description: "Relaxing full-body massage with heated stones",
        practitioner: "Maria",
      },
      {
        id: "6",
        name: "Deep Tissue Massage",
        duration: 60,
        price: 900,
        currency: "SEK",
        category: "Massage",
        description: "Intensive massage for muscle tension",
        practitioner: "Natalie",
      },
    ],
  },
];

const TIME_SLOTS: Record<string, TimeSlot[]> = {
  "1": [
    { startTime: "09:00", endTime: "09:50", practitioner: "Natalie", available: true },
    { startTime: "11:00", endTime: "11:50", practitioner: "Natalie", available: true },
    { startTime: "14:00", endTime: "14:50", practitioner: "Natalie", available: true },
    { startTime: "16:00", endTime: "16:50", practitioner: "Natalie", available: true },
  ],
  "2": [
    { startTime: "09:00", endTime: "10:00", practitioner: "Maria", available: true },
    { startTime: "12:00", endTime: "13:00", practitioner: "Maria", available: true },
    { startTime: "15:00", endTime: "16:00", practitioner: "Maria", available: true },
    { startTime: "16:30", endTime: "17:30", practitioner: "Maria", available: true },
  ],
  "3": [
    { startTime: "10:30", endTime: "11:30", practitioner: "Maria", available: true },
    { startTime: "13:00", endTime: "14:00", practitioner: "Maria", available: true },
    { startTime: "15:00", endTime: "16:00", practitioner: "Maria", available: true },
  ],
  "4": [
    { startTime: "09:00", endTime: "10:15", practitioner: "Natalie", available: true },
    { startTime: "13:00", endTime: "14:15", practitioner: "Natalie", available: true },
    { startTime: "15:30", endTime: "16:45", practitioner: "Natalie", available: true },
  ],
  "5": [
    { startTime: "09:00", endTime: "10:30", practitioner: "Maria", available: true },
    { startTime: "14:00", endTime: "15:30", practitioner: "Maria", available: true },
  ],
  "6": [
    { startTime: "10:00", endTime: "11:00", practitioner: "Natalie", available: true },
    { startTime: "14:00", endTime: "15:00", practitioner: "Natalie", available: true },
    { startTime: "16:00", endTime: "17:00", practitioner: "Natalie", available: true },
  ],
};

interface SpaBookingPanelProps {
  isExpanded: boolean;
  onToggle: () => void;
  onBookingConfirmed: (booking: {
    treatment: Treatment;
    date: string;
    slot: TimeSlot;
  }) => void;
  bookedAppointments: Array<{
    treatmentId: string;
    date: string;
    time: string;
  }>;
}

export function SpaBookingPanel({ isExpanded, onToggle, onBookingConfirmed, bookedAppointments }: SpaBookingPanelProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTreatments, setIsLoadingTreatments] = useState(false);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successDetails, setSuccessDetails] = useState<{ treatmentName: string; date: string; time: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedTreatment(null);
    setSelectedSlot(null);
    
    // Simulate loading treatments
    setIsLoadingTreatments(true);
    setTimeout(() => {
      setIsLoadingTreatments(false);
    }, 600);
  };

  const handleTreatmentChange = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setSelectedSlot(null);
    
    // Simulate loading time slots
    setIsLoadingSlots(true);
    setTimeout(() => {
      setIsLoadingSlots(false);
    }, 500);
  };

  const handleConfirmBooking = () => {
    if (!selectedTreatment || !selectedSlot || !selectedDate) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onBookingConfirmed({ treatment: selectedTreatment, date: selectedDate, slot: selectedSlot });
      
      // Set success details
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      const dateObj = new Date(selectedDate);
      const displayDate = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]}`;
      
      setSuccessDetails({
        treatmentName: selectedTreatment.name,
        date: displayDate,
        time: selectedSlot.startTime,
      });
      
      // Show success message
      setShowSuccessMessage(true);
      
      // Reset selection
      setSelectedDate(null);
      setSelectedTreatment(null);
      setSelectedSlot(null);
      setIsLoading(false);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        onToggle();
      }, 3000);
    }, 800);
  };

  const selectedDayData = MOCK_AVAILABILITY.find((d) => d.date === selectedDate);
  
  // Filter out booked treatments for the selected date
  const availableTreatments = selectedDayData?.treatments.filter(treatment => {
    const matchesSearch = searchQuery === "" || 
      treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const notBooked = !bookedAppointments.some(
      booked => booked.treatmentId === treatment.id && booked.date === selectedDate
    );
    
    return matchesSearch && notBooked;
  }) || [];
  
  const allTimeSlots = selectedTreatment ? TIME_SLOTS[selectedTreatment.id] || [] : [];
  
  // Filter out booked time slots
  const availableSlots = allTimeSlots.filter(slot => {
    return !bookedAppointments.some(
      booked => 
        booked.treatmentId === selectedTreatment?.id && 
        booked.date === selectedDate && 
        booked.time === slot.startTime
    );
  });

  return (
    <div>
      {!isExpanded ? (
        <button
          onClick={onToggle}
          className="bg-[#960014] px-[12px] py-[6px] rounded-[8px] inline-flex items-center gap-[4px] w-fit hover:bg-[#7A0010] transition-colors"
        >
          <span
            style={{
              fontFamily: "var(--font-strawberry-text)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-bold)",
              color: "white",
            }}
          >
            Show availability
          </span>
          <div className="size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path
                d="M10 13L5 8L6.16667 6.83333L10 10.6667L13.8333 6.83333L15 8L10 13Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      ) : (
        <div className="mt-[12px] border border-[#D8D4D0] rounded-[8px] p-[16px] bg-[#FCFBFA]">
          {/* Header */}
          <div className="flex items-center justify-between mb-[16px]">
            <h4
              style={{
                fontFamily: "var(--font-strawberry-text)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-bold)",
                color: "#121110",
              }}
            >
              Book spa treatment
            </h4>
            <button
              onClick={onToggle}
              className="size-[24px] hover:bg-[#EBE9E7] rounded-[4px] transition-colors flex items-center justify-center"
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path
                  d="M4.26667 12.8L3.2 11.7333L7.93333 7L3.2 2.26667L4.26667 1.2L9 5.93333L13.7333 1.2L14.8 2.26667L10.0667 7L14.8 11.7333L13.7333 12.8L9 8.06667L4.26667 12.8Z"
                  fill="#71706F"
                />
              </svg>
            </button>
          </div>

          {/* Step 1: Select Date */}
          <div className="mb-[16px]">
            <p
              style={{
                fontFamily: "var(--font-strawberry-text)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-bold)",
                color: "#403D3B",
                marginBottom: "8px",
              }}
            >
              Select day
            </p>
            <div className="flex gap-[8px]">
              {MOCK_AVAILABILITY.map((day) => (
                <button
                  key={day.date}
                  onClick={() => handleDateChange(day.date)}
                  className={`flex-1 px-[12px] py-[8px] rounded-[6px] transition-colors border ${
                    selectedDate === day.date
                      ? "bg-[#5A0032] border-[#5A0032] text-white"
                      : "bg-white border-[#D8D4D0] text-[#121110] hover:border-[#B39BA6]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-[2px]">
                    <span
                      className={selectedDate === day.date ? "text-white" : ""}
                      style={{
                        fontFamily: "var(--font-strawberry-text)",
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-weight-regular)",
                        color: selectedDate === day.date ? "white" : "#71706F",
                      }}
                    >
                      {day.displayDate}
                    </span>
                    <span
                      className={selectedDate === day.date ? "text-white" : ""}
                      style={{
                        fontFamily: "var(--font-strawberry-text)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-bold)",
                        color: selectedDate === day.date ? "white" : "#121110",
                      }}
                    >
                      {day.treatments.length} treatments
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Treatment */}
          {selectedDate && selectedDayData && (
            <div className="mb-[16px]">
              <p
                style={{
                  fontFamily: "var(--font-strawberry-text)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "#403D3B",
                  marginBottom: "8px",
                }}
              >
                Available treatments
              </p>
              
              {/* Search Field */}
              <div className="mb-[8px] relative">
                <div className="h-[32px] relative w-full">
                  <div className="absolute bg-[#f2ebef] inset-0 rounded-[8px]"/>
                  <div className="absolute flex gap-[4px] items-center left-[8px] top-1/2 -translate-y-1/2">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="main / search">
                          <mask height="18" id="mask0_127_3784" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18"/>
                          </mask>
                          <g mask="url(#mask0_127_3784)">
                            <path d={svgPaths.p19b66580} fill="var(--fill-0, #5A0032)" id="search"/>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search treatments"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none outline-none w-[calc(100%-30px)]"
                      style={{
                        fontFamily: "var(--font-strawberry-text)",
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-weight-bold)",
                        color: "#5A0032",
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-[8px] max-h-[300px] overflow-y-auto">
                {isLoadingTreatments ? (
                  <>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-[#D8D4D0] bg-white rounded-[6px] p-[10px] animate-pulse">
                        <div className="flex items-start justify-between gap-[8px]">
                          <div className="flex-1">
                            <div className="h-[14px] bg-[#EBE9E7] rounded w-3/4 mb-[6px]" />
                            <div className="h-[12px] bg-[#EBE9E7] rounded w-full mb-[6px]" />
                            <div className="flex items-center gap-[12px]">
                              <div className="h-[12px] bg-[#EBE9E7] rounded w-[60px]" />
                              <div className="h-[12px] w-0 border-l border-[#D8D4D0]" />
                              <div className="h-[12px] bg-[#EBE9E7] rounded w-[50px]" />
                            </div>
                          </div>
                          <div className="shrink-0">
                            <div className="h-[14px] bg-[#EBE9E7] rounded w-[60px]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {availableTreatments.map((treatment) => (
                      <button
                        key={treatment.id}
                        onClick={() => handleTreatmentChange(treatment)}
                        className={`w-full text-left border rounded-[6px] p-[10px] transition-all ${
                          selectedTreatment?.id === treatment.id
                            ? "border-[#5A0032] bg-[#FFF9FC]"
                            : "border-[#D8D4D0] bg-white hover:border-[#B39BA6]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-[8px]">
                          <div className="flex-1">
                            <h5
                              style={{
                                fontFamily: "var(--font-strawberry-text)",
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-bold)",
                                color: "#121110",
                              }}
                            >
                              {treatment.name}
                            </h5>
                            {treatment.description && (
                              <p
                                style={{
                                  fontFamily: "var(--font-strawberry-text)",
                                  fontSize: "var(--text-xs)",
                                  fontWeight: "var(--font-weight-regular)",
                                  color: "#71706F",
                                  marginTop: "2px",
                                  lineHeight: "16px",
                                }}
                              >
                                {treatment.description}
                              </p>
                            )}
                            <div className="flex items-center gap-[12px] mt-[6px]">
                              <div className="flex items-center gap-[4px]">
                                <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                                  <path
                                    d="M7 9.33333C7.27778 9.33333 7.51389 9.24306 7.70833 9.0625C7.90278 8.88194 8 8.65556 8 8.38333V7C8 6.72222 7.90972 6.48611 7.72917 6.29167C7.54861 6.09722 7.32222 6 7.05 6C6.77778 6 6.54167 6.09028 6.34167 6.27083C6.14167 6.45139 6.04111 6.67778 6.04 6.95V8.33333C6.04 8.61111 6.13028 8.84722 6.31083 9.04167C6.49139 9.23611 6.71778 9.33333 6.99 9.33333H7ZM7 13.4167C6.07222 13.4167 5.20139 13.2396 4.3875 12.8854C3.57361 12.5312 2.86458 12.05 2.26042 11.4417C1.65625 10.8333 1.17986 10.1215 0.83125 9.30625C0.482639 8.49097 0.308333 7.62014 0.308333 6.69375C0.308333 5.76736 0.485417 4.89653 0.839583 4.08125C1.19375 3.26597 1.675 2.55417 2.28333 1.94583C2.89167 1.3375 3.60347 0.861111 4.41875 0.5125C5.23403 0.163889 6.10486 -0.0104167 7.03125 -0.0104167C7.95764 -0.0104167 8.82847 0.163889 9.64375 0.5125C10.459 0.861111 11.1708 1.3375 11.7792 1.94583C12.3875 2.55417 12.8639 3.26597 13.2083 4.08125C13.5528 4.89653 13.725 5.76736 13.725 6.69375C13.725 7.62014 13.5479 8.49097 13.1938 9.30625C12.8396 10.1215 12.3583 10.8333 11.75 11.4417C11.1417 12.05 10.4299 12.5312 9.61458 12.8854C8.79931 13.2396 7.92847 13.4167 7 13.4167Z"
                                    fill="#71706F"
                                  />
                                </svg>
                                <span
                                  style={{
                                    fontFamily: "var(--font-strawberry-text)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: "var(--font-weight-regular)",
                                    color: "#71706F",
                                  }}
                                >
                                  {treatment.duration} min
                                </span>
                              </div>
                              <div className="h-[12px] w-0 border-l border-[#D8D4D0]" />
                              <div className="flex items-center gap-[4px]">
                                <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                                  <path
                                    d="M5.83333 10.5H8.16667V9.33333H5.83333V10.5ZM5.83333 7.58333H8.16667V6.41667H5.83333V7.58333ZM3.79167 13.4167C3.475 13.4167 3.20556 13.3035 2.98333 13.0771C2.76111 12.8507 2.65 12.578 2.65 12.2592V1.74083C2.65 1.42194 2.76111 1.14931 2.98333 0.922917C3.20556 0.696528 3.475 0.583333 3.79167 0.583333H7.58333L11.35 4.375V12.2592C11.35 12.578 11.2368 12.8507 11.0104 13.0771C10.784 13.3035 10.5114 13.4167 10.1925 13.4167H3.79167ZM7 4.95833V1.75H3.79167V12.25H10.1925V4.95833H7Z"
                                    fill="#71706F"
                                  />
                                </svg>
                                <span
                                  style={{
                                    fontFamily: "var(--font-strawberry-text)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: "var(--font-weight-regular)",
                                    color: "#71706F",
                                  }}
                                >
                                  {treatment.practitioner}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <p
                              style={{
                                fontFamily: "var(--font-strawberry-text)",
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-bold)",
                                color: "#5A0032",
                              }}
                            >
                              {treatment.price} {treatment.currency}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Select Time Slot */}
          {selectedTreatment && (
            <div>
              <p
                style={{
                  fontFamily: "var(--font-strawberry-text)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "#403D3B",
                  marginBottom: "8px",
                }}
              >
                Available time slots
              </p>
              {isLoadingSlots ? (
                <div className="grid grid-cols-3 gap-[8px]">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="border border-[#D8D4D0] bg-white rounded-[6px] p-[10px] animate-pulse">
                      <div className="flex flex-col items-center gap-[4px]">
                        <div className="h-[14px] bg-[#EBE9E7] rounded w-[40px] mb-[2px]" />
                        <div className="h-[12px] bg-[#EBE9E7] rounded w-[50px]" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="p-[16px] bg-white rounded-[6px] text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-strawberry-text)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#71706F",
                    }}
                  >
                    No available slots for this treatment
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-[8px]">
                  {availableSlots.map((slot, index) => {
                    const isSelected = selectedSlot?.startTime === slot.startTime;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`border rounded-[6px] p-[10px] transition-all group ${
                          isSelected 
                            ? "border-[#5A0032] bg-[#5A0032]" 
                            : "border-[#D8D4D0] bg-white hover:bg-[#5A0032] hover:border-[#5A0032]"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-[4px]">
                          <span
                            style={{
                              fontFamily: "var(--font-strawberry-text)",
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-bold)",
                            }}
                            className={isSelected ? "text-white" : "text-[#121110] group-hover:text-white"}
                          >
                            {slot.startTime}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-strawberry-text)",
                              fontSize: "var(--text-xs)",
                              fontWeight: "var(--font-weight-regular)",
                            }}
                            className={isSelected ? "text-white" : "text-[#71706F] group-hover:text-white"}
                          >
                            {slot.practitioner}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Confirm Booking Button */}
          {selectedTreatment && selectedSlot && (
            <div className="mt-[16px]">
              <button
                onClick={handleConfirmBooking}
                className="bg-[#5A0032] px-[12px] py-[8px] rounded-[6px] text-white transition-colors hover:bg-[#450028] flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="size-[16px] animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.928l3-2.647z" />
                  </svg>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-strawberry-text)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-bold)",
                      color: "white",
                    }}
                  >
                    Confirm booking
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Success Message */}
          {showSuccessMessage && successDetails && (
            <div className="mt-[12px] p-[10px] bg-[#5A0032] rounded-[6px] flex items-start gap-[8px] text-white">
              <div className="size-[16px] shrink-0 mt-[2px]">
                <svg fill="none" viewBox="0 0 16 16">
                  <path
                    d="M8 11C8.18519 11 8.34259 10.9352 8.47222 10.8056C8.60185 10.6759 8.66667 10.5185 8.66667 10.3333V8C8.66667 7.81481 8.60185 7.65741 8.47222 7.52778C8.34259 7.39815 8.18519 7.33333 8 7.33333C7.81481 7.33333 7.65741 7.39815 7.52778 7.52778C7.39815 7.65741 7.33333 7.81481 7.33333 8V10.3333C7.33333 10.5185 7.39815 10.6759 7.52778 10.8056C7.65741 10.9352 7.81481 11 8 11ZM8 6C8.18519 6 8.34259 5.93519 8.47222 5.80556C8.60185 5.67593 8.66667 5.51852 8.66667 5.33333C8.66667 5.14815 8.60185 4.99074 8.47222 4.86111C8.34259 4.73148 8.18519 4.66667 8 4.66667C7.81481 4.66667 7.65741 4.73148 7.52778 4.86111C7.39815 4.99074 7.33333 5.14815 7.33333 5.33333C7.33333 5.51852 7.39815 5.67593 7.52778 5.80556C7.65741 5.93519 7.81481 6 8 6ZM8 14.6667C7.07778 14.6667 6.21111 14.4907 5.4 14.1389C4.58889 13.787 3.88333 13.3083 3.28333 12.7028C2.68333 12.0972 2.20833 11.3889 1.85833 10.5778C1.50833 9.76667 1.33333 8.9 1.33333 7.97778C1.33333 7.05556 1.50926 6.18889 1.86111 5.37778C2.21296 4.56667 2.69167 3.86111 3.29722 3.26111C3.90278 2.66111 4.61111 2.18611 5.42222 1.83611C6.23333 1.48611 7.1 1.31111 8.02222 1.31111C8.94444 1.31111 9.81111 1.48704 10.6222 1.83889C11.4333 2.19074 12.1389 2.66944 12.7389 3.275C13.3389 3.88056 13.8139 4.58889 14.1639 5.4C14.5139 6.21111 14.6889 7.07778 14.6889 8C14.6889 8.92222 14.513 9.78889 14.1611 10.6C13.8093 11.4111 13.3306 12.1167 12.725 12.7167C12.1194 13.3167 11.4111 13.7917 10.6 14.1417C9.78889 14.4917 8.92222 14.6667 8 14.6667Z"
                    fill="#71706F"
                  />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-strawberry-text)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "white",
                  lineHeight: "18px",
                }}
              >
                Booking confirmed for {successDetails.treatmentName} on {successDetails.date} at {successDetails.time}.
              </p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-[12px] p-[10px] bg-white rounded-[6px] flex items-start gap-[8px]">
            <div className="size-[16px] shrink-0 mt-[2px]">
              <svg fill="none" viewBox="0 0 16 16">
                <path
                  d="M8 11C8.18519 11 8.34259 10.9352 8.47222 10.8056C8.60185 10.6759 8.66667 10.5185 8.66667 10.3333V8C8.66667 7.81481 8.60185 7.65741 8.47222 7.52778C8.34259 7.39815 8.18519 7.33333 8 7.33333C7.81481 7.33333 7.65741 7.39815 7.52778 7.52778C7.39815 7.65741 7.33333 7.81481 7.33333 8V10.3333C7.33333 10.5185 7.39815 10.6759 7.52778 10.8056C7.65741 10.9352 7.81481 11 8 11ZM8 6C8.18519 6 8.34259 5.93519 8.47222 5.80556C8.60185 5.67593 8.66667 5.51852 8.66667 5.33333C8.66667 5.14815 8.60185 4.99074 8.47222 4.86111C8.34259 4.73148 8.18519 4.66667 8 4.66667C7.81481 4.66667 7.65741 4.73148 7.52778 4.86111C7.39815 4.99074 7.33333 5.14815 7.33333 5.33333C7.33333 5.51852 7.39815 5.67593 7.52778 5.80556C7.65741 5.93519 7.81481 6 8 6ZM8 14.6667C7.07778 14.6667 6.21111 14.4907 5.4 14.1389C4.58889 13.787 3.88333 13.3083 3.28333 12.7028C2.68333 12.0972 2.20833 11.3889 1.85833 10.5778C1.50833 9.76667 1.33333 8.9 1.33333 7.97778C1.33333 7.05556 1.50926 6.18889 1.86111 5.37778C2.21296 4.56667 2.69167 3.86111 3.29722 3.26111C3.90278 2.66111 4.61111 2.18611 5.42222 1.83611C6.23333 1.48611 7.1 1.31111 8.02222 1.31111C8.94444 1.31111 9.81111 1.48704 10.6222 1.83889C11.4333 2.19074 12.1389 2.66944 12.7389 3.275C13.3389 3.88056 13.8139 4.58889 14.1639 5.4C14.5139 6.21111 14.6889 7.07778 14.6889 8C14.6889 8.92222 14.513 9.78889 14.1611 10.6C13.8093 11.4111 13.3306 12.1167 12.725 12.7167C12.1194 13.3167 11.4111 13.7917 10.6 14.1417C9.78889 14.4917 8.92222 14.6667 8 14.6667Z"
                  fill="#71706F"
                />
              </svg>
            </div>
            <p
              style={{
                fontFamily: "var(--font-strawberry-text)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-regular)",
                color: "#71706F",
                lineHeight: "18px",
              }}
            >
              Availability synced with Trybe. Select a day, treatment, and time slot to book.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}