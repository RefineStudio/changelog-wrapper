import { useState } from "react";
import { ChangelogEntry } from "../types";

const clsx = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(" ");
};

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};

interface ChangelogContentProps {
  entries: ChangelogEntry[];
}

const ChangelogContent = ({ entries }: ChangelogContentProps) => (
  <div className="space-y-8">
    {entries.map((entry, index) => (
      <article
        key={entry.id}
        className={clsx(
          "relative",
          index !== entries.length - 1 &&
            "border-b border-gray-200 dark:border-gray-700 pb-8"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
          <div className="flex-shrink-0 sm:w-32">
            <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {formatDate(entry.date)}
            </time>
          </div>
          <div className="flex-1 min-w-0 mt-2 sm:mt-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {entry.title}
            </h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              {entry.content}
            </div>
            {entry.image && (
              <div className="mb-4">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full max-w-lg rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                />
              </div>
            )}
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    ))}
    {entries.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          No changelog entries found.
        </p>
      </div>
    )}
  </div>
);

interface Props {
  entries: ChangelogEntry[];
  theme?: "light" | "dark";
  display?: "modal" | "page";
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Changelog({
  entries,
  theme = "light",
  display = "page",
  isOpen = true,
  onClose,
  className,
}: Props) {
  const [internalOpen, setInternalOpen] = useState(true);
  const open = display === "modal" ? isOpen : internalOpen;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className={clsx(theme === "dark" && "dark", className)}>
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-white min-h-0">
        {children}
      </div>
    </div>
  );

  if (display === "modal") {
    if (!open) return null;

    return (
      <Wrapper>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Changelog
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <ChangelogContent entries={entries} />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Changelog
            </h1>
          </div>
          <ChangelogContent entries={entries} />
        </div>
      </div>
    </Wrapper>
  );
}
