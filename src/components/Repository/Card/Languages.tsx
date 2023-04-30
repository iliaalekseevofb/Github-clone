import { LANGUAGES_COLORS } from "../../../utils/constants";
import { RepoLanguages } from "../../../utils/types";
import SectionTitle from "./SectionTitle";

const Languages = ({ languagesData }: { languagesData: RepoLanguages }) => {
  let languagesSum: number = 0,
    languagesPercents: RepoLanguages = {};

  if (languagesData) {
    languagesSum = Object.values(languagesData).reduce((a: number, b: number) => a + b, 0);
    Object.keys(languagesData).map((lang: string): void => {
      const languagePercent: number = Number(((languagesData[lang] / languagesSum) * 100).toFixed(1));
      languagesPercents = {...languagesPercents, ...{ [lang]: languagePercent }};
    })
  }

  return (
    <section className="flex-1">
      <SectionTitle title="Languages" />
      <div className="w-full flex items-center rounded-md overflow-hidden">
        {Object.keys(languagesPercents).map((lang: string) => (
          <span
            key={lang}
            style={{ width: `${languagesPercents[lang]}%` }}
            className={`relative inline-block h-2 ${LANGUAGES_COLORS[lang.replace(/ /g,"_")]}`}
          />
        ))}
      </div>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-4">
        {Object.keys(languagesPercents).map((lang: string) => (
          <div key={lang} className="group flex items-center text-sm cursor-pointer">
            <span
              className={`relative inline-block w-3 h-3 mr-2 rounded-full ${LANGUAGES_COLORS[lang.replace(/ /g,"_")]}`}
            />
            <span className="mr-1 text-gray-100 group-hover:text-blue-700">{lang}:</span>
            <span className="text-gray-400 group-hover:text-blue-700">{languagesPercents[lang]}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Languages
