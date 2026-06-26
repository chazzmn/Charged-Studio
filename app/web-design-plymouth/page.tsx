import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-plymouth")!;

export const metadata = locationMetadata(data);

export default function WebDesignPlymouthPage() {
  return <LocationPage data={data} />;
}
