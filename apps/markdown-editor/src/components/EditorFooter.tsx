import { clsx } from "clsx";
import type { IconType } from "react-icons";
import { VscGithub, VscPreview } from "react-icons/vsc";
import { open } from "~/utils/navigation";

type StatusBarItemProps = React.ComponentProps<"button"> & {
	icon?: IconType;
	accent?: boolean;
};

const StatusBarItem: React.FC<StatusBarItemProps> = ({
	icon: Icon,
	accent,
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={clsx(
				"flex h-6 cursor-pointer items-center justify-center gap-1 text-xs",
				accent
					? "bg-editor-statusBarItem-remoteBackground px-2 text-editor-statusBarItem-remoteForeground hover:text-black"
					: "bg-editor-commandCenter-background px-1 text-editor-commandCenter-foreground hover:bg-editor-commandCenter-activeBackground",
			)}
		>
			{Icon && <Icon className="size-4" />}
			{children}
		</button>
	);
};

type Props = {
	column: number;
	lineNumber: number;
	selectedLength: number | null;
	content: string;
	onPreview: () => void;
};

export const EditorFooter: React.FC<Props> = ({
	column,
	lineNumber,
	selectedLength,
	content,
	onPreview,
}) => {
	return (
		<footer className="bg-editor-commandCenter-background">
			<div className="flex justify-between pr-3">
				<nav className="flex gap-2">
					<StatusBarItem icon={VscPreview} accent onClick={onPreview}>
						記事をプレビュー
					</StatusBarItem>
				</nav>
				<nav className="flex gap-2">
					<StatusBarItem>
						行 {lineNumber}、列 {column}
						{selectedLength && ` (${selectedLength} 個選択)`}
					</StatusBarItem>
					<StatusBarItem>{content.length} 文字</StatusBarItem>
					<StatusBarItem
						icon={VscGithub}
						onClick={() =>
							open("https://github.com/simochee/microCMS-Markdown-Editor")
						}
					/>
				</nav>
			</div>
		</footer>
	);
};
