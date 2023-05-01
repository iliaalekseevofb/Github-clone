const Error = ({ errorMessage }: { errorMessage: string }): JSX.Element => {
  return (
    <span className="error">
      {errorMessage}
    </span>
  )
}
export default Error
