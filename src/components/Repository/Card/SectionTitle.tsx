const SectionTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <h3 className="mb-4 font-semibold text-base text-gray-900 dark:text-gray-100">
      { title }
    </h3>
  )
}
export default SectionTitle
