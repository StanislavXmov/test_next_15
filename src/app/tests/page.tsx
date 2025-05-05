import { DraggableList } from "@/components/draggable/draggable-list";
import { TabsComponent } from "@/components/tabs/tabs";

export default function Pagination() {
  return (
    <div>
      <TabsComponent />
      <DraggableList
        items={["username", "email", "phone", "website", "name"]}
      />
    </div>
  );
}
