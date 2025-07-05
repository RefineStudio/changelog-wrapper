import * as react_jsx_runtime from 'react/jsx-runtime';

interface ChangelogEntry {
    id: string;
    title: string;
    date: string;
    content: string;
    tags?: string[];
}

interface Props {
    entries: ChangelogEntry[];
    theme?: "light" | "dark";
    display?: "modal" | "page";
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
}
declare function Changelog({ entries, theme, display, isOpen, onClose, className, }: Props): react_jsx_runtime.JSX.Element;

export { Changelog, type ChangelogEntry };
