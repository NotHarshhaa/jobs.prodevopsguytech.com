import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium DevOps & Cloud Jobs | ProDevOpsGuy",
  description:
    "Find elite DevOps and cloud computing opportunities from industry-leading companies.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {children}
    </div>
  );
}
