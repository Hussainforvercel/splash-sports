import { Hero } from "../components/hero";
import { FeaturedGuarantee } from "../components/FeaturedGuaranteed";
import { FeaturedSurvivorRevivals } from "../components/FeaturedSurvivorRevivals";
import { FeaturedSurvivorRevivalsVol2 } from "../components/FeaturedSurvivorRevivalsVol2";
import { NFLCommissionersVol1 } from "../components/NFLCommissionersVol1";
import { NFLCommissionersVol2 } from "../components/NFLCommissionersVol2";
import { NFLCommissionersVol3 } from "../components/NFLCommissionersVol3";
import { NFLWeeklyPickEmATS } from "../components/NFLWeeklyPick'EmATS";
import { NCAAFSurvivorRevival } from "../components/NCAAFSurvivorRevival";
import { NFLFantasyTiersGuaranteed } from "../components/NFLFantasyTiersGuaranteed";
import { NCAAFWeeklyPickEmATS } from "../components/NCAAFWeeklyPickEmATS";
import { NFLWeeklyPickEmConfidence } from "../components/NFLWeeklyPickEmConfidence";
import { PGATiers } from "../components/PGATiers";

export default function PageComponents() {
  return (
    <div>
      <Hero />
      <FeaturedGuarantee />
      <FeaturedSurvivorRevivals />
      <FeaturedSurvivorRevivalsVol2 />
      <NFLCommissionersVol1 />
      <NFLCommissionersVol2 />
      <NFLCommissionersVol3 />
      <NFLWeeklyPickEmATS />
      <NCAAFSurvivorRevival />
      <NFLFantasyTiersGuaranteed />
      <NCAAFWeeklyPickEmATS />
      <NFLWeeklyPickEmConfidence />
      <PGATiers />
    </div>
  );
}
