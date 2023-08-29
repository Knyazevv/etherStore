import { CourseCard } from "@components/ui/course";
import { Button, Message } from "@components/ui/common";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function OwnedCourses() {
  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
        <CourseCard>
          <Message>My custom message!</Message>
          <Button>Watch the course</Button>
        </CourseCard>
      </section>
    </>
  );
}

OwnedCourses.Layout = BaseLayout;
