import LocationPage from "@/components/LocationPage";
import { getLocation, locationMetadata } from "@/lib/locations";

const data = getLocation("web-design-st-thomas")!;

export const metadata = locationMetadata(data);

export default function WebDesignStThomasPage() {
  return <LocationPage data={data} />;
}
