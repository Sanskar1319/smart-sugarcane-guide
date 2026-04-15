import { Bug, Droplets, Layers, Leaf, Shovel, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/Layout";

interface GuideSection {
  titleKey: string;
  icon: React.ElementType;
  itemKeys: string[];
  accentClass: string;
  borderClass: string;
}

const sections: GuideSection[] = [
  {
    titleKey: "guide.idealConditions",
    icon: Sun,
    itemKeys: [
      "guide.tempRange",
      "guide.humidityRange",
      "guide.rainfallRange",
      "guide.sunlight",
    ],
    accentClass: "text-primary",
    borderClass: "border-l-primary",
  },
  {
    titleKey: "guide.soilReq",
    icon: Layers,
    itemKeys: [
      "guide.soilBest",
      "guide.soilPh",
      "guide.soilDrainage",
      "guide.soilWaterlog",
    ],
    accentClass: "text-secondary",
    borderClass: "border-l-secondary",
  },
  {
    titleKey: "guide.irrigation",
    icon: Droplets,
    itemKeys: [
      "guide.irrigation1",
      "guide.irrigation2",
      "guide.irrigation3",
      "guide.irrigation4",
    ],
    accentClass: "text-primary",
    borderClass: "border-l-primary",
  },
  {
    titleKey: "guide.fertilizer",
    icon: Leaf,
    itemKeys: [
      "guide.fertilizer1",
      "guide.fertilizer2",
      "guide.fertilizer3",
      "guide.fertilizer4",
    ],
    accentClass: "text-secondary",
    borderClass: "border-l-secondary",
  },
  {
    titleKey: "guide.planting",
    icon: Shovel,
    itemKeys: [
      "guide.planting1",
      "guide.planting2",
      "guide.planting3",
      "guide.planting4",
    ],
    accentClass: "text-primary",
    borderClass: "border-l-primary",
  },
  {
    titleKey: "guide.pestControl",
    icon: Bug,
    itemKeys: ["guide.pest1", "guide.pest2", "guide.pest3", "guide.pest4"],
    accentClass: "text-destructive",
    borderClass: "border-l-destructive",
  },
];

export default function GuidePage() {
  const { t } = useTranslation();

  return (
    <Layout showHeader headerTitle={t("guide.title")}>
      <div className="pb-6">
        <p className="mb-5 font-body text-base text-muted-foreground">
          {t("guide.subtitle")}
        </p>

        <div className="flex flex-col gap-4">
          {sections.map(
            (
              { titleKey, icon: Icon, itemKeys, accentClass, borderClass },
              idx,
            ) => (
              <motion.div
                key={titleKey}
                data-ocid={`guide.section.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
                className={`card-elevated border-l-4 p-4 ${borderClass}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-muted ${accentClass}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-base font-bold text-foreground">
                    {t(titleKey)}
                  </h2>
                </div>
                <ul className="flex flex-col gap-2 pl-1">
                  {itemKeys.map((key) => (
                    <li key={key} className="flex items-start gap-2.5">
                      <span
                        className={`mt-[6px] h-2 w-2 flex-shrink-0 rounded-full ${accentClass.replace("text-", "bg-")}`}
                        aria-hidden="true"
                      />
                      <span className="font-body text-base leading-relaxed text-foreground/80">
                        {t(key)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </Layout>
  );
}
