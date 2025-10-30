import { useState } from "react";
import { HalloweenBackground } from "@/components/halloween/HalloweenBackground";
import { Envelope } from "@/components/halloween/Envelope";
import { InviteLetter } from "@/components/halloween/InviteLetter";
import { ConfirmButton } from "@/components/halloween/ConfirmButton";

const HalloweenInvite = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setTimeout(() => setShowLetter(true), 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden halloween-bg cursor-mystical">
      <HalloweenBackground />
      
      {!isOpened && (
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <Envelope onOpen={handleOpenEnvelope} />
        </div>
      )}

      {showLetter && (
        <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
          <InviteLetter />
        </div>
      )}

      {showLetter && (
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-30">
          <ConfirmButton />
        </div>
      )}
    </div>
  );
};

export default HalloweenInvite;
