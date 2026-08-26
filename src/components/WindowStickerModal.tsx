import React, { useState } from 'react';
import { X, Download, Printer, Check, Star, Shield, Fuel, FileCheck, Layers } from 'lucide-react';
import { SAMPLE_STICKERS, SampleSticker } from '../data/mockData';

interface WindowStickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSticker?: SampleSticker;
}

export const WindowStickerModal: React.FC<WindowStickerModalProps> = ({
  isOpen,
  onClose,
  initialSticker,
}) => {
  const [selectedStickerKey, setSelectedStickerKey] = useState<string>(
    initialSticker?.vin || '1FTFW1E85MFA12345'
  );
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Sync if initialSticker changes
  React.useEffect(() => {
    if (initialSticker && initialSticker.vin) {
      setSelectedStickerKey(initialSticker.vin);
    }
  }, [initialSticker]);

  if (!isOpen) return null;

  const currentSticker: SampleSticker =
    SAMPLE_STICKERS[selectedStickerKey] ||
    initialSticker ||
    SAMPLE_STICKERS['1FTFW1E85MFA12345'];

  const handleCopyVin = () => {
    navigator.clipboard.writeText(currentSticker.vin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const formatCurrency = (val: number) => {
    if (val < 0) {
      return `-$${Math.abs(val).toLocaleString()}`;
    }
    return `$${val.toLocaleString()}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sticker-modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-[#F7F9FC] rounded-2xl shadow-2xl border border-[#DCE2E9] overflow-hidden my-auto flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white border-b border-[#DCE2E9] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EEF4FB] text-[#003478] flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="sticker-modal-title" className="text-base md:text-lg font-bold text-[#111827] font-heading flex items-center gap-2">
                Original Factory Monroney Sticker Replica
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#EEF4FB] text-[#003478] border border-[#DCE2E9] font-medium hidden sm:inline-block">
                  Verified Data
                </span>
              </h2>
              <p className="text-xs text-[#52606D]">
                VIN: <span className="font-vin font-semibold text-[#111827]">{currentSticker.vin}</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyVin}
              aria-label="Copy vehicle identification number"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE2E9] bg-white text-xs font-semibold text-[#52606D] hover:text-[#111827] hover:bg-[#F1F4F8] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#16834B]" /> : <Layers className="w-3.5 h-3.5" />}
              {copied ? 'VIN Copied' : 'Copy VIN'}
            </button>

            <button
              onClick={handlePrint}
              aria-label="Print window sticker"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE2E9] bg-white text-xs font-semibold text-[#52606D] hover:text-[#111827] hover:bg-[#F1F4F8] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            <button
              onClick={handleDownload}
              aria-label="Download reproduction PDF"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#003478] hover:bg-[#00285E] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
            >
              {downloadSuccess ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              {downloadSuccess ? 'PDF Ready!' : 'Download PDF'}
            </button>

            <button
              onClick={onClose}
              aria-label="Close window sticker preview"
              className="p-1.5 text-[#52606D] hover:text-[#111827] hover:bg-[#F1F4F8] rounded-lg transition-colors cursor-pointer ml-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Model Presets Bar */}
        <div className="bg-[#EEF4FB] px-6 py-2.5 border-b border-[#DCE2E9] flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#003478] shrink-0">
            <span>Explore Example Stickers:</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {Object.entries(SAMPLE_STICKERS).map(([vin, s]) => {
              const isActive = s.vin === currentSticker.vin;
              return (
                <button
                  key={vin}
                  onClick={() => setSelectedStickerKey(vin)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    isActive
                      ? 'bg-[#003478] text-white shadow-sm font-semibold'
                      : 'bg-white/80 text-[#52606D] hover:bg-white hover:text-[#111827] border border-[#DCE2E9]'
                  }`}
                >
                  {s.year} {s.model.split(' ')[0]} {s.trim.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Monroney Sticker Preview Container (Authentic Factory Style) */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#E2E8F0] flex justify-center">
          {/* Physical Sticker Card with Blue Border Header and Authentic Structure */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl border-4 border-[#003478] overflow-hidden text-[#111827] flex flex-col font-sans">
            {/* Monroney Top Blue Band */}
            <div className="bg-[#003478] text-white p-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#001C3D]">
              <div className="flex items-center gap-3">
                {/* Independent Monroney Mark */}
                <div className="px-3 py-1 bg-white text-[#003478] font-heading font-extrabold text-lg tracking-wider rounded">
                  FORD
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-wide font-heading">
                    {currentSticker.year} {currentSticker.model}
                  </h3>
                  <p className="text-xs text-[#DCE8F5] uppercase tracking-wider font-semibold">
                    {currentSticker.trim} | {currentSticker.wheelbase}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] font-bold text-[#DCE8F5] uppercase tracking-wider">
                  Vehicle Identification No.
                </div>
                <div className="font-vin font-bold text-sm md:text-base tracking-widest bg-[#001C3D] px-2.5 py-1 rounded border border-[#3E5C8A]">
                  {currentSticker.vin}
                </div>
              </div>
            </div>

            {/* Sub-header spec strip */}
            <div className="bg-[#F1F4F8] border-b border-[#DCE2E9] px-4 py-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div>
                <span className="text-[#7B8794] uppercase text-[10px] block font-bold">Exterior Color</span>
                <span className="font-bold text-[#111827] uppercase">{currentSticker.exteriorColor}</span>
              </div>
              <div>
                <span className="text-[#7B8794] uppercase text-[10px] block font-bold">Interior Color</span>
                <span className="font-bold text-[#111827] uppercase">{currentSticker.interiorColor}</span>
              </div>
              <div>
                <span className="text-[#7B8794] uppercase text-[10px] block font-bold">Engine</span>
                <span className="font-bold text-[#111827] uppercase">{currentSticker.engine}</span>
              </div>
              <div>
                <span className="text-[#7B8794] uppercase text-[10px] block font-bold">Transmission</span>
                <span className="font-bold text-[#111827] uppercase">{currentSticker.transmission}</span>
              </div>
            </div>

            {/* Core Monroney 2-Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#003478]">
              {/* Left Column: Standard Equipment (6 cols) */}
              <div className="md:col-span-6 p-4 border-b md:border-b-0 md:border-r border-[#DCE2E9] bg-white">
                <div className="border-b-2 border-[#003478] pb-1 mb-3 flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#003478]">
                    Standard Equipment Included at No Extra Charge
                  </h4>
                </div>

                <div className="space-y-3 text-[11px]">
                  {/* Exterior */}
                  <div>
                    <span className="font-bold text-[#111827] uppercase tracking-wide block text-[10px] border-b border-[#E2E8F0] pb-0.5 mb-1">
                      Exterior
                    </span>
                    <ul className="grid grid-cols-1 gap-0.5 text-[#52606D]">
                      {currentSticker.standardEquipment.exterior.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#003478] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interior */}
                  <div>
                    <span className="font-bold text-[#111827] uppercase tracking-wide block text-[10px] border-b border-[#E2E8F0] pb-0.5 mb-1">
                      Interior
                    </span>
                    <ul className="grid grid-cols-1 gap-0.5 text-[#52606D]">
                      {currentSticker.standardEquipment.interior.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#003478] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Functional */}
                  <div>
                    <span className="font-bold text-[#111827] uppercase tracking-wide block text-[10px] border-b border-[#E2E8F0] pb-0.5 mb-1">
                      Functional
                    </span>
                    <ul className="grid grid-cols-1 gap-0.5 text-[#52606D]">
                      {currentSticker.standardEquipment.functional.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#003478] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Safety */}
                  <div>
                    <span className="font-bold text-[#111827] uppercase tracking-wide block text-[10px] border-b border-[#E2E8F0] pb-0.5 mb-1">
                      Safety/Security
                    </span>
                    <ul className="grid grid-cols-1 gap-0.5 text-[#52606D]">
                      {currentSticker.standardEquipment.safety.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#003478] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Optional Equipment & MSRP Breakdown (6 cols) */}
              <div className="md:col-span-6 p-4 bg-[#FAFBFD] flex flex-col justify-between">
                <div>
                  <div className="border-b-2 border-[#003478] pb-1 mb-3 flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#003478]">
                      Optional Equipment / Other
                    </h4>
                    <span className="text-[10px] font-bold text-[#52606D]">PRICE</span>
                  </div>

                  {/* Base MSRP Line */}
                  <div className="flex justify-between items-center py-1 text-xs border-b border-[#E2E8F0] font-bold">
                    <span>BASE MSRP</span>
                    <span className="font-mono">{formatCurrency(currentSticker.baseMsrp)}</span>
                  </div>

                  {/* Itemized Options */}
                  <div className="divide-y divide-[#E2E8F0]/60 my-1 text-[11px]">
                    {currentSticker.options.map((opt, i) => (
                      <div key={i} className="flex justify-between items-start py-1 gap-2">
                        <span className="text-[#111827] font-medium leading-tight">
                          {opt.code ? <span className="font-mono font-bold text-[#003478] mr-1">{opt.code}</span> : null}
                          {opt.name}
                        </span>
                        <span className={`font-mono font-bold shrink-0 ${opt.price < 0 ? 'text-[#16834B]' : 'text-[#111827]'}`}>
                          {opt.price === 0 ? 'NO CHARGE' : formatCurrency(opt.price)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Destination & Delivery */}
                  <div className="flex justify-between items-center py-1.5 text-xs border-t border-[#DCE2E9] font-semibold text-[#52606D] mt-2">
                    <span>DESTINATION & DELIVERY</span>
                    <span className="font-mono font-bold text-[#111827]">
                      {formatCurrency(currentSticker.destinationCharge)}
                    </span>
                  </div>
                </div>

                {/* Big Total MSRP Box */}
                <div className="mt-4 pt-3 border-t-2 border-[#003478] bg-[#003478] text-white p-3 rounded-md flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#DCE8F5] block tracking-wider">
                      Total Vehicle & Options / Destination
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">TOTAL MSRP *</span>
                  </div>
                  <div className="text-xl md:text-2xl font-black font-mono tracking-tight text-white">
                    {formatCurrency(currentSticker.totalMsrp)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Monroney Band: EPA Fuel Economy & Government Safety Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white text-[#111827] divide-y md:divide-y-0 md:divide-x divide-[#003478]">
              {/* EPA Fuel Economy Box (6 cols) */}
              <div className="md:col-span-6 p-4 bg-[#F8FAFC]">
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Fuel className="w-4 h-4 text-[#003478]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#003478]">
                      EPA Fuel Economy and Environment
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#52606D] uppercase">Official Ratings</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center my-2">
                  <div className="bg-white p-2 rounded border border-[#DCE2E9]">
                    <span className="text-[10px] text-[#7B8794] block uppercase font-bold">Combined</span>
                    <span className="text-lg font-black font-mono text-[#003478]">{currentSticker.combMpg}</span>
                    <span className="text-[9px] text-[#52606D] block font-semibold">MPG / MPGe</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-[#DCE2E9]">
                    <span className="text-[10px] text-[#7B8794] block uppercase font-bold">City</span>
                    <span className="text-lg font-black font-mono text-[#111827]">{currentSticker.cityMpg}</span>
                    <span className="text-[9px] text-[#52606D] block font-semibold">MPG</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-[#DCE2E9]">
                    <span className="text-[10px] text-[#7B8794] block uppercase font-bold">Highway</span>
                    <span className="text-lg font-black font-mono text-[#111827]">{currentSticker.hwyMpg}</span>
                    <span className="text-[9px] text-[#52606D] block font-semibold">MPG</span>
                  </div>
                </div>

                <div className="text-[10px] text-[#52606D] flex justify-between items-center pt-1 border-t border-[#E2E8F0]">
                  <span>Annual Fuel Cost: <strong className="text-[#111827] font-mono">{formatCurrency(currentSticker.annualFuelCost)}</strong></span>
                  <span className="text-[9px] text-[#7B8794]">EPA Est. 15,000 miles/yr</span>
                </div>
              </div>

              {/* NHTSA Government 5-Star Safety Ratings (6 cols) */}
              <div className="md:col-span-6 p-4 bg-[#F8FAFC]">
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#003478]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#003478]">
                      Government 5-Star Safety Ratings
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#52606D] uppercase">NHTSA</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-[11px]">Overall Vehicle Score</span>
                    <div className="flex items-center gap-0.5 text-[#B7791F]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < currentSticker.safetyRatings.overall ? 'fill-[#B7791F] text-[#B7791F]' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-[#52606D]">
                    <span>Frontal Crash (Driver & Passenger)</span>
                    <div className="flex items-center gap-0.5 text-[#B7791F]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < currentSticker.safetyRatings.frontal ? 'fill-[#B7791F] text-[#B7791F]' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-[#52606D]">
                    <span>Side Crash (Front & Rear Seat)</span>
                    <div className="flex items-center gap-0.5 text-[#B7791F]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < currentSticker.safetyRatings.side ? 'fill-[#B7791F] text-[#B7791F]' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-[#52606D]">
                    <span>Rollover Resistance</span>
                    <div className="flex items-center gap-0.5 text-[#B7791F]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < currentSticker.safetyRatings.rollover ? 'fill-[#B7791F] text-[#B7791F]' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-[#7B8794] pt-1.5 border-t border-[#E2E8F0] mt-2">
                  Source: National Highway Traffic Safety Administration (NHTSA).
                </div>
              </div>
            </div>

            {/* Bottom Footer Fine Print */}
            <div className="bg-[#001C3D] text-[#DCE8F5] text-[10px] px-4 py-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#00285E]">
              <span>Authentic Factory Window Sticker Reproduction • Non-Affiliated Independent Research Record</span>
              <span className="font-vin tracking-wider">DOC ID: WS-{currentSticker.vin.slice(-8)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
