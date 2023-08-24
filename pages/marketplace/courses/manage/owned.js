import { Card } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function OwnedCourses() {
  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
        <Card />
      </section>
    </>
  );
}

OwnedCourses.Layout = BaseLayout;
