import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-barnstaple")!;

export const metadata = locationMetadata(data);

export default function WebDesignBarnstaplePage() {
  return <LocationPage data={data} />;
}
