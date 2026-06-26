import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-devon")!;

export const metadata = locationMetadata(data);

export default function WebDesignDevonPage() {
  return <LocationPage data={data} />;
}
