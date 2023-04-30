import { SectionItem } from "~/shared/ui/section-item";

const sections = [
  {
    id: "4",
    lesson: true,
    test: false,
  },
  {
    id: "5",
    lesson: true,
    test: false,
  },
  {
    id: "2",
    lesson: true,
    test: false,
  },
  {
    id: "3",
    lesson: true,
    test: false,
  },
  {
    id: "1",
    lesson: true,
    test: false,
  },
];

export function HomePage() {
  return (
    <div className="flex flex-wrap-reverse justify-center gap-x-14 gap-y-11 py-10">
      {sections.map(function (section) {
        return <SectionItem {...section} />;
      })}
    </div>
  );
}
