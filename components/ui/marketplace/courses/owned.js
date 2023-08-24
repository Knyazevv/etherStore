import { CourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function OwnedCourses(){
    return(
        <>
            <MarketHeader />
            <div className="py-4">
                <MarketHeader />
            </div>
            <section className="grid grid-cols-1">
                <CourseCard />
            </section>
        </>
    )
}

OwnedCourses.Layout = BaseLayout