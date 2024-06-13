export default function Welcome() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 px-4 dark:bg-gray-900">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-50 dark:text-gray-50">PostedIn</h1>
        <p className="text-lg text-gray-400 dark:text-gray-400">
          Launch extension on a linkedin post
          <br />
          <a
            href="https://www.linkedin.com/posts/sridhar-ramaswamy_snowflakesummit-activity-7203590496064012288-FUlr/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-400 hover:underline dark:text-blue-400"
          >
            Here is one from Sridhar
          </a>
        </p>
      </div>
    </div>
  );
}
