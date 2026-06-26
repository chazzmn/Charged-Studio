import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-bristol")!;

export const metadata = locationMetadata(data);

export default function WebDesignBristolPage() {
  return <LocationPage data={data} />;
}
