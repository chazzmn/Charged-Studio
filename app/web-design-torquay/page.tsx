import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-torquay")!;

export const metadata = locationMetadata(data);

export default function WebDesignTorquayPage() {
  return <LocationPage data={data} />;
}
