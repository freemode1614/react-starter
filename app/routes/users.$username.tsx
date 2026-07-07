import { Link, useParams } from "react-router";

export default function UserProfile() {
  const { username } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">User: {username}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a dynamic route. The username is captured from the URL.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
