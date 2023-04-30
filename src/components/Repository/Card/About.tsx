import SectionTitle from "./SectionTitle";

const About = ({ repoItemDescription }: { repoItemDescription: string }) => {
  return (
    <section className="flex-1">
      <SectionTitle title="About" />
      <p className="text-sm text-gray-400">{ repoItemDescription }</p>
    </section>
  )
}
export default About
