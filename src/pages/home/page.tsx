import { SectionItem } from "~/shared/ui/section-item";

export function HomePage() {
  return (
    <div className="flex flex-wrap-reverse justify-center gap-x-14 gap-y-11 py-10">
      <SectionItem
        to={"#"}
        lesson={false}
        test={false}
        imgSrc="/images/internet.png"
      />
      <SectionItem
        to={"#"}
        lesson={false}
        test={false}
        imgSrc="/images/heart.png"
      />
      <SectionItem
        to={"#"}
        lesson={true}
        test={true}
        imgSrc="/images/lock.png"
      />
      <SectionItem
        to={"#"}
        lesson={true}
        test={false}
        imgSrc="/images/lock-2.png"
      />
      <SectionItem
        to={"#"}
        lesson={true}
        test={false}
        imgSrc="/images/book.png"
      />
    </div>
  );
}
