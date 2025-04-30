import { DraggableList } from "@/components/draggable/draggable-list";
import { Links } from "@/components/links/links";
import { TabsComponent } from "@/components/tabs/tabs";

export default function Pagination() {
  return (
    <div>
      <TabsComponent />
      <Links />
      <DraggableList
        items={["username", "email", "phone", "website", "name"]}
      />
    </div>
  );
}
