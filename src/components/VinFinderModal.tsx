import React, { useState } from 'react';
import { X, Search, ShieldCheck, Car, FileText, Smartphone, Tv, Wrench, CheckCircle2 } from 'lucide-react';
import { VIN_LOCATIONS } from '../data/mockData';

interface VinFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSampleVin?: (vin: string) => void;
}

export const VinFinderModal: React.FC<VinFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectSampleVin,
}) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('dashboard');

  if (!isOpen) return null;

  const selectedLocation = VIN_LOCATIONS.find((loc) => loc.id === selectedLocationId) || VIN_LOCATIONS[0];

  const getLocationIcon = (id: string) => {
    switch (id) {
      case 'dashboard':
        return <Car className="w-5 h-5 text-[#003478]" />;
      case 'door-jamb':
        return <ShieldCheck className="w-5 h-5 text-[#003478]" />;
      case 'registration':
      case 'insurance':
      case 'title':
        return <FileText className="w-5 h-5 text-[#003478]" />;
      case 'fordpass':
        return <Smartphone className="w-5 h-5 text-[#003478]" />;
      case 'sync-screen':
        return <Tv className="w-5 h-5 text-[#003478]" />;
      case 'service-records':
        return <Wrench className="w-5 h-5 text-[#003478]" />;
      default:
        return <Search className="w-5 h-5 text-[#003478]" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vin-guide-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#DCE2E9] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCE2E9] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center text-[#003478]">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 id="vin-guide-title" className="text-xl font-bold text-[#111827] font-heading">
                How to Find Your Ford VIN
              </h2>
              <p className="text-sm text-[#52606D]">
                Your 17-character Vehicle Identification Number is located in several easy-to-check spots.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close VIN finder guide"
            className="p-2 text-[#52606D] hover:text-[#111827] hover:bg-[#F1F4F8] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#F7F9FC]">
          {/* Left Column: Quick Location Selectors */}
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#7B8794] px-1 mb-2">
              Select Location ({VIN_LOCATIONS.length} Places)
            </p>
            <div className="space-y-1.5 max-h-[440px] overflow-y-auto pr-1">
              {VIN_LOCATIONS.map((loc) => {
                const isActive = loc.id === selectedLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-[#EEF4FB] border-[#003478] shadow-sm'
                        : 'bg-white border-[#DCE2E9] hover:bg-[#F1F4F8] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">{getLocationIcon(loc.id)}</div>
                    <div>
                      <div className={`text-sm font-semibold ${isActive ? 'text-[#003478]' : 'text-[#111827]'}`}>
                        {loc.title}
                      </div>
                      <div className="text-xs text-[#52606D] line-clamp-1 mt-0.5">{loc.shortDesc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Guide & Instructions */}
          <div className="md:col-span-7 bg-white rounded-xl border border-[#DCE2E9] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EEF4FB] text-[#003478] w-fit mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16834B]" />
                Location Guide
              </div>

              <h3 className="text-xl font-bold text-[#111827] font-heading mb-2">
                {selectedLocation.title}
              </h3>
              <p className="text-sm text-[#52606D] leading-relaxed mb-5">
                {selectedLocation.shortDesc}
              </p>

              {/* Graphical Representation Card */}
              <div className="bg-[#F7F9FC] border border-[#DCE2E9] rounded-xl p-5 mb-5 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#DCE2E9] flex items-center justify-center">
                    {getLocationIcon(selectedLocation.id)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7B8794]">Step-by-Step Instructions</span>
                    <p className="text-xs text-[#111827] font-medium">Follow these steps to read your VIN:</p>
                  </div>
                </div>

                <div className="text-sm text-[#111827] bg-white p-3.5 rounded-lg border border-[#DCE2E9] font-medium leading-relaxed">
                  {selectedLocation.instructions}
                </div>

                {/* Visual VIN format badge */}
                <div className="mt-4 pt-3 border-t border-[#DCE2E9]/60 flex flex-col gap-1.5">
                  <span className="text-xs text-[#52606D]">Sample 17-Character VIN Structure:</span>
                  <div className="font-vin text-sm font-semibold bg-[#111827] text-white px-3 py-2 rounded-lg text-center tracking-wider">
                    1FTFW1E85 • M • FA12345
                  </div>
                  <span className="text-[11px] text-[#7B8794] text-center">
                    * Note: Standard VINs never contain the letters <strong className="text-[#111827]">I</strong>, <strong className="text-[#111827]">O</strong>, or <strong className="text-[#111827]">Q</strong> to avoid confusion with numbers.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#DCE2E9] flex flex-wrap items-center justify-between gap-3">
              {onSelectSampleVin && (
                <button
                  onClick={() => {
                    onSelectSampleVin('1FTFW1E85MFA12345');
                    onClose();
                  }}
                  className="text-xs font-semibold text-[#003478] hover:text-[#00285E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Try with Sample 2021 F-150 VIN &rarr;
                </button>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#003478] hover:bg-[#00285E] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer ml-auto"
              >
                I Found My VIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
