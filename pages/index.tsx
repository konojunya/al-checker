import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import al from "../allowlist.json";

export default function Home() {
  const address = useAddress();
  const [canMintAmount, setCanMintAmount] = useState<number | null>(null);

  const handleCheckAL = useCallback(() => {
    const foundAL = al.find((al) => al.addr === address);
    setCanMintAmount(foundAL?.amount ?? null);
  }, [address]);

  if (!address) {
    return <ConnectWallet />;
  }

  return (
    <div>
      <h1>{address}</h1>
      <button onClick={handleCheckAL}>check your al amount!</button>
      {canMintAmount ? (
        <p>you can mint {canMintAmount} nfts!</p>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
